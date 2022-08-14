import { useSelector } from 'react-redux';
import Style from './Filter.module.css';
import TextField from '@mui/material/TextField';

export default function Filter({ handlerFilter }) {

  const name = useSelector(state => state.contacts.filter);

  return (
   
      <TextField
			style={{marginBottom:'10px'}}
			label="Find user by name"
			id="outlined-filter"
			className={Style.input}
			type="text" 
			name="name" 
			value={name} 
			onChange={handlerFilter} />
  );
}
