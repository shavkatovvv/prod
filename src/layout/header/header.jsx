import React from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import eye from "../../assets/eye.svg";
import like from "../../assets/like.svg";
import res from "../../assets/res.svg";
import bag from "../../assets/bag.svg";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.logo_block}>
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className={style.num_block}>
                        <a className={style.num} href="tel:+7 (812) 660-50-54">
                            +7 (812) 660-50-54
                        </a>
                        <a className={style.num} href="tel:+7 (958) 111-95-03">
                            +7 (958) 111-95-03
                        </a>
                        <p className={style.calen}>Пн-вс: с 10:00 до 21:00</p>
                    </div>

                    <div className={style.search_block}>
                        <form className={style.form} method="post">
                            <div className={style.search_icon_block}></div>
                            <input
                                className={style.input_search}
                                type="search"
                                name="user"
                                id="us_search"
                                placeholder="Поиск"
                            />
                        </form>

                        <ul className={style.list}>
                            <li>
                                <a href="#">
                                    <img src={eye} alt="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={like} alt="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={res} alt="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={bag} alt="icons" />
                                </a>
                            </li>
                        </ul>

                        <a className={style.link} href="#">
                            Войти
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
