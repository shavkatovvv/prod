import React from "react";
import style from "./style.module.css";
import { prodData } from "../prod-data/prod";
import { useParams } from "react-router-dom";

export const Prod = () => {
    const { id } = useParams();
    const product = prodData.find((item) => item.id == parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className="container">
                <div className={style.item}>
                    <img src={product.img} alt="item" />
                    <p className={style.text}>{product.text}</p>
                    <h3 className={style.item_title}>{product.title}</h3>
                    <img src={product.otz} alt="otx" />
                    <div className={style.item_wrapper}>
                        <p className={style.item_price}>{product.price}</p>
                        <img src={product.like} alt="like" />
                    </div>
                    <button className={style.btn}>{product.btn}</button>
                </div>
            </div>
        </div>
    );
};
