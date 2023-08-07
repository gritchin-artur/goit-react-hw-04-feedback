import css from './feedbackNotification.module.css'
import propTypes from 'prop-types';

const Notification = ({ message }) => (
    <h2 className={css.feedback}>{message}</h2>
);

Notification.prototype = {
    message: propTypes.string.isRequired,
}

export default Notification;
