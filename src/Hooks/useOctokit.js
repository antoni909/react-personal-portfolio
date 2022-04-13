import { useState, useEffect } from 'react';
import { octokit } from '../Utils/gh';

const cache = {}
// TODO: refactor to use hook useRef()
export const useOctokit = (url) => {
  const [data, setData] = useState([])
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState('')
  
  useEffect( () => {
    const getData = async() => {
      let response
  
      if(cache[url]){
        console.log('cache hit')
        const data = cache[url]
        setData(data)
        setPending(false)
      }else{
          console.log('cache miss')
          response = await octokit.request(url, {org: 'org'})
          cache[url] = response.data
          if(response.status === 200){
            setData(response.data)
            setPending(false)
          }else{
            setError('could not fetch data')
            setPending(false)
          }
      }
    }
    if(!url) return
    getData()
  },[url])

  return { data, isPending, error }
}
