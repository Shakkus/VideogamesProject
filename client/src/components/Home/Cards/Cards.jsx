import Card from './Card';

const Cards =({currentGames}) => {
    return (
        <div className='games'>
            {currentGames.map((game)=> <Card game={game} />)}
        </div>
    )
}

export default Cards;