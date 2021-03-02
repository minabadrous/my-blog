import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const Authors = ({author, setAuthor}) => {

    const {data, error: authorError} = useFetch('http://localhost:8000/authors', '')

    const [authors, setAuthors] = useState(null)
    const [loadingAuthors, setLoadingAuthors] = useState(true)

    const [currentAuthor, setCurrentAuthor] = useState(author)
    const [newAuthor, setNewAuthor] = useState('')
    const [loadingAdd, setLoadingAdd] = useState(false)

    useEffect(() => {
        if(data){
            setAuthors(data)
            setLoadingAuthors(false)
        }
    }, [data])

    const handleAdd = e => {
        e.preventDefault()
        
        if(newAuthor !== ''){
            setLoadingAdd(true)

            const newArr = authors.concat({
                name:newAuthor, 
                id: (authors[authors.length - 1].id) + 1 
            })
            setAuthors( newArr )
            
            fetch('http://localhost:8000/authors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: newAuthor})
            })
            .then(() => {
                setCurrentAuthor(newAuthor)
                setNewAuthor('')
                setLoadingAdd(false)
            })
        }
    }

    return (
        <div>
            {authorError && <div>{authorError}</div>} 
            <select
            className="author-select"
            required
            value={currentAuthor}
            onChange={e => setCurrentAuthor(e.target.value)}
            >
                {!loadingAuthors && authors.map(author => (
                    <option value={author.name} key={author.id}>{author.name}</option>
                ))}
            </select>
            <div className="add-author">
                <input 
                type="text" 
                placeholder="Example: Mina Badrous" 
                value={newAuthor}
                onChange={e => setNewAuthor(e.target.value)}/>
                <button onClick={handleAdd}> 
                    {loadingAdd && 'Adding Author...'}
                    {!loadingAdd && 'Add New Author'}
                </button>
            </div>
        </div>

     );
}
 
export default Authors;