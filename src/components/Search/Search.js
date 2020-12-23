import React, {useState} from 'react';
import './search.scss';

const Search = ({showAlert, hideAlert, getUsers, clearUsers}) => {
  // для текущего значения используем State
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    // если нажат не Enter - делаем ничего!))
    if (event.key !== 'Enter') {
      return 
    }
    clearUsers(); // чистим результат прошлого запроса

    // если есть запрос
    if (value.trim()) {
      hideAlert();
      showAlert(`Результат поиска по запросу "${value.trim()}".`, 'success');
      getUsers(value.trim());
    } else {
      showAlert('Для поиска нужно вводить непустой запрос!', 'danger');
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник или его часть для поиска"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
};

export default Search;
