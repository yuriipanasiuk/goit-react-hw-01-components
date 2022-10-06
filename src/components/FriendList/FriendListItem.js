import { BsFillCircleFill } from 'react-icons/bs';
import { Name, Status, Avatar } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <>
      <Status>
        <BsFillCircleFill style={{ color: status ? 'green' : 'red' }} />
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};
FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
