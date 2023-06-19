

const SearchNav = ({handleSearch, serachValue}) =>{
    return (
        <>
            <div className="searchbar-div">

                <div className="saerchbar-box">
                    <input type="search" className="searchbar-input" placeholder="search ..."  value={serachValue} onChange={handleSearch}/>
                    <button className="searchbar-btn">Buscar</button>
                </div>
            </div>
        </>
    )
}

export default SearchNav