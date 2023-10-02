import '../assets/styles/singleCard.css'

export default function ImageCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/images/cover.jpg" onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}