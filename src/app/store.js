import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/appReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
const reducers = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_ENVIRONMENT !== "production",
});
export let persistor = persistStore(store)
