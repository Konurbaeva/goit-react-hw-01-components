import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateRandomHexColor } from 'utils/generateRandomHexColor';

  export const SectionUl = styled.ul`
  display:flex; 
  padding: 20px;
  width: 20%;
  margin: 0 auto;
  & {
      list-style: none;
  }
  `

 export const SectionLi = styled.li`
  background-color:${generateRandomHexColor}
  `

export const Statistics = ({ title, stats }) => {
    return (<>
    <section className="statistics">
 {title && <h2 className="title">Upload stats</h2>}
  <SectionUl className="stat-list">
 {stats.map(({id, label, percentage}) => (
<SectionLi className="item" key={id}>
<span className="label">{label}</span>
<span className="percentage">{percentage}</span>
</SectionLi>
 ))}
  </SectionUl>
</section>
    </>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}