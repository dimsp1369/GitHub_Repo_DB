import './index.less'
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers/indexReducers";


// прописываем компонет App как основной для рендера, и контейнер в который будет помещена компонента (root)
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)