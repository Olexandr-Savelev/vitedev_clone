import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: false,
  reducers: {
    toggleBreadcrumbs: (state) => !state,
  },
});

export const { toggleBreadcrumbs } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
