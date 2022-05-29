import './Random.css';

const Random = (props) => {
  return (
    <div className="random">
      Random value between 1 and 60 =&gt;
      {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </div>
  );
};

export default Random;
