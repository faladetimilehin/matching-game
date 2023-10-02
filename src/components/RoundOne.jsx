import { Link } from "react-router-dom";

const RoundOne = () => {
  return (
    <>
      <Link to={`/image-grid/levelOne`} className="round-one-wrapper">
        <h1 className="round-one-heading">Round 1</h1>
      </Link>
      <Link to={`/image-grid/levelTwo`} className="round-one-wrapper">
        <h1 className="round-one-heading">Round 2</h1>
      </Link>
    </>
  );
};

export default RoundOne;
