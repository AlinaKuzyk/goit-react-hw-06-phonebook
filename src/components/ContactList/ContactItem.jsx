import { useDispatch } from 'react-redux';
import { Button } from '../Form/FormStyled.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;
