import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(changeFilterAction(event.target.value));
  };

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};
