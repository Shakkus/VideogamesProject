import {NavLink} from 'react-router-dom';

const Card = ({game}) => {
    return(
        <div className='card' key={game.id}>
            <img src={game.image} alt="" className='cardImg' />
            <div className='infoCard'>
                <h1 className='nameCard'>
                    <NavLink to={`/detail/${game.id}`} className='cardNameLink'>
                        {game.name}
                    </NavLink>
                </h1>
                <ul className='genresCard'>
                    {game.genres?.map((gen) => 
                        <li className='genreCard' key={gen}>
                            {typeof gen === 'string' ? gen : gen.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Card;