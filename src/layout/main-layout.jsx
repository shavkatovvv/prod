import React from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";
import { Catalog } from "../components/catalog/catalog";
import { Hero } from "../components/hero/hero";
import { Products } from "../components/products/products";

export const Mainlayout = () => {
    return (
        <div>
            <Header />
            <Catalog />

            <Outlet />
        </div>
    );
};
