import { configureStore } from "@reduxjs/toolkit";
import { buildPCReducer } from "./redux/reducers/buildPCReducer";
import { userReducer } from "./redux/reducers/userReducer";
import { filterReducer } from "./redux/reducers/filterReducer";
import { orderReducer } from "./redux/reducers/orderReducer";

const store = configureStore({
  reducer: {
    buildPC: buildPCReducer,
    user: userReducer,
    filter: filterReducer,
    order:orderReducer
  },
});

export default store;
