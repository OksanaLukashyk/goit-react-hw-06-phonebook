import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

// Для фільтра було б добре створити окремий slice (не обов'язково, але так структура буде ще чистіша)

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterStore.filter);

  const filterChange = evt => {
    const addSetFilterAction = {
      type: 'filter/setFilter',
      payload: evt.target.value,
    };

    dispatch(addSetFilterAction);
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
};
