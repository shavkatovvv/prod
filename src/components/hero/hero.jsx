import React from "react";
import style from "./style.module.css";
import { cat } from "../../catalog-data/catalog";

export const Hero = () => {
    return (
        <div className={style.hero}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.list_block}>
                        <ul className={style.data_list}>
                            {cat.map((item) => {
                                return (
                                    <li
                                        className={style.data_item}
                                        key={item.id}
                                    >
                                        <img src={item.img} alt="img" />
                                        <p className={style.data_text}>
                                            {item.name}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className={style.big_block}></div>
                </div>
            </div>
        </div>
    );
};
