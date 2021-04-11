import { createStore, applyMiddleware } from "redux";
// redux-persist is used for persiting data on localstorage , or session storage
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// add functionality based off env /development/ test/ production
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
