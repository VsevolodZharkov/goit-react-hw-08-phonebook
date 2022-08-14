import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import { filterContacts } from 'redux/Contacts/contacts-actions';
import Button from '@mui/material/Button';
import Style from './ContactList.module.css'
export default function ContactList({ handlerDelete }) {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handlerFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Filter handlerFilter={handlerFilter} />
      <ul className={Style.list}>
        {filteredContacts()?.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <Button type="button" onClick={() => handlerDelete(id)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
