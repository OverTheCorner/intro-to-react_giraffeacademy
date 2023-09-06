import React, { useState } from "react";
import "./CountButton.css";

const CountButton = (Props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + Props.incrementBy);
  };

  return (
    <div>
      <button id='MainButton' onClick={handleClick}>
        +{Props.incrementBy}
      </button>
      <div className='count-display'>{currentCount}</div>
    </div>
  );
};

CountButton.defaultProps = {
  incrementBy: 1,
};

export default CountButton;
