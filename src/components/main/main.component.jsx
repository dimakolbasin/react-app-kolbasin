import * as React from "react";
import products from "../../data/products.mock";
import style from "./main.module.css";
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, deleteFromCart} from "../../store/cart/cart.slice";
import {selectProducts, loadProducts} from "../../store/products/products.slice";



export async function getProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            1000
        )
    })
}



const Main = (props) => {

    const product = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch])



    const handleAdd = (id) => {
        dispatch(addToCart(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id));
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

                                                <Link to={`/product-details/${product.id}`}><img className={style.staff__icon} src={product.url} alt=""/></Link>

                                                <h4 className={style.staff__title}>{product.name}</h4>
                                                <h3 className={style.staff__price}>{product.price}$</h3>
                                                <div>
                                                    <button className={style.staff__btnAdd} onClick = {() => handleAdd(`${product.id}`)}>
                                                        <img className={style.staff__trashImg} src="../../assets/img/icon/bascket1.png" alt=""/>
                                                    </button>
                                                    <button className={style.staff__btnAdd} onClick = {() => handleDelete(`${product.id}`)}><img className={style.staff__trashImg}
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
