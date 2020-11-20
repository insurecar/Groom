import React from "react";
import thunk from "redux-thunk";
import Connected from "./Connected";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas";

const App = () => {
  const sagaMiddlWare = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddlWare));
  sagaMiddlWare.run(watchLoadData);

  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
};
export default App;
