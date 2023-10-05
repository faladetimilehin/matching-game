import { useState, useEffect, useRef } from 'react';
import '../assets/styles/imageGrid.css';
import Confetti from 'react-confetti';
import { Button, Box, Flex, Text } from '@chakra-ui/react';
import correctMatchSound from '../assets/mixkit-dumbbell-pins-at-the-gym-2102.wav';
import incorrectMatchSound from '../assets/mixkit-negative-tone-interface-tap-2569.wav';
import ImageCard from './ImageCard';
import { cardImages } from './cardImages';
import { Howl, Howler } from 'howler';

function ImageGrid() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const correctMatchSoundRef = useRef(null);
  const incorrectMatchSoundRef = useRef(null);
  const backgroundMusicRef = useRef(null);

  // API details
  const trackId = '1342723'; // -
  const clientId = 'c78c554f'; // 

  // Function to toggle background music
  const toggleBackgroundMusic = () => {
    if (backgroundMusicRef.current) {
      if (backgroundMusicRef.current.playing()) {
        backgroundMusicRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        backgroundMusicRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  // Shuffle cards for a new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    correctMatchSoundRef.current = new Audio(correctMatchSound);
    incorrectMatchSoundRef.current = new Audio(incorrectMatchSound);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        correctMatchSoundRef.current.play();
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        incorrectMatchSoundRef.current.play();
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Check if the game is over
  const isGameOver = () => {
    return cards.every((card) => card.matched);
  };

  // Reset choices and increase the turn count
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();

    // Load and play background music
    Howler.autoUnlock = false; // Disable mobile audio unlock
    backgroundMusicRef.current = new Howl({
      src: [`https://api.jamendo.com/v3.0/tracks/file?client_id=${clientId}&id=${trackId}&format=mp32`],
      html5: true,
      volume: 0.5, // Adjust the volume as needed
    });

    // Handle music play/pause when component unmounts
    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.stop();
      }
    };
  }, [clientId, trackId]);

  return (
    <div className="grid">
      <h1>Xpert Match</h1>
      {isGameOver() && <p>Wow, you're really good at this! You've matched all the cards.</p>}
      {isGameOver() && <Confetti />}

      <Flex direction="column" alignItems="center" justifyContent="center">
        <Button
          colorScheme="orange"
          variant="solid"
          size="lg"
          onClick={shuffleCards}
          marginBottom="10px" // Add margin to the bottom
        >
          New Game
        </Button>
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          onClick={toggleBackgroundMusic}
        >
          {backgroundMusicRef.current && backgroundMusicRef.current.playing()
            ? 'Pause Music'
            : 'Play Music'}
        </Button>
      </Flex>

      <div className="card-grid">
        {cards.map((card) => (
          <ImageCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <Text align="center">Turns: {turns}</Text>
    </div>
  );
}

export default ImageGrid;
