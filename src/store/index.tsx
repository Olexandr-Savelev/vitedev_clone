import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/themeSlice";
import BreadcrumbReducer from "./slices/breadcrumbSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    breadcrumbs: BreadcrumbReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
