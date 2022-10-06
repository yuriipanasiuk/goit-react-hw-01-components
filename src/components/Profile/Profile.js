import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.js';
import {
  Description,
  Avatar,
  Name,
  SocName,
  Location,
  StatsList,
  Item,
  Label,
  Quantity,
} from './Profile.styled.js';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      mb={6}
      ml="auto"
      mr="auto"
      width="300px"
      boxShadow="shadow"
      as={'section'}
    >
      <Description>
        <Avatar src={avatar} alt={username} width={100} />
        <Name>{username}</Name>
        <SocName>@{tag}</SocName>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
