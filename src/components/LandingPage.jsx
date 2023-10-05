import React from "react";
import background from "/images/background.jpg";
import { Button } from "@chakra-ui/react";

const LandingPage = ({ handleStart }) => {
  return (
    <section className="home-wrapper">
      <div className="home-caption">
        <h1>FaceDuo</h1>
        <h2>
          A fun and interactive facial expressions memory game for neurodiverse
          children. Let's put your matching skills to the test!
        </h2>
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          onClick={handleStart}
        >
          Play
        </Button>
      </div>
      <img src={background} alt="photo" className="homepage-img" />
    </section>
  );
};

export default LandingPage;