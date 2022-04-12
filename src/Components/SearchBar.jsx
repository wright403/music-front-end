const SearchBar = ({filterSongs}) => {

    const handleSubmit = () => {
        // execute the callback 
        filterSongs( filterfieldvalue )
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>filter</label>
                <input name={filterfield} type='search'></input>
            </div>
        </form>
     );
}
 
export default SearchBar;