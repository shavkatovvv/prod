import React from "react";
import { Mainlayout } from "./layout/main-layout";
import { Catalog } from "./components/catalog/catalog";
import { Hero } from "./components/hero/hero";
import { Products } from "./components/products/products";

function App() {
    return (
        <>
            <Mainlayout />
            <Catalog />
            <Hero />
            <Products />
        </>
    );
}

export default App;
