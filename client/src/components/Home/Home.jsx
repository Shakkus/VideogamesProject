import { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllGames } from '../../redux/actions';

import SearchNav from '../Home/SearchNav/SearchNav';
import Cards from './Cards/Cards';
import Pagination from './Pagination/Pagination';
import Filters from './Filters/Filters'
import Nav from '../LayoutComponents/Nav/Nav';



const Home = () => {
    const videogames = useSelector(state => state.videogames);
    const dispatch = useDispatch();
    useEffect(()=>dispatch(getAllGames()),[dispatch])

    //SearchBar
    const [searchValue,SetSearchValue] = useState('');
    const handleSearch = (event) => {
        SetSearchValue(event.target.value)
        setCurrentPage(1);
    }
    const gameSearch=videogames.filter(game=>game.name.toLowerCase().startsWith(searchValue.toLowerCase()))

    //pagination
    const [currentPage,setCurrentPage] = useState(1);

    const indexOfLastGame = currentPage * 15;
    const indexOfFirstGame = indexOfLastGame - 15;
    const currentGames = gameSearch.slice(indexOfFirstGame, indexOfLastGame);
    const totalPages = Math.ceil(gameSearch.length / 15);

    const goToNextPage = () => setCurrentPage(page => page + 1);
    const goToPreviousPage = () => setCurrentPage (page => page - 1)

    return (
        <div className="homeSection">
            <h2>Esto es la seccion home</h2>
            <Nav />
            <SearchNav searchValue={searchValue} handleSearch={handleSearch}/>
            <Filters />
            <h2>Juegos</h2>
            <Cards currentGames={currentGames}/>
            <Pagination goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} currentPage={currentPage} totalPages={totalPages}></Pagination>
        </div>
    )
}

export default Home;