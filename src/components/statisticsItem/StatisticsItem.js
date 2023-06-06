import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';

const StatisticsItem = ({ id, label, percentage }) => {
  //   console.log(props);
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
