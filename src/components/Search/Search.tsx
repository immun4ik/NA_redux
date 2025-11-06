import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterActionCreator } from '../../redux/actions/actionCreators';
import './search.css';

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(''); // локальный state (поле поиска)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target; // получаем данные о сработавшем инпуте и его содержимом
    setInputValue(value); // содержимое инпута
    dispatch(setFilterActionCreator(value)); // устанавливаем фильтр
  };

  const handleClear = () => {
    dispatch(setFilterActionCreator('')); // сбрасываем фильтр -> global state (store)
    setInputValue(''); // сбрасываем содержимое инпута -> local state
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Искомая покупка..."
        onChange={handleChange}
        value={inputValue}
      />
      <button type="reset" className="search__button" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Search;
