import propTypes from "prop-types";

export function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: propTypes.string,
};
