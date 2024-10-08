import React from "react";
import style from "./style.module.css";

export const Catalog = () => {
    return (
        <div className={style.catalog}>
            <div className="container">
                <div className={style.block}>
                    <div className={style.prod}>
                        <p className={style.prod_text}>Каталог товаров</p>
                    </div>

                    <div>
                        <ul className={style.list}>
                            <li>
                                <a className={style.link_list} href="#">
                                    О компании
                                </a>
                            </li>
                            <li>
                                <a className={style.link_list} href="#">
                                    Акции
                                </a>
                            </li>
                            <li>
                                <a className={style.link_list} href="#">
                                    Рассрочка 0|0|18
                                </a>
                            </li>
                            <li>
                                <a className={style.link_list} href="#">
                                    Сервис и гарантия
                                </a>
                            </li>
                            <li>
                                <a className={style.link_list} href="#">
                                    Опт/дропшиппинг
                                </a>
                            </li>
                            <li>
                                <a className={style.link_list} href="#">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
