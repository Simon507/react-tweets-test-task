import { useDispatch } from 'react-redux';

import {
  fetchAll,
  fetchTotalPages,
  fetchFollow,
  fetchFollowing,
  fetchTotaUnfollowPages,
  fetchTotaFollowPages,
} from '../redux/operations';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.value) {
      case 'all':
        localStorage.setItem('targetPage', '1');
        dispatch(fetchAll(1));
        dispatch(fetchTotalPages());
        localStorage.setItem('filter', 'all');
        break;
      case 'follow':
        localStorage.setItem('targetPage', 1);
        dispatch(fetchFollow(1));
        dispatch(fetchTotaUnfollowPages());
        localStorage.setItem('filter', 'follow');
        break;
      case 'followings':
        localStorage.setItem('targetPage', '1');
        dispatch(fetchFollowing(1));
        dispatch(fetchTotaFollowPages());
        localStorage.setItem('filter', 'following');
        break;
      default:
    }
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl sx={{ minWidth: 400 }}>
        <InputLabel sx={{ color: '#EBD8FF' }} id="selectFollowing">
          Select the type of followers
        </InputLabel>
        <Select
          labelId="selectFollowingLabel"
          id="select"
          defaultValue={'all'}
          label="Select the type of followers"
          onChange={handleChange}
          sx={{ color: '#EBD8FF', fontSize: '20px' }}
        >
          <MenuItem value={'all'}>Show all</MenuItem>
          <MenuItem value={'follow'}>Follow</MenuItem>
          <MenuItem value={'followings'}>Followings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
