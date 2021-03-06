import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const middleware = [thunk];
// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

const exportStore = { store, persistor };

export default exportStore;

