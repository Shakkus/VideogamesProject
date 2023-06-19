import React from "react";
import { filterGenre,filterOrigin,orderByAlphabet,orderByRating,getAllGenres } from "../../../redux/actions";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

const Filters = () => {
    const genreList = useSelector(state => state.genres)
    const dispatch = useDispatch();

    const handleGenreFilter = (event) => dispatch(filterGenre(event.target.value));
    const handleOriginFilter = (event) => dispatch(filterOrigin(event.target.value));
    const handleOrderByAlphabet = (event) => dispatch(orderByAlphabet(event.target.value));
    const handleOrderByRating = (event) => dispatch(orderByRating(event.target.value));

    useEffect(() => {
        dispatch(getAllGenres());
    },[dispatch]);

    return (
        <>
            <div className="filters">
                <select className="filter" onChange={handleOrderByAlphabet}>
                        <option value="" disabled selected>Alfabetico</option>
                        <option value="none">Normal</option>
                        <option value="ascA"> A-Z</option>
                        <option value="descA">Z-A</option>
                </select>

                <select className="filter" onChange={handleOrderByRating}>
                        <option value="" disabled selected>Rating</option>
                        <option value="none">Normal</option>
                        <option value="ascR">Mayor Rating</option>
                        <option value="descR">Menor Rating</option>
                </select>

                <select className="filter" onChange={handleGenreFilter}>
                        <option value="" disabled selected>Genero</option>
                        <option value="allGenres">Todos los generos</option>
                        { genreList.map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                </select>

                <select className="filter" onChange={handleOriginFilter}>
                        <option value="" disabled selected>Origen</option>
                        <option value="allOrigin">Todos los origenes</option>
                        <option value="API"></option>
                        <option value="Database">Base de datos</option>
                </select>
            </div>
        </>
    )
}

export default Filters;