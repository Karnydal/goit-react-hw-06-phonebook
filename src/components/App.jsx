// import React, { useState, useRef, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SectionRender } from './Section/Section';
import { useSelector } from 'react-redux';
import { selectedContacts } from 'redux/contactSlice';

export const App = () => {
  const contacts = useSelector(selectedContacts);

  return (
    <SectionRender>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter /> */}

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
          </>
      ) : (
        <p>Contact list is empty</p>
      )}
    </SectionRender>
  );

  // const isFirstLoad = useRef(true);
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (isFirstLoad.current) {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }
  //     isFirstLoad.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const id = nanoid();
  //   const contactItem = {
  //     id,
  //     name,
  //     number,
  //   };

  //   contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(state => [...state, contactItem]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const filteredContactList = () => {
  //   const normilizedValue = filter.toLowerCase().trim();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normilizedValue)
  //   );
  // };

  // const deleteContact = e => {
  //   const contactId = e.currentTarget.id;
  //   setContacts(state => state.filter(contact => contact.id !== contactId));
  // };

  // return (
  //   <SectionRender>
  //     <h1>Phonebook</h1>
  //     <ContactForm onSubmit={addContact}></ContactForm>
  //     <h2>Contacts</h2>
  //     <Filter value={filter} onChange={changeFilter} />

  //     {contacts.length > 0 ? (
  //       <ContactList
  //         contacts={filteredContactList()}
  //         onDeleleButton={deleteContact}
  //       />
  //     ) : (
  //       <p>Contact list is empty</p>
  //     )}
  //   </SectionRender>
  // );
};
