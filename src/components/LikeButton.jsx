import './LikeButton.css';
import { useState } from 'react';

const availableColours = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

const LikeButton = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const colour = availableColours[count % availableColours.length];
  return (
    <button onClick={handleClick} style={{ backgroundColor: colour }}>
      {count} Like{count === 1 ? 's' : ''}
    </button>
  );
};

export default LikeButton;
