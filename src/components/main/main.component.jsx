import * as React from "react";
import products from "../../data/products.mock"
import style from "./main.module.css"

function getProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            1000
        )
    })
}


class Main extends React.Component {
    state = {
        productList: [],
        counter: 0
    }



async componentDidMount() {
       const productList = await getProducts()
       this.setState({
           productList
       })
    }


    render() {

        const { productList } = this.state

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
                                        productList.map(product => (
                                            <div className={style.staff__item}>
                                                <a href=""><img className={style.staff__icon} src={product.url} alt=""/></a>
                                                <h4 className={style.staff__title}>${product.name}</h4>
                                                <h3 className={style.staff__price}>${product.price}</h3>
                                                <div>
                                                    <button className={style.staff__btnAdd} onClick = {() => this.addToCart(`${product.id}`)}>
                                                        <img className={style.staff__trashImg} src="../../assets/img/icon/bascket1.png" alt=""/>
                                                    </button>
                                                    <button className={style.staff__btnAdd} onClick = {() => this.deleteToCart(`${product.id}`)}><img className={style.staff__trashImg}
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


    // const totalPriceCart = new Map();
    listProductsInCart = new Map();

    productsWithDiscount = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];

    newDiscount = (discount) => {
        return (price) => {
            return price - price * discount;
        };
    };


    transformPriceByDiscount = (product) => {
        return {
            ...product,
            price: (this.newDiscount(0.5)(product.price)) // add discount 50%
        };
    }


    getCatalogWithDiscount = (generalCatalog, productsWithDiscount) => {

        return generalCatalog.map((product) => {
            if(productsWithDiscount.includes(product.name)){
                return this.transformPriceByDiscount(product);
            } else {
                return product;
            }

        })
    }


    /**/


    deleteToCart = (index) => {
        if (this.listProductsInCart.has(index) === true) {
            let productFromCart = this.listProductsInCart.get(index)
            --productFromCart.count;
            if (productFromCart.count === 0) {
                this.listProductsInCart.delete(index)
            } else {
                productFromCart.totalPrice = productFromCart.count * productFromCart.price;
                this.listProductsInCart.set(index, productFromCart);
            }



        } else {
            return this.listProductsInCart

        }

        this.counterCart()
        console.log(this.listProductsInCart)
        console.log(this.state.counter)

    }


    addToCart = (index) => {

        const catalog = this.getCatalogWithDiscount(products, this.productsWithDiscount);
        /*const product = catalog[index];*/

        if (this.listProductsInCart.has(index) === true) {
            let productFromCart = this.listProductsInCart.get(index)
            ++productFromCart.count;
            productFromCart.totalPrice = productFromCart.count * productFromCart.price;
            this.listProductsInCart.set(index, productFromCart);


        } else {
            const product = catalog[index];
            /*listProductsInCart.price = priceItem;*/
            ++product.count;
            product.totalPrice = product.count * product.price;
            this.listProductsInCart.set(index, product);


        }

        this.counterCart()
        console.log(this.listProductsInCart)
        console.log(this.state.counter)

    }

    counterCart = () => {
        let counter = 0;
        this.listProductsInCart.forEach(value => counter += value.count);
        this.setState({
            ...this.state,
            counter
        })
        this.props.updateData(this.state.counter)
    }

}


export default Main;
