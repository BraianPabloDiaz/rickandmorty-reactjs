import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import NotFound from "./pages/notFound/NotFound";

export default function App() {
    return (<BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/"
                    component={Home}/>
                <Route exact path="/character"
                    component={List}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>);
}
