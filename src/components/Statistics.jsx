import PropTypes from 'prop-types';
import styled from 'styled-components';


const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

  export const SectionUl = styled.ul`
  display:flex; 
  padding: 20px;
  width: 20%;
  margin: 0 auto;
  & {
      list-style: none;
  }
  `


export const Statistics = ({title, stats}) => {
    return (<>
    <section className="statistics">
 {title && <h2 className="title">Upload stats</h2>}
  <SectionUl className="stat-list">
 {stats.map(({id, label, percentage}) => (
<li className="item" key={id} style= {{backgroundColor: generateRandomHexColor()}}>
<span className="label">{label}</span>
<span className="percentage">{percentage}</span>
</li>
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