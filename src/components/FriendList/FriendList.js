import { List, Item } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

export const FrienList = ({ friends }) => {
  return (
    <Box mb={6} as={'section'}>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <FriendListItem active={isOnline} avatar={avatar} name={name} />
          </Item>
        ))}
      </List>
    </Box>
  );
};

FrienList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
