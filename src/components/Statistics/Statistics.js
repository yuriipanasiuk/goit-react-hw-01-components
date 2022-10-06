import PropTypes from 'prop-types';
import { Title, List, Item, Label, PercentTage } from './Statistics.styled';
import { Box } from 'components/Box/Box';
import { getRandomHexColor } from './colorSwitcher';

export const Statistics = ({ stats, title }) => {
  const bgColor = getRandomHexColor();
  return (
    <Box
      width="300px"
      ml="auto"
      mr="auto"
      mb={6}
      pt={4}
      bg="white"
      borderRadius="normal"
      boxShadow="shadow"
      as="section"
    >
      {title && <Title>{title}</Title>}
      <List style={{ backgroundColor: bgColor }}>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <PercentTage>{percentage}%</PercentTage>
          </Item>
        ))}
      </List>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
