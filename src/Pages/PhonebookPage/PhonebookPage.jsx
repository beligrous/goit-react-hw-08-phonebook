import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/operations';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  useState(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default PhonebookPage;
