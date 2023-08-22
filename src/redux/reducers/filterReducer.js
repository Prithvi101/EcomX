import { createReducer } from "@reduxjs/toolkit";

export const filterReducer = createReducer(
  {
    isFilter: false,
    subCategories: [],
    brands: [],
    selectedBrand: null,
    selectedCategory: null,
    filterProducts: {},
  },
  {
    getSubCategorySuccess: (state, action) => {
      const { subCategory } = action.payload;
      return {
        ...state,

        subCategories: [...subCategory],
      };
    },
    getSubCategoryFailed: (state, action) => {
      state.error = action.payload;
    },

    getBrandSuccess: (state, action) => {
      const { brands } = action.payload;
      return {
        ...state,

        brands: [...brands],
      };
    },
    getBrandFailed: (state, action) => {
      state.error = action.payload;
    },
    changeBrandHanlerSuccess: (state, action) => {
      state.selectedBrand = action.payload;
    },

    changeSubCategoryHandler: (state, action) => {
      state.selectedCategory = action.payload;
    },

    getFilterProductRequest: (state, action) => {
      state.loading = true;
    },
    getFilterProductSuccess: (state, action) => {
      const { categoryName, data } = action.payload;
      return {
        ...state,
        isFilter: true,
        loading: false,
        filterProducts: {
          ...state.showProductTable,
          [categoryName]: {
            ...state.showProductTable[categoryName],

            data: data,
            brands: [],
            subCategory: [],
          },
        },
      };
    },
    getFilterProductFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
