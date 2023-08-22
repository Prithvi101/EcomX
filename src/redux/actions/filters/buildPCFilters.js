import { CiNoWaitingSign } from "react-icons/ci";
import { openProductRowHandler } from "../buildpc";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "getCategoryRequest" });
    console.log("function is called ");
    dispatch({ type: "getCategorySuccess", payload: 10 });
  } catch (error) {
    dispatch({
      type: "getCategoryFailed",
      payload: error.response.data.message,
    });
  }
};

export const getSubCategories =
  (category_id, categoryName) => async (dispatch) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/get-subcategory-by-category/${category_id}`
      );
      const data = await res.json();
      if (data.success) {
        console.log(data);

        dispatch({
          type: "getSubCategorySuccess",
          payload: { subCategory: data.data },
        });
      }
    } catch (error) {
      dispatch({
        type: "getSubCategoryFailed",
        payload: error.response.data.message,
      });
    }
  };

export const getBrandsByCategoryHandler =
  (categoryName) => async (dispatch) => {
    console.log("get brands by categry handler");
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/get-all-brands`);
      const data = await res.json();
      console.log(data);
      if (data.success) {
        dispatch({
          type: "getBrandSuccess",
          payload: { brands: data.data, categoryName },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "getBrandsFailed",
        payload: error.response.data.message,
      });
    }
  };

//triggering the state when we change the brands

export const brandOnChangeHandler = (brandIndex) => async (dispatch) => {
  console.log("change brand handler");
  if (brandIndex === -1) {
    openProductRowHandler();
  } else {
    dispatch({
      type: "changeBrandHanlerSuccess",
      payload: brandIndex,
    });
  }
};

export const subCategoryOnChangeHandler =
  (subCategoryIndex) => async (dispatch) => {
    console.log("change subcategory handler");

    dispatch({
      type: "changeSubCategoryHandler",
      payload: subCategoryIndex,
    });
  };
