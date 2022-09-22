import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactCard } from '../ContactCard/ContactCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  removeContact,
  selectedFilter,
} from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContactList = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  return (
    <List>
      {filteredContactList().map(({ name, id, number }) => {
        return (
          <ContactCard
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleleButton={() => dispatch(removeContact(id))}
          />
        );
      })}
    </List>
  );
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleButton: PropTypes.func.isRequired,
};
