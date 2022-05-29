import { useState } from 'react';

const ClickablePicture = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const imageSource = clicked ? props.imgClicked : props.img;

  return (
    <div>
      <img src={imageSource} alt="" onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;
