import * as React from "react";
import products from "../../data/products.mock"
import style from "./main.module.css"
import {useEffect, useState} from 'react'

async function getProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            1000
        )
    })
}



const Main = (props) => {

    const productList = async () => {await getProducts().then(result => result)};

    const [product, setProduct] = useState([])

    useEffect (() => {
        getProducts().then(response => setProduct(response));
    }, []);


    let listProductsInCart = new Map();

    const productsWithDiscount = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];

    const newDiscount = (discount) => {
        return (price) => {
            return price - price * discount;
        };
    };


    const transformPriceByDiscount = (product) => {
        return {
            ...product,
            price: (newDiscount(0.5)(product.price)) // add discount 50%
        };
    }


    const getCatalogWithDiscount = (generalCatalog, productsWithDiscount) => {

        return generalCatalog.map((product) => {
            if(productsWithDiscount.includes(product.name)) {
                return transformPriceByDiscount(product);
            } else {
                return product;
            }

        })
    }

    const deleteToCart = (index) => {
        if (listProductsInCart.has(index) === true) {
            let productFromCart = listProductsInCart.get(index);
            --productFromCart.count;
            if (productFromCart.count === 0) {
                listProductsInCart.delete(index);
                console.log(listProductsInCart)
            } else {
                productFromCart.totalPrice = productFromCart.count * productFromCart.price;
                listProductsInCart.set(index, productFromCart);
                console.log(listProductsInCart)
            }
        } else {
            return listProductsInCart;

        }
        counterCart()
    }

    const addToCart = (index) => {

        const catalog = getCatalogWithDiscount(products, productsWithDiscount);

        if (listProductsInCart.has(index) === true) {
            let productFromCart = listProductsInCart.get(index);
            ++productFromCart.count;
            productFromCart.totalPrice = productFromCart.count * productFromCart.price;
            listProductsInCart.set(index, productFromCart);
            console.log(listProductsInCart)


        } else {
            const product = catalog[index];
            ++product.count;
            product.totalPrice = product.count * product.price;
            listProductsInCart.set(index, product);
            console.log(listProductsInCart)


        }

        counterCart();

    }



    const counterCart = () => {
        let counter = 0;
        listProductsInCart.forEach(value => counter += value.count);
        props.updateData(counter);
    }



            return (
                <main>
                    <div className={style.container}>
                        <div className={style.containerBox}>
                            <div className={style.container__mainImg}>
                                <a href="#"><img src="../../assets/img/333.png" alt="sss"/></a>
                            </div>
                            <div>
                                <div className={style.staff}>

                                    {
                                        product.map(product => (
                                            <div className={style.staff__item}>
                                                <a href=""><img className={style.staff__icon} src={product.url} alt=""/></a>
                                                <h4 className={style.staff__title}>${product.name}</h4>
                                                <h3 className={style.staff__price}>${product.price}</h3>
                                                <div>
                                                    <button className={style.staff__btnAdd} onClick = {() => addToCart(`${product.id}`)}>
                                                        <img className={style.staff__trashImg} src="../../assets/img/icon/bascket1.png" alt=""/>
                                                    </button>
                                                    <button className={style.staff__btnAdd} onClick = {() => deleteToCart(`${product.id}`)}><img className={style.staff__trashImg}
                                                                                                 src="../../assets/img/icon/bascket2.png" alt=""/></button>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )



}

export default Main;
