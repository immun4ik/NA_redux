import { useSelector } from 'react-redux';
import { IStore } from '../../models/models';
import Item from '../Item/Item';
import './list.css';

const List = () => {
  const products = useSelector((state: IStore) => state.products); // массив всех покупок
  const filter = useSelector((state: IStore) => state.filter); // фильтр

  const filteredList = filter
    ? products.filter((product) => product.name.toLowerCase().includes(`${filter}`.toLowerCase()))
    : products;

  const items = filteredList.map((product) => (
    <Item key={product.id} product={product} />
  ));

  return (
    <ul className="list">
      {items.length ? (
        items
      ) : (
        <li className="not-found">Здесь пока ничего нет...</li>
      )}
    </ul>
  );
};

export default List;
