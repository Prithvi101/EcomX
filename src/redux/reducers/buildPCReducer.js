import { createReducer } from "@reduxjs/toolkit";

export const buildPCReducer = createReducer(
  {
    savedBuild: [],

    showProductTable: {
      PROCESSOR: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      CPU: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      RAM: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      SSD: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      HDD: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      GRAPHIC_CARD: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      POWER_SUPPLY_UNIT: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      CABINET: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      MONITOR: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      KEYBOARD: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      MOUSE: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
      MOUSEPAD: {
        show: false,
        showSingleRow: false,
        data: [],
        singleRow: {},
        subCategory: [],
        brands: [],
      },
    },
    subTotal: 0,
    quantityCounter: 1,
    isFilter: false,
  },
  {
    getCategoryRequest: (state) => {
      state.loading = true;
    },
    getCategorySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    increamentCounterSuccess: (state, action) => {
      const product = action.payload;
      state.subTotal = state.subTotal + product.price;
    },
    decreamentCounterSuccess: (state, action) => {
      const product = action.payload;
      state.subTotal = state.subTotal - product.price;
    },

    getCategoryFailed: (state, action) => {
      state.error = action.payload;
    },

    openProductRowSuccess: (state, action) => {
      const { categoryName, data } = action.payload;
      return {
        ...state,

        showProductTable: {
          ...state.showProductTable,
          [categoryName]: {
            ...state.showProductTable[categoryName],
            show: true,
            data: data,
          },
        },
      };
    },
    closeProductRowSuccess: (state, action) => {
      const { categoryName } = action.payload;
      return {
        ...state,

        showProductTable: {
          ...state.showProductTable,
          [categoryName]: {
            ...state.showProductTable[categoryName],
            show: false,
          },
        },
      };
    },
    closeProductRowFail: (state, action) => {
      const error = action.payload;
      state.error = error;
    },
    openProductRowFailed: (state, action) => {
      state.error = action.payload;
    },
    addToListRequest: (state) => {},
    addToListSuccess: (state, action) => {
      const { product, categoryName, subTotal } = action.payload;

      return {
        ...state,
        subTotal: state.subTotal + subTotal,

        showProductTable: {
          ...state.showProductTable,
          [categoryName]: {
            ...state.showProductTable[categoryName],
            singleRow: product,
            showSingleRow: true,
            show: false,
          },
        },
      };
    },
    changeSelectedRowRequest: (state) => {},
    changeSelectedRowSuccess: (state, action) => {
      const { categoryName, subStract } = action.payload;

      return {
        ...state,
        subTotal: state.subTotal - subStract,
        showProductTable: {
          ...state.showProductTable,
          [categoryName]: {
            ...state.showProductTable[categoryName],
            show: true,
            singleRow: {},
            showSingleRow: false,
          },
        },
      };
    },
    getProductByBrandIdRequest: (state, action) => {
      state.loading = true;
    },
    getProductByBrandIdSuccess: (state, action) => {
      const { data, categoryName } = action.payload;
      console.log(data, categoryName);
      return {
        ...state,
        loading: false,
        showProductTable: {
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
    getProductByBrandIdFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getProductBySubCategory_idRequest: (state, action) => {
      state.loading = true;
    },
    getProductBySubCategory_idSuccess: (state, action) => {
      const { data, categoryName, subCategory_id } = action.payload;

      return {
        ...state,
        loading: false,
        showProductTable: {
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
    getProductBySubCategory_idFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
);
