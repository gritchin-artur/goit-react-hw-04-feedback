import css from './feedbackStatistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
   <ul className={css.listFeedback}>
      <li className={css.good}>Good: {good}</li>
      <li className={css.neutral}>Neutral: {neutral}</li>
      <li className={css.bad}>Bad: {bad}</li>
      <li className={css.total}>Total: {total}</li>
      <li className={css.positive}>Positive feedback: {positiveFeedback}%</li>
   </ul>
);

Statistics.propTypes = {
   good: propTypes.number.isRequired,
   neutral: propTypes.number.isRequired,
   bad: propTypes.number.isRequired,
   total: propTypes.number.isRequired,
   positiveFeedback: propTypes.number.isRequired,
};

export default Statistics; 