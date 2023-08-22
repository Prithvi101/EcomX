import { toast } from "react-toastify";

export const checkUseLogin = () => async (dispatch) => {
  try {
    dispatch({ type: "checkLoginRequest" });
    console.log("in check login function");
    const res = await fetch(`${process.env.REACT_APP_SERVER}/check-login`, {
      credentials: "include",
    });
    const data = await res.json();
    if (data.success) {
      dispatch({ type: "checkLoginSuccess", payload: data.data });
    } else {
      dispatch({ type: "checkLoginFailed", payload: data.message });
    }
  } catch (error) {
    dispatch({ type: "checkLoginFailed", payload: error.message });
  }
};

export const registerUser = (regForm, regCPassword) => async (dispatch) => {
  dispatch({ type: "registerUserRequest" });

  console.log(regForm.contact_number);
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number format, adjust as needed
  console.log(
    emailPattern.test(regForm.email) &&
      phonePattern.test(regForm.contact_number)
  );
  if (
    emailPattern.test(regForm.email) &&
    phonePattern.test(regForm.contact_number)
  ) {
    if (regCPassword === regForm.password) {
      fetch(`${process.env.REACT_APP_SERVER}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regForm),
        credentials: "include",
      })
        .then((response) => {
          // Handle the response
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            dispatch({
              type: "registerUserSuccess",
              payload: {
                notificationMessage: data.message,
                notificationType: true,
              },
            });
          } else {
            dispatch({
              type: "registerUserFailed",
              payload: {
                notificationMessage: data.message,
                notificationType: false,
              },
            });
          }
        })
        .catch((error) => {
          // Handle the error

          dispatch({
            type: "registerUserFailed",
            payload: {
              notificationMessage: "Something went wrong",
              notificationType: false,
            },
          });
        });
    } else {
      dispatch({
        type: "registerUserFailed",
        payload: {
          notificationMessage: "Password is not matched",
          notificationType: false,
        },
      });
    }
  } else {
    dispatch({
      type: "registerUserFailed",
      payload: {
        notificationMessage: "Should be valid email and mobile",
        notificationType: false,
      },
    });
  }
};

export const loginUser = (input, password) => async (dispatch) => {
  dispatch({ type: "LoginUserRequest" });
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number format, adjust as needed

  if (emailPattern.test(input)) {
    console.log("bro this is email");
    fetch(`${process.env.REACT_APP_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input, password }),
      credentials: "include",
    })
      .then((response) => {
        // Handle the response
        return response.json();
      })
      .then((data) => {
        // setLoading(false)
        if (data.success) {
          dispatch({
            type: "LoginUserSuccess",
            payload: {
              notificationMessage: data.message,
              notificationType: true,
            },
          });
        } else {
          dispatch({
            type: "loginUserFailed",
            payload: {
              notificationMessage: data.message,
              notificationType: false,
            },
          });
        }

        //if the user is coming from the cart page then it should redirect again to the product page
      })
      .catch((error) => {
        // setLoading(false)
        // Handle the error
        console.log(error);

        dispatch({
          type: "loginUserFailed",
          payload: {
            notificationMessage: "Something went wrong",
            notificationType: false,
          },
        });
      });
  } else if (phonePattern.test(input)) {
    console.log("bro this is contacct number");
    fetch(`${process.env.REACT_APP_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact_number: input, password }),
      credentials: "include", // Add this line
    })
      .then((response) => {
        // Handle the response
        return response.json();
      })
      .then((data) => {
        // setLoading(false)
        if (data.success) {
          dispatch({
            type: "LoginUserSuccess",
            payload: {
              notificationMessage: data.message,
              notificationType: true,
            },
          });
        } else {
          dispatch({
            type: "loginUserFailed",
            payload: {
              notificationMessage: data.message,
              notificationType: false,
            },
          });
          // setNotification({ success: false, message: data.message })
          //show something went wrong
        }
      })
      .catch((error) => {
        // setLoading(false)
        // Handle the error
        dispatch({
          type: "loginUserFailed",
          payload: {
            notificationMessage: "Something went wrong",
            notificationType: false,
          },
        });
        console.log(error);
      });
  } else {
    dispatch({
      type: "loginUserFailed",
      payload: {
        notificationMessage: "Please give valid email or phone",
        notificationType: false,
      },
    });

    // setNotification({ success: false, message: "Please give valid email or phone" })
  }
};

export const addProductToFavoriteHandler =
  (title, product_id, price) => async (dispatch) => {
    //making post request for adding data to the
    dispatch({
      type: "addToFavoriteRequest",
    });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/add-to-favorite/${product_id}`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title,
            price,
          }),
          credentials: "include",
        }
      );

      const result = await response.json();
      if (result.success) {
        dispatch({
          type: "addToFavoriteSuccess",
          payload: {
            notificationMessage: result.message,
            notificationType: true,
          },
        });
        toast.success("Product added to favorites");
        //show success message here
      } else {
        //show error message here

        dispatch({
          type: "addToFavoriteFailed",
          payload: {
            notificationMessage: result.message,
            notificationType: false,
          },
        });

        toast.error(result.message);
      }
    } catch (error) {
      // toast.error(error.message);
      //show error message

      dispatch({
        type: "addToFavoriteFailed",
        payload: {
          notificationMessage: "Something went wrong",
          notificationType: false,
        },
      });

      toast.error("Something went wrong");
    }
  };
