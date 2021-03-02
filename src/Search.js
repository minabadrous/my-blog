
const Search = ({handleFilter, filter}) => {

    return ( 
        <form>
            <input
            className="posts-search"
            type="text"
            placeholder="Search.."
            value={filter}
            onChange={e => handleFilter(e.target.value)}
            />
        </form>
     );
}
 
export default Search;