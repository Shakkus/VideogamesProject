import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Nav from '../LayoutComponents/Nav/Nav'
import './detail.css'

const Detail = () => {
    const {id} = useParams();
    const [game, setGame] = useState({});

    const getGameInfo = async (id) => {
        const { data } = await axios(`http://localhost:3001/videogames/${id}`)
        if(data.name) setGame(data);
    }

    useEffect(() => {
        getGameInfo(id)
    },[id]);

    return (
        <div key={game.id}>
            <Nav />
            <div className="generalInfo">
                <h2 className='gameName'> {game.name} </h2>
                <div className="gameInfo">

                    <img  src={game.image} alt="" width='1000px'/>

                    <div className="boxToBlock">

                        <div className='platforms'>
                            
                            <h3 className='detailPlatform'>Plataformas:</h3>
                            <ul className='gamePlatforms'>
                                {game.platform?.map((platform,index) => 
                                    <li key={index}>{platform}</li>
                                )}
                            </ul>
                        </div>

                        <div className='gameDetails'>
                            <h1 className='detail-id'>ID: {game.id}</h1>
                            <p></p>
                            <p>Fecha de lanzamiento: {game.released}</p>

                        </div>

                        <div className='gameGenres'>
                            <h3 className='detailGenre'>Generos:</h3>
                            <ul className='detailGenreList'>
                                {game.genres?.map((genre,index) => 
                                    <li key={index}>{genre}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Detail;