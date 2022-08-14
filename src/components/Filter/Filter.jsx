import { useSelector, useDispatch } from 'react-redux';
import Style from './Filter.module.css';

export default function Filter({ handlerFilter }) {
	// const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  return (
    <label>
      Find user by name
      <input 
			className={Style.input}
			type="text" 
			name="name" 
			value={name} 
			onChange={handlerFilter} />
    </label>
  );
}
