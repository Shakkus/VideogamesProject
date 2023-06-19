import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllGenres,getAllGames,PostVideogame } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import validate from './validation';
import Nav from '../LayoutComponents/Nav/Nav';

const AddVideogame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genreList = useSelector(state => state.genres);
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
        platforms: [],
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

    const handleSelectGenre = (event ) => {
        const value = event.target.value;
        setForm({...form, genres:[...form.genres, value]})
    }

    const handleSelectPlatforms = (event) => {
        const value = event.target.value;
        setForm({ ...form, platform: [...form.platform, value] })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(PostVideogame(form))
        setForm({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platform: [],
            image:"",
        })
        navigate('/home')
    }

    return (
        <div className="form">
            <Nav />

            <h2>Crea tu videojuego</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Nombre :</label>
                    <input type="text" value={form.name} onChange={changeHandler} name='name'/>
                    {errors.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="">Descripcion :</label>
                    <input type="text" value={form.description} onChange={changeHandler} name='name'/>
                    {errors.description && <span>{errors.description}</span>}
                </div>

                <div>
                    <label htmlFor="">Fecha de lanzamiento :</label>
                    <input type="text" value={form.released} onChange={changeHandler} name='name'/>
                    {errors.released && <span>{errors.released}</span>}
                </div>

                <div>
                    <label htmlFor="">Imagen :</label>
                    <input type="text" value={form.name} onChange={changeHandler} name='name'/>
                    {errors.image && <span>{errors.image}</span>}
                </div>

                <div>
                    <label htmlFor="">Generos:</label>
                    <select name="" onChange={(event) => handleSelectGenre(event)} id="">
                        <option disabled selected defaultValue>Seleccionar</option>
                        {genreList?.map((genre)=>(<option value={genre}>{genre}</option>))}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Plataformas :</label>
                    <select name="" onChange={(event) => handleSelectPlatforms(event)} id="">
                        <option disabled selected defaultValue>Seleccionar</option>
                        {platformsApi?.map((element)=> (<option value={element}>{element}</option>))}
                    </select>
                    {errors.genres && <span>{errors.genres}</span>}
                    <ul>
                        <li>{form.genres.map(element => element = ' ,')}</li>
                    </ul>
                </div>

                <div>
                    <label htmlFor="">Rating: </label>
                    <input type="number" min='0' max='5' value={form.rating} onChange={changeHandler} name="rating" ></input>
                    {errors.rating && <span className="error">{errors.rating}</span>}
                </div>

                <button type="submit" disabled = {
                    form.name===''||errors.name||
                    form.description === '' || errors.description ||
                    form.rating === '' || errors.rating ||
                    form.released === '' || errors.released ||
                    form.image === '' || errors.image ||
                    form.genres === '' || errors.genres ||
                    form.platforms === '' || errors.platforms
                }>Crear Videojuego</button>
            </form>
        </div>
    )
}

export default AddVideogame;