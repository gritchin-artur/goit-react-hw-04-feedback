import css from "./feedbackButtons.module.css";
import propTypes from "prop-types";
import { nanoid } from "nanoid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.listButtons}>
    {options.map((option) => (
      <button
        key={nanoid()}
        className={css.buttons}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
