import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactFilter';
import css from '../Filter/Filter.module.css';


export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
    return (
      <div className={css.filter}>
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Enter name"
        />
      </div>
    );
  }

