import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    user: {
      first_name: "",
      last_name: "",
      address: "",
      contact_number: "",
    },
    isAuthenticated: false,
    notification: {
      success: false,
      message: "",
    },
    loading: false,
  },
  {
    checkLoginRequest: (state) => {
      state.loading = true;
    },
    checkLoginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    checkLoginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    registerUserRequest: (state, action) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      const { notificationMessage, notificationType } = action.payload;
      state.notification.message = notificationMessage;
      state.notification.type = notificationType;
    },
    registerUserFailed: (state, action) => {
      state.loading = false;
      const { notificationMessage, notificationType } = action.payload;
      state.notification.message = notificationMessage;
      state.notification.type = notificationType;
    },
    LoginUserRequest: (state, action) => {
      state.loading = true;
    },
    LoginUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      const { notificationMessage, notificationType } = action.payload;
      state.notification.message = notificationMessage;
      state.notification.type = notificationType;
    },
    loginUserFailed: (state, action) => {
      state.loading = false;
      const { notificationMessage, notificationType } = action.payload;
      state.notification.message = notificationMessage;
      state.notification.type = notificationType;
    },

    addToFavoriteRequest: (state, action) => {
      state.loading = true;
    },
    addToFavoriteSuccess: (state, action) => {
      state.loading = false;
      const notification = action.payload;
      state.notification = notification;
    },
    addToFavoriteFailed: (state, action) => {
      state.loading = false;
      const notification = action.payload;
      state.notification = notification;
    },
    clearNotification: (state, action) => {
      state.notification.message = "";
    },
  }
);
