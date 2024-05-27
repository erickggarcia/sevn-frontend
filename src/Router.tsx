import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./defaultLayout/defaultLayout";
import { Home } from "./pages/Home";
import { SelectedArticle } from "./pages/SelectedArticle";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/article/:id" element={<SelectedArticle />} />
            </Route>
        </Routes>
    )
}