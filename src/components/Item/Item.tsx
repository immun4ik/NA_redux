import { useDispatch, useSelector } from 'react-redux';
import {
  fillFormActionCreator,
  saveCurrentIdActionCreator,
  removeProductActionCreator,
  resetFormActionCreator,
  removeCurrentIdActionCreator,
} from '../../redux/actions/actionCreators';
import { IProduct, IStore } from '../../models/models';
import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg';
import './item.css';

const Item = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch(); // используем хук на верхнем уровне
  const currentId = useSelector((state: IStore) => state.currentId); // id редактируемой покупки

  const { id, name, price } = product; // деструктуризация данных объекта конкретной покупки

  const handleEdit = () => {
    dispatch(saveCurrentIdActionCreator(id)); // меняем текущий id (store.currentId)
    dispatch(fillFormActionCreator(name, price.toString())); // заполняем форму (store.form):
  };

  const handleDelete = () => {
    dispatch(removeProductActionCreator(id)); // удаление покупки из массива (store.products)

    // если удаляем редактируемую покупку:
    if (id === currentId) {
      dispatch(resetFormActionCreator()); // сбрасываем все поля формы
      dispatch(removeCurrentIdActionCreator()); // сбрасываем текущий id до null
    }
  };

  return (
    <li className="item">
      <div className="item__product">{name}</div>
      <div className="item__price">{price}</div>
      <div className="item__btns">
        <img src={edit} alt="edit" className="item__edit-btn" onClick={handleEdit} />
        <img src={remove} alt="remove" className="item__delete-btn" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default Item;
