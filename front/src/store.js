import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllFoodsReducer } from './reducers/foodReducer';



// Combine your reducers into a rootReducer
const rootReducer = {
    getAllFoodsReducer: getAllFoodsReducer,
};



const initialState = {}



const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];

const store = configureStore({
    initialState,middleware,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: composeEnhancers
});

export default store;