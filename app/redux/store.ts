import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import userReducer from "./slice/userSlice";
import chatReducer from "./slice/chatSlice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// -------- 1. Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

// -------- 2. Noop storage for SSR
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: string) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

// Use real storage in browser, noop storage on server
const storageToUse = typeof window !== "undefined" ? storage : createNoopStorage();

// -------- 3. Persist config
const persistConfig = {
  key: "root",
  storage: storageToUse,
  whitelist: ["user", "chat"],
  version: 1,
};

// -------- 4. Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// -------- 5. Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// -------- 6. Persistor only in browser
export const persistor = typeof window !== "undefined" ? persistStore(store) : null;

// -------- 7. Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
