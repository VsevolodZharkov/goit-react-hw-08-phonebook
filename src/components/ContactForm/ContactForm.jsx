import { addContact } from '../../redux/Contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  deleteContact,
  fetchContacts,
} from 'redux/Contacts/contacts-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Style from './ContactsForm.module.css';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  const onSubmit = event => {
    event.preventDefault();
    const user = { name, number };
    const repeatCont = contacts?.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );

    if (repeatCont) {
      toast(`Invalid data entry`);
      return;
    }

    dispatch(addContact(user));
    setName('');
    setNumber('');
  };
	
  return (
    <div className={Style.container}>
		  <h2 className={Style.title}>Contacts</h2>
      <form onSubmit={onSubmit} className={Style.form}>
        
          <TextField
						style={{marginBottom:'10px'}}
					  label="Name"
						id="outlined-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
          <TextField
					  label="Number"
						style={{marginBottom:'10px'}}
						id="outlined-number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        <Button type="submit" variant="contained">Add contact</Button>
      </form>
      <ContactList handlerDelete={handlerDelete} />
    </div>
  );
};
