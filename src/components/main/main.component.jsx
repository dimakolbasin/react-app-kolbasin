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

// const totalPriceCart = new Map();
const listProductsInCart = new Map();

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


function getCatalogWithDiscount(generalCatalog, productsWithDiscount) {

    return generalCatalog.map((product) => {
        if(productsWithDiscount.includes(product.name)){
            return transformPriceByDiscount(product);
        } else {
            return product;
        }

    })
}


/**/


const addToCart = (index) => {

    const catalog = getCatalogWithDiscount(products, productsWithDiscount);
    /*const product = catalog[index];*/

    if (listProductsInCart.has(index) === true) {
        let productFromCart = listProductsInCart.get(index)
        ++productFromCart.count;
        productFromCart.totalPrice = productFromCart.count * productFromCart.price;
        listProductsInCart.set(index, productFromCart);


    } else {
        const product = catalog[index];
        /*listProductsInCart.price = priceItem;*/
        ++product.count;
        product.totalPrice = product.count * product.price;
        listProductsInCart.set(index, product);


    }

    console.log(listProductsInCart)
}



class Main extends React.Component {
    state = {
        productList: [],
        loading: true
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
                                                    <button className={style.staff__btnAdd} onClick={addToCart(`${product.id}`)}>
                                                        <img className={style.staff__trashImg} src="../../assets/img/icon/bascket1.png" alt=""/>
                                                    </button>
                                                    <button className={style.staff__btnAdd}><img className={style.staff__trashImg}
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


}


export default Main;
