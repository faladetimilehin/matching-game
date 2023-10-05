import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const RoundOne = () => {
  return (
    <Link to="/image-grid" className="round-one-wrapper">
      <h1 className="round-one-heading">Instructions</h1>
      <h2 className="round-one-instructions">
        Click or tap on the cards to turn them over. Use your super memory to
        remember which card is where. Match two cards that are the same to
        reveal the facial expression. You win when all of the cards are matched.
      </h2>
      <Button colorScheme="teal" variant="solid" size="lg">
        Start
      </Button>
    </Link>
  );
};

export default RoundOne;





























































































