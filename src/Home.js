import { useState } from "react";
import PostsList from "./PostsList";
import Search from "./Search";
import useFetch from "./useFetch";

const Home = () => {


    const [filter, setFilter] = useState('')
    const {loading, error, data:posts} = useFetch('http://localhost:8000/posts', filter)

    return ( 
        <div className="home">
            {!error && posts && 
                <Search 
                    filter={filter} 
                    handleFilter={e => {
                        setFilter(e)

                        }}/>}
            {!error && posts && <PostsList posts={posts}/>}
            {loading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
        </div>
     );
}
 
export default Home;