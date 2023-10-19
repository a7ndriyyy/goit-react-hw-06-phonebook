
import css from '../Filter/Filter.module.css';


export const Filter = (props) => {
    const { filter, addFilter } = props;
    return (
      <div className={css.filter}>
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          value={filter}
          onChange={addFilter}
          placeholder="Enter name"
        />
      </div>
    );
  }

