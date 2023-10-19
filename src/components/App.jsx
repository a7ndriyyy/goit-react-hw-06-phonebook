// import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from 'App.module.css';


export function App() {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  // const addFilter = event => {
  //   setFilter(event.currentTarget.value );
  // };

  // const filteredContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  // const deleteContact = id => {
  //   const filtered = contacts.filter(contact => contact.id !== id);
  //   setContacts(filtered)
  // };

  return (
    <section className={css.content}>
      <div className={css.content__container}>
        <ContactForm onSubmit={formSubmitHandler} />
        <ContactList/>
          <Filter />
    
      </div>
    </section>
  );
};
