import * as React from "react";
import products from "../../data/products.mock"
import style from "./main.module.css"

const productsPrint = products.map(product => (
    <div className={style.staff__item}>
        <a href=""><img className={style.staff__icon} src="../../assets/img/img-phone/xs%20jet%20black.png" alt=""/></a>
        <h4 className={style.staff__title}>${product.name}</h4>
        <h3 className={style.staff__price}>${product.price}</h3>
        <div>
            <button className={style.staff__btnAdd}>
                <img className={style.staff__trashImg} src="../../assets/img/icon/bascket1.png" alt=""/>
            </button>
            <button className={style.staff__btnAdd}><img className={style.staff__trashImg} src="../../assets/img/icon/bascket2.png" alt=""/></button>
        </div>
    </div>
))

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className={style.container}>
                    <div className={style.containerBox}>
                        <div className={style.container__mainImg}>
                            <a href="#"><img src="../../assets/img/333.png" alt="sss"/></a>
                        </div>
                        <div>
                            <div className={style.staff}>

                                {productsPrint}

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
