import * as React from "react";
import style from "../product-details/product-details.module.css";
import { useParams } from "react-router-dom";
import products from "../../data/products.mock";
import { useHistory } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams();

    const history = useHistory();

    const returnBack = () => {
        history.push("/");
    }

    const product = products.find(p => p.id === +id);

    return (
        <main>
            <div className={style.container}>
                <div className={style.containerBox}>
                    <div className={style.container__mainImg}>
                        <a href="#"><img src="../../assets/img/333.png" alt="sss"/></a>
                    </div>
                    <div>
                        <div className={style.staff}>
                                    <div className={style.staff__item}>
                                        <img className={style.staff__title} src={product.url}/>
                                        <h4 className={style.staff__title}>{product.name}</h4>
                                        <h3 className={style.staff__price}>{product.price}$</h3>
                                        <h3 className={style.staff__price}>{product.description}</h3>
                                        <button style={{height:'50px', width:'100px'}} onClick={returnBack}>назад</button>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default ProductDetails;