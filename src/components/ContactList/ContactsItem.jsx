import { useDispatch } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contacts__item}>
      <span className={css.contacts__name}>{name}:</span>
      <span className={css.contacts__number}>{number}</span>
      <button
        type="button"
        onClick={() => dispatch(removeContact({ id }))}
        className={css.contacts__btn}
      >
        Delete
      </button>
    </li>
  );
};
