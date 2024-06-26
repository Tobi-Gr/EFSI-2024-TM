import React from 'react';

const Button = ({ texto, onClick }) => {
  return (
    <div>
      <button type="button" className="full-width button-primary btn" onClick={onClick}>
        {texto}
      </button>
    </div>
  );
};

export default Button;
