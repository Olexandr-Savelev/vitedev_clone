import { configureStore } from "@reduxjs/toolkit";

import ThemeReducer from "./slices/themeSlice";
import BreadcrumbReducer from "./slices/breadcrumbSlice";
import SidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    breadcrumbs: BreadcrumbReducer,
    sidebar: SidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
