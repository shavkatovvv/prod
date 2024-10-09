import React from "react";
import { Mainlayout } from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import { Prod } from "./home/prod";
import { Rome } from "./rome/home";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<Rome />} />
                    <Route path="catalog/:id" element={<Prod />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
