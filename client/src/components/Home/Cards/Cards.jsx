import Card from './Card';
import './card.css'

const Cards =({currentGames}) => {
    return (
        <div className='games-container'>
            {currentGames.map((game)=> <Card game={game} />)}
        </div>
    )
}

export default Cards;