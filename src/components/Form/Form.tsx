import { useDispatch, useSelector } from 'react-redux';
import {
  addProductActionCreator,
  changeInputActionCreator,
  editProductActionCreator,
  removeCurrentIdActionCreator,
  resetFormActionCreator,
} from '../../redux/actions/actionCreators';
import { IStore } from '../../models/models';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const currentId = useSelector((state: IStore) => state.currentId);

  // получаем из store данные полей формы по ключу form:
  const { name, price } = useSelector((state: IStore) => state.form);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeInputActionCreator(name, value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // валидация формы (проверка преобразования цены в число - чтобы не было NaN):
    if (isNaN(Number(price))) {
      dispatch(changeInputActionCreator('price', ''));
      return;
    }

    if (currentId) {
      // если это редактируемая покупка:
      dispatch(editProductActionCreator(currentId, name, price));
      dispatch(removeCurrentIdActionCreator());
    } else {
      // если это новая покупка:
      dispatch(addProductActionCreator(name, price));
    }

    dispatch(resetFormActionCreator());
  };

  const handleReset = () => {
    dispatch(resetFormActionCreator());

    if (currentId) {
      dispatch(removeCurrentIdActionCreator());
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor="name" className="visually-hidden">Покупка</label>
      <input
        id="name"
        className="form__input form__input_product"
        name="name"
        placeholder="Введите покупку..."
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="price" className="visually-hidden">Стоимость</label>
      <input
        id="price"
        name="price"
        className="form__input form__input_price"
        placeholder="Укажите цену..."
        required
        value={price}
        onChange={handleChange}
      />

      <button className="form__button form__button_submit" type="submit">Save</button>
      <button className="form__button form__button_cancel" type="reset">Cancel</button>
    </form>
  );
};

export default Form;
