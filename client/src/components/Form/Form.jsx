import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllGenres,getAllGames,PostVideogames } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import validate from './validation';
import Nav from '../LayoutComponents/Nav/Nav';

import './form.css'

const AddVideogame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genreList = useSelector(state => state.genre);
    const platformsApi = ["PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]


    const [form, setForm] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        genres:[],
        platforms:[],
        image:''
    })

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platform: [], 
        image:""
    })

    useEffect (()=> {
        dispatch(getAllGenres());
        dispatch(getAllGames());
    },[dispatch])

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form,[property]:value})
        setErrors(validate({...form,[property]:value}))
    }

    const handleSelectGenre = (event) => {
        const value = event.target.value;
        setForm({ ...form, genres: [...form.genres, value] });
      };
      
      const handleSelectPlatforms = (event) => {
        const value = event.target.value;
        setForm({ ...form, platforms: [...form.platforms, value] });
      };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(PostVideogames(form))
        setForm({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platform: [],
            image:"",
        })
        alert('Formulario creado correctamente')
        navigate('/home')
    }

    return (
        <div className="form">
            <Nav />

            <h2 className="title" >Crea tu videojuego</h2>

            <form onSubmit={submitHandler}>
                <div className='submitSpace'>
                    <label>Nombre :</label>
                    <input type="text" value={form.name} onChange={changeHandler} name='name'/>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className='submitSpace'>
                    <label>Descripcion :</label>
                    <input type="text" value={form.description} onChange={changeHandler} name="description" />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <div className='submitSpace'>
                    <label>Fecha de lanzamiento :</label>
                    <input type="date" value={form.released} onChange={changeHandler} name="released"/>
                    {errors.released && <span className="error">{errors.released}</span>}
                </div>

                <div className='submitSpace'>
                    <label>Imagen :</label>
                    <input type="text" value={form.image} onChange={changeHandler} name="image"/>
                    {errors.image && <span className="error">{errors.image}</span>}
                </div>

                <div className='submitSpace'>
                    <label >Generos:</label>
                    <select onChange={(event) => handleSelectGenre(event)}>
                        <option disabled selected defaultValue > Seleccionar </option>
                        {genreList?.map((genre)=>(<option value={genre}> {genre} </option>))}
                    </select>
                    {errors.genres && <span className="error"> {errors.genres} </span>}
                    <ul><li>{form.genres.map(element => element + ' ,')}</li></ul>
                </div>

                <div className='submitSpace'>
                    <label>Plataformas :</label>
                    <select onChange={(event) => handleSelectPlatforms(event)}>
                        <option disabled selected defaultValue>Seleccionar</option>
                        {platformsApi?.map((plataform)=> (<option value={plataform}>{plataform}</option> ))}
                    </select>
                    {errors.platform && <span className="error">{errors.platform}</span>}
                    <ul><li>{form.platforms.map(element => element + ' ,')}</li></ul>
                </div>

                <div className='submitSpace'>
                    <label htmlFor="">Rating: </label>
                    <input type="number" min='0' max='5' value={form.rating} onChange={changeHandler} name="rating" ></input>
                    {errors.rating && <span className="error">{errors.rating}</span>}
                </div>

                <button className='submitBtn' type="submit" disabled = {
                    form.name===''||errors.name||
                    form.description === '' || errors.description ||
                    form.rating === '' || errors.rating ||
                    form.released === '' || errors.released ||
                    form.image === '' || errors.image ||
                    form.genres === '' || errors.genres ||
                    form.platforms === '' || errors.platform }>Crear Videojuego</button>
            </form>
        </div>
    )
}

export default AddVideogame;