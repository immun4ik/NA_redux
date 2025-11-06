// пункт 2 -> импортируем все константы экшенов и создаем все генераторы экшенов:
import {
  ADD_PRODUCT,
  CHANGE_INPUT,
  EDIT_PRODUCT,
  FILL_FORM,
  REMOVE_CURRENT_ID,
  REMOVE_PRODUCT,
  RESET_FORM,
  SAVE_CURRENT_ID,
  SET_FILTER,
} from './actionTypes';

export const addProductActionCreator = (name: string, price: string) => {
  return { type: ADD_PRODUCT, payload: { name, price } };
};

export const changeInputActionCreator = (name: string, value: string) => {
  return { type: CHANGE_INPUT, payload: { [name]: value } };
};

export const editProductActionCreator = (id: string, name: string, price: string) => {
  return { type: EDIT_PRODUCT, payload: { id, name, price } };
};

export const fillFormActionCreator = (name: string, price: string) => {
  return { type: FILL_FORM, payload: { name, price } };
};

export const removeCurrentIdActionCreator = () => {
  return { type: REMOVE_CURRENT_ID };
};

export const removeProductActionCreator = (id: string) => {
  return { type: REMOVE_PRODUCT, payload: { id } };
};

export const resetFormActionCreator = () => {
  return { type: RESET_FORM };
};

export const saveCurrentIdActionCreator = (currentId: string) => {
  return { type: SAVE_CURRENT_ID, payload: currentId };
};

export const setFilterActionCreator = (filter: string) => {
  return { type: SET_FILTER, payload: filter };
};
