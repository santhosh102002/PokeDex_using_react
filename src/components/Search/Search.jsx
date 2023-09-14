import useDebounce from "../../hooks/useDebounce";
import "./Search.css"

function Search({updateSearchTerm}){
    const dobunceUpdateSearch = useDebounce((e)=>updateSearchTerm(e.target.value))
    return(
        <input 
        id="search-pokemon" 
        type="text"
        placeholder="which pokemon you're looking for"
        onChange={dobunceUpdateSearch}/>
    )
}

export default Search;