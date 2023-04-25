import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

const linkStyle = {
  color: '#EBD8FF',
  textDecoration: 'none',
  fontSize: 25,
  marginRight: 30,
};

const linkActiveStyle = {
  color: '#EBD8FF',
  textDecoration: 'underline',
  fontSize: 25,
  marginRight: 30,
};

export const Navigation = () => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        padding: '20px',
        background: '#297892',
        marginBottom: '30px',
      }}
    >
      <NavLink style={linkStyle} to="/">
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
        to="/tweets"
      >
        Tweets
      </NavLink>
    </Box>
  );
};
