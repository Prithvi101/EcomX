import { CiNoWaitingSign } from "react-icons/ci";

export const openProductRowHandler = (categoryName) => async (dispatch) => {
  try {
    console.log(categoryName, "open product row handler");
    dispatch({ type: "openProductRowRequest" });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER}/get-products-by-category/${categoryName}`
    );
    const data = await res.json();

    if (data.success) {
      dispatch({
        type: "openProductRowSuccess",
        payload: { data: data.data, categoryName },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: "openProductRowFailed",
      payload: "Something went wrong",
    });
  }
};
export const closeProductRowHandler = (categoryName) => async (dispatch) => {
  try {
    dispatch({
      type: "closeProductRowSuccess",
      payload: { categoryName },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "closeProductRowFail",
      payload: "Something went wrong",
    });
  }
};
export const addToListHandler = (product, categoryName) => async (dispatch) => {
  console.log(product);
  dispatch({
    type: "addToListRequest",
  });
  dispatch({
    type: "addToListSuccess",
    payload: {
      product,
      categoryName,
      subTotal: product.price * product.quantity,
    },
  });

  const selectedCurData = JSON.parse(localStorage.getItem("buildPC"));
  selectedCurData.push({
    title: product.title,
    price: product.price * product.quantity,
    quantity: product.quantity,
    category: categoryName,
  });
  localStorage.setItem("buildPC", JSON.stringify(selectedCurData));
};

export const changeSelectedRowHandler =
  (product, categoryName) => async (dispatch) => {
    //removing selected product and removing the subtotal items

    dispatch({
      type: "changeSelectedRowRequest",
    });
    dispatch({
      type: "changeSelectedRowSuccess",
      payload: {
        product,
        categoryName,
        subStract: product.price * product.quantity,
      },
    });
    let selectedCurData = JSON.parse(localStorage.getItem("buildPC"));
    selectedCurData = selectedCurData.filter((item, index) => {
      return item.category !== categoryName;
    });
    console.log(product, "this is product ");
    localStorage.setItem("buildPC", JSON.stringify(selectedCurData));
  };

export const quantityIncreamentHandler = (product) => async (dispatch) => {
  console.log(product, "this is quantity increase handler");
  dispatch({ type: "increamentCounterSuccess", payload: product });
};

export const quantityDecreamenttHandler = (product) => async (dispatch) => {
  dispatch({ type: "decreamentCounterSuccess", payload: product });
};

export const getProductByBrand_idHandler =
  (categoryName, brand_id) => async (dispatch) => {
    try {
      console.log(categoryName, brand_id);
      dispatch({ type: "getProductByBrandIdRequest" });
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/filter/get-products-by-brand_id-and-category`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName, brand_id }),
        }
      );
      const { data } = await res.json();
      if (data) {
        dispatch({
          type: "getProductByBrandIdSuccess",
          payload: { data, categoryName },
        });
      } else {
        dispatch({
          type: "getProductByBrandIdFailed",
          payload: "No data fround",
        });
      }
    } catch (error) {
      console.log(error.message);

      dispatch({
        type: "getProductByBrandIdFailed",
        payload: "Something went wrong",
      });
    }
  };

export const getProductBySubCategory_idHandler =
  (categoryName, subcategory_id) => async (dispatch) => {
    dispatch({
      type: "getProductBySubCategory_idRequest",
    });

    const url = `${process.env.REACT_APP_SERVER}/filter/get-products-by-subcategory_id-and-category`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName, subcategory_id }),
      });

      const { data } = await res.json();
      if (data) {
        dispatch({
          type: "getProductBySubCategory_idSuccess",
          payload: { categoryName, data },
        });
      } else {
        dispatch({
          type: "getProductBySubCategory_idFailed",
          payload: "No data found",
        });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: "getProductBySubCategory_idFailed",
        payload: "Something went wrong",
      });
    }
  };

export const getFilterProductByBrand_idHandler =
  (categoryName, brand_id) => async (dispatch) => {
    try {
      console.log(categoryName, brand_id);
      dispatch({ type: "getFilterProductRequest" });
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/filter/get-products-by-brand_id-and-category`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName, brand_id }),
        }
      );
      const { data } = await res.json();
      if (data) {
        dispatch({
          type: "getFilterProductSuccess",
          payload: { data, categoryName },
        });
      } else {
        dispatch({
          type: "getFilterProductFailed",
          payload: "No data fround",
        });
      }
    } catch (error) {
      console.log(error.message);

      dispatch({
        type: "getProductByBrandIdFailed",
        payload: "Something went wrong",
      });
    }
  };
