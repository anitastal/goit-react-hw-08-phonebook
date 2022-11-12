import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(changeFilterAction(event.target.value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};
