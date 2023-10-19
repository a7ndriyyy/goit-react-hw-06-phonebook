import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';

export function ContactForm({ addContact }) {
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = (event) => {
      event.preventDefault();
    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

    return (
      <section className={css.form}>
        <h1 className={css.form__title}>Phonebook</h1>
        <form className={css.form__container} onSubmit={handleFormSubmit}>
          <label className={css.form__label}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className={css.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
             onChange={handleChange}
          />
          <label className={css.form__label}>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            className={css.form__input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
             onChange={handleChange}
          />
          <button className={css.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
