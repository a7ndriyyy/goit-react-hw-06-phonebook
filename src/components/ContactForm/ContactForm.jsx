import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";
import { addContact,getContacts } from "../../redux/contactsSlice";
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameId = nanoid();
  const numberId = nanoid();
  
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

     const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    toast.success(`Contact ${name} has been added`);
    return reset;
  };

  const reset = () => {
    setName({ name: "" });
    setNumber({ number: "" });
  };

    return (
      <section className={css.form}>
        <h1 className={css.form__title}>Phonebook</h1>
        <form className={css.form__container} onSubmit={handleFormSubmit}>
          <label className={css.form__label} htmlFor={nameId}>Name</label>
          <input
            id='nameId'
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
          <label className={css.form__label} htmlFor={numberId}>Number</label>
          <input
            id=' numberId'
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
