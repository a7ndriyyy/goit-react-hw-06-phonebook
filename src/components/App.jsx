import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from 'App.module.css';

export function App() {
  return (
    <section className={css.content}>
      <div className={css.content__container}>
        <ContactForm />
        <h2 className={css.Contacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}
