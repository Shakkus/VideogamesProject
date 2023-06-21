import "./searchnav.css"

const SearchNav = ({handleSearch, serachValue}) =>{
    return (
        <div className="searchbar-box">
            <input type="search" className="searchbar-input" placeholder="search ..."  value={serachValue} onChange={handleSearch}/>
            <button className="searchbar-btn">Buscar</button>
        </div>
    )
}

export default SearchNav