import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateRandomHexColor } from 'utils/generateRandomHexColor';

export const SectionUl = styled.ul`
  display: flex;
  padding: 20px;
  width: 20%;
  height: 50%;
  margin: 0 auto;
`;

export const SectionLi = styled.li`
  background-color: ${generateRandomHexColor};
  width: 50%;
  height: 70px;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        <SectionUl className="stat-list">
          {title && <h2 className="title">Upload stats</h2>}
          {stats.map(({ id, label, percentage }) => (
            <SectionLi className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </SectionLi>
          ))}
        </SectionUl>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
