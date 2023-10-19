import css from '../ContactList/ContactList.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
    const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();

  const dispatch = useDispatch();
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {/* {children} */}
      <ul className={css.contacts__list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contacts__item} key={id}>
            <p className={css.contacts__name}>{name}</p>
            <p className={css.contacts__number}> {number}</p>
            <button
              onClick={() => dispatch(removeContact({ id }))}
              className={css.contacts__btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

