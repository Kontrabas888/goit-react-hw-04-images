import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const LoadMoreButton = ({ onClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div style={{ height: '50px' }}>
      {showButton && (
        <Button onClick={handleClick}>Load More</Button>
      )}
    </div>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
