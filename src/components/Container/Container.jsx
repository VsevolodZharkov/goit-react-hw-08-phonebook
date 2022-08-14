import PropTypes from 'prop-types';

export const Container = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
