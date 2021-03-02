import { Link } from "react-router-dom";
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Edit } from './edit.svg'

const PostsList = ({posts}) => {
    return ( 
        <div className="posts-list">
            { posts.map(post => (
                <div className="post-preview" key={post.id}>
                    <div className="post-data">
                        <Link className="post-link" to={"/posts/" + post.id}>
                            <h2 className="preview-title">{ post.title }</h2>
                        </Link>
                        <p className="preview-author">written by: <strong>{ post.author }</strong></p>
                    </div>
                    <div className="post-icons">
                        <Delete />
                        <Link to={'/edit/' + post.id}><Edit/></Link>
                    </div>
                </div>

            ) ) }
        </div>
     );
}
 
export default PostsList;