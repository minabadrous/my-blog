import { useState } from "react";
import { useHistory } from "react-router-dom";
import Authors from "./Authors";

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('mario')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        const post = {title, body, author}

        fetch('http://localhost:8000/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        .then(() => {
            setLoading(false)
            history.push('/')
        })
    }

    return ( 
        <div className="create-blog">
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

                <label>Author:</label>

                <Authors author={author} setAuthor={setAuthor}/>


                <label>Content:</label>
                <textarea 
                required
                value={body}
                onChange={e => setBody(e.target.value)}
                />

                <button className="add-post">
                    {loading && 'Loading...'}
                    {!loading && 'Add Post'}
                </button>
            </form>
        </div>
     );
}
 
export default CreatePost;