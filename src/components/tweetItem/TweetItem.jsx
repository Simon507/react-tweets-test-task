import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { followUser, unfollowUser } from '../../redux/operations';

import {
  ItemCard,
  ItemLogo,
  ItemPicture,
  ItemAvatar,
  ItemAvatarBox,
  ItemTxt,
  ItemBtnFollow,
  ItemBtnUnfollow,
  ItemAvatarImg,
} from './TweetItemStyles';
import picture from '../../images/picture2 1.png';
import rectangle from '../../images/Rectangle 1.png';
import avatarBox from '../../images/AvatarBox.png';

export default function TweetItem({
  avatar,
  id,
  tweets,
  followers,
  isFollowed,
}) {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    if (!isFollowed) {
      dispatch(followUser([id, followers]));
    } else {
      dispatch(unfollowUser([id, followers]));
    }
  };
  return (
    <ItemCard>
      <ItemLogo />
      <ItemPicture>
        <img src={picture} alt="bgImage" />
      </ItemPicture>
      <ItemAvatar>
        <img src={rectangle} alt="avatrRectangle" />
        <ItemAvatarBox>
          <img src={avatarBox} alt="avatarBox" />
          <ItemAvatarImg>
            <img src={avatar} alt="avatar" width={67} height={67} />
          </ItemAvatarImg>
        </ItemAvatarBox>
      </ItemAvatar>
      <ItemTxt>{Intl.NumberFormat('en-US').format(tweets)} tweets</ItemTxt>
      <ItemTxt>
        {Intl.NumberFormat('en-US').format(followers)} followers
      </ItemTxt>
      {isFollowed ? (
        <ItemBtnUnfollow onClick={id => onHandleClick()}>
          following
        </ItemBtnUnfollow>
      ) : (
        <ItemBtnFollow onClick={id => onHandleClick()}>follow</ItemBtnFollow>
      )}
    </ItemCard>
  );
}

TweetItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isFollowed: PropTypes.bool.isRequired,
};
