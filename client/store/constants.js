export const action = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  GET_USERS: 'GET_USERS',
  CREATE_USER: 'CREATE_USER',
  GET_PRODUCTS: 'GET_PRODUCTS',
  CHECK_AUTH: 'CHECK_AUTH',
  GET_ORDERS: 'GET_ORDERS',
  RESET_PASSWORD: 'RESET_PASSWORD',

  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  GET_PRODUCTS_FROM_STORAGE: 'GET_PRODUCTS_FROM_STORAGE',
  DELETE_PRODUCT_FROM_CART: 'DELETE_PRODUCT_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',

  TOGGLE_FLASH_MESSAGE: 'TOGGLE_FLASH_MESSAGE',
  POST_STRIPE: 'POST_STRIPE'
}

export const mutator = {
  SET_AUTH: 'SET_AUTH',
  SET_LOADING: 'SET_LOADING',
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_USER: 'SET_USER',
  SET_USERS: 'SET_USERS',
  SET_PRODUCT_TO_CART: 'SET_PRODUCT_TO_CART',
  SET_PRODUCTS_TO_CART: 'SET_PRODUCTS_TO_CART',
  SET_PRODUCTS_TO_CART_BY_ID: 'SET_PRODUCTS_TO_CART_BY_ID',
  REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  SET_FLASH_MESSAGE: 'SET_FLASH_MESSAGE',
  SET_ORDER: 'SET_ORDER',
  SET_ORDERS: 'SET_ORDERS'
}

export const get = {
  CURRENT_USER: 'CURRENT_USER',
  IS_AUTHENTICATED: 'IS_AUTHENTICATED',
  LOADING: 'LOADING',
  PRODUCTS: 'PRODUCTS',
  CART: 'CART',
  IS_SHOW_FLASH_MESSAGE: 'IS_SHOW_FLASH_MESSAGE',

  ORDER: 'ORDER',
  ORDERS: 'ORDERS'
}
