import React from "react";
import style from "./style.module.css";
import { prodData } from "../../prod-data/prod";
import { Link } from "react-router-dom";

export const Products = () => {
    return (
        <div className={style.products}>
            <div className="container">
                <h2 className={style.title}>Хиты продаж</h2>

                <div>
                    <ul className={style.list}>
                        {prodData.map((item) => {
                            return (
                                <Link to={`/catalog/${item.id}`} key={item.id}>
                                    <li className={style.item}>
                                        <img src={item.img} alt="item" />
                                        <p className={style.text}>
                                            {item.text}
                                        </p>
                                        <h3 className={style.item_title}>
                                            {item.title}
                                        </h3>
                                        <img src={item.otz} alt="otx" />
                                        <div className={style.item_wrapper}>
                                            <p className={style.item_price}>
                                                {item.price}
                                            </p>
                                            <img src={item.like} alt="like" />
                                        </div>
                                        <button className={style.btn}>
                                            {item.btn}
                                        </button>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
