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

    const [product, setProduct] = useState([]);

    useEffect (() => {
        getProducts().then(response => setProduct(response));
    }, []);



    const [cart, SetCart] = useState(new Map());



    const deleteToCart = (index) => {
        if (cart.has(index) === true) {
            let productFromCart = cart.get(index);
            --productFromCart.count;
            if (productFromCart.count === 0) {
                cart.delete(index);

            } else {
                productFromCart.totalPrice = productFromCart.count * productFromCart.price;
                cart.set(index, productFromCart);

            }
        } else {
            return cart;

        }
        counterCart()
    }

    const addToCart = (index) => {
        const catalog = products
        if (cart.has(index) === true) {
            let productFromCart = cart.get(index);
            ++productFromCart.count;
            productFromCart.totalPrice = productFromCart.count * productFromCart.price;
            cart.set(index, productFromCart);


        } else {
            const product = catalog[index];
            ++product.count;
            product.totalPrice = product.count * product.price;
            cart.set(index, product);


        }

        counterCart();

    }



    const counterCart = () => {
        let counter = 0;
        cart.forEach(value => counter += value.count);
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
