import { ContactForm, ContactList, Filter } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilterState } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterState);

  const dispatch = useDispatch();

  const checkedDupliteName = value => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
  };

  const handleFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const visibleFilter = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm checkedDuplicate={checkedDupliteName} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList contacts={visibleFilter} />
    </div>
  );
};

export default App;
