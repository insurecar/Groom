import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import flightsReducer from './flights/redux/flights.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    flightsList: flightsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;