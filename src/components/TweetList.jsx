import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Paper } from '@mui/material';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

import {
  fetchAll,
  fetchFollow,
  fetchFollowing,
  fetchTotalPages,
} from '../redux/operations';
import {
  selectUsers,
  selectError,
  selectIsLoading,
  selectTotalPages,
} from '../redux/selectors';

import BasicSelect from './dropBox';
import TweetItem from './tweetItem/TweetItem';
import Loader from './loader/Loader';

localStorage.setItem('targetPage', 1);

const defaultCase = () => {
  localStorage.setItem(
    'targetPage',
    Number(localStorage.getItem('targetPage')) + 1
  );
};

export default function TweetList() {
  const dispatch = useDispatch();

  const loadMore = () => {
    const filterType = localStorage.getItem('filter');

    switch (filterType) {
      case 'all':
        defaultCase();
        dispatch(fetchAll(Number(localStorage.getItem('targetPage'))));
        break;

      case 'follow':
        defaultCase();
        dispatch(fetchFollow(Number(localStorage.getItem('targetPage'))));
        break;

      case 'following':
        defaultCase();
        dispatch(fetchFollowing(Number(localStorage.getItem('targetPage'))));
        break;
      default:
        break;
    }
  };

  const userList = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    localStorage.setItem('filter', 'all');
    dispatch(fetchTotalPages());
    dispatch(fetchAll(1));
  }, [dispatch]);

  let targetPage = localStorage.getItem('targetPage');

  return (
    <Paper
      sx={{
        position: 'relative',
        background: '#1C87A9',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      <BasicSelect sx={{ margin: 200 }}></BasicSelect>
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '100px',
          marginTop: '30px',
        }}
      >
        {userList.length > 0 ? (
          userList.map(item => (
            <TweetItem
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              tweets={item.tweets}
              followers={item.followers}
              isFollowed={item.isFollowed}
            />
          ))
        ) : (
          <p>Unfortunately, there are no records in the database</p>
        )}
      </List>
      {totalPages > Number(targetPage) && (
        <Button
          sx={{ alignSelf: 'center', marginTop: '30px' }}
          variant="contained"
          endIcon={<DownloadOutlinedIcon />}
          type="button"
          onClick={() => loadMore()}
        >
          {`Page ${targetPage} of ${totalPages}`}
        </Button>
      )}
      <Link
        underline="hover"
        sx={{
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          border: '1px solid #EBD8FF',
          padding: '3px',
          borderRadius: '6px',
        }}
        color="#EBD8FF"
        href="/react-tweets-test-task"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        HOME
      </Link>
    </Paper>
  );
}
