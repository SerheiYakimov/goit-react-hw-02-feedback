// import styles from './FeedbackOptions.module.css';
import propTypes from "prop-types";

export function FeedbackOptions({ options, onLeaveFedback }) {
  return (
    <div className="feedback">
      {options.map((el) => (
        <button key={el} name={el} onClick={onLeaveFedback}>
          {el}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFedback: propTypes.func,
};
