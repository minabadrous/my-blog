import { Link, useHistory ,useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Edit } from './edit.svg'

const PostDetails = () => {

    const {id} = useParams();
    const {loading, error, data:post} = useFetch('http://localhost:8000/posts/' + id, '')
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/' + id, {
            method: 'DELETE'
        })
        .then(() => history.push('/'))
    }

    return ( 
        <div className="post-details">
            {loading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {post && (
                <article>
                    <div className="post-header">
                        <h2 className="post-title">{post.title}</h2>
                        <div className="post-icons">
                            <Delete onClick={handleDelete}/>
                            <Link to={'/edit/' + post.id}><Edit/></Link>
                        </div>
                    </div>
                    <p className="post-author">Author: <strong>{post.author}</strong></p>
                    <div>{post.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default PostDetails;