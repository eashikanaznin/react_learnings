import { useEffect, useState } from "react"



export function useFetch(url) {
  const [apiData, setApidata ] = useState("")
  const [loading, setLoading ] = useState(true)
  const [error, setError ] = useState(false)
  
  useEffect(() => {

    setLoading(true)
    setError(false)

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setApidata(data);
    })
    .catch((e) => setError(e))
    .finally(() => {
      setLoading(false);
    })
  },[url])

  return (
    { data: apiData, isLoading: loading, isError: error }
    );
}
