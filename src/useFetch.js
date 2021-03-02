import { useEffect, useState } from "react"

const useFetch = (url, filter) => {
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(()=> {

            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) throw Error("Could not fetch data")
                return res.json()
            })
            .then(data => {
                if(filter !== ''){
                    let filtered = []
                    for(const post in data){
                        if(data[post].title.toLowerCase().includes(filter.toLowerCase())) filtered.push(data[post])
                    }
                    setData(filtered)
                }
                else{ setData(data) }
                setLoading(false)
                setError(null)
            })
            .catch(err=> {
                if(err.name !== "AbortError"){
                    setError(err.message)
                    setLoading(false)
                }
            })

        }, 500)

        return ()=> abortCont.abort()
    }, [url, filter])

    return {loading, data, error}
}
 
export default useFetch;