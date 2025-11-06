// пункт 4 -> создаем свой store, используем configureStore() вместо createStore():
// объединяем все редьюсеры в один, задаем ключи и значения для единственного объекта store

import { combineReducers, createStore } from 'redux';
import currentIdReducer from './reducers/currentIdReducer';
import filterReducer from './reducers/filterReducer';
import formReducer from './reducers/formReducer';
import productsReducer from './reducers/productsReducer';

// Вариант для Redux (устаревший):
const reducers = combineReducers({
  currentId: currentIdReducer, // id редактируемой покупки: currentId = null || "..."
  filter: filterReducer, // строка фильтра: "..."
  form: formReducer, // данные полей формы: { name: "", price: "" }
  products: productsReducer, // массив покупок: [{id: "...", name: "...", price: ...}, {} ]
})

const store = createStore(reducers);

// Вариант для Redux Toolkit:
// const store = configureStore({
//   reducer: {
//     currentId: currentIdReducer, // id редактируемой покупки: currentId = null || "..."
//     filter: filterReducer, // строка фильтра: "..."
//     form: formReducer, // данные полей формы: { name: "", price: "" }
//     products: productsReducer, // массив покупок: [{id: "...", name: "...", price: ...}, {} ]
//   },
// });

export default store;
