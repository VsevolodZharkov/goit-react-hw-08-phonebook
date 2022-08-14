import Style from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Box, Button } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn(values));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={Style.form_wrapper}>
      <h2 className={Style.label}>Log in</h2>
      <Box
        className={Style.form_box}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<AccountBoxOutlinedIcon />}
        >
          Log in
        </Button>
      </Box>
    </div>
  );
};
