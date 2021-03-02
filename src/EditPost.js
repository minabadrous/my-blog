import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Authors from "./Authors";


const EditPost = () => {

    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('a')
    const [author, setAuthor] = useState('a')
    const [body, setBody] = useState('a')
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:8000/posts/' + id)
        .then(res => res.json())
        .then(post => {
            setTitle(post.title)
            setAuthor(post.author)
            setBody(post.body)
            setLoading(false)
        })
    }, [id])

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)

        fetch('http://localhost:8000/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({title, body, author})
        })
        .then(() => {
            setLoading(false)
            history.push('/posts/' + id)
        })
    }



    return ( 
        <div className="create-blog">
            {loading && <div>Loading...</div>}
            {!loading && (
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
                    {!loading && 'Update Post'}
                </button>
            </form>
            )}
        </div>
     );
}
 
export default EditPost;