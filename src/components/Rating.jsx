const Rating = (props) => {
  // Number() coherce a string into a number
  const fullStarCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullStarCount;
  return (
    <div className="rating">
      {'★'.repeat(fullStarCount)}
      {'☆'.repeat(emptyStarCount)}
    </div>
  );
};

export default Rating;
