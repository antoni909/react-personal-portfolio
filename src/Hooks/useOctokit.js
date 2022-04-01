import { useState, useEffect, useRef } from 'react';
import { octokit } from '../Utils/gh';

const cache = {}

// TODO: refactor to use hook useRef()
export const useOctokit = (url) => {
  const [data, setData] = useState([])
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState('')

  const getRepos = async() => {
    let response

    if(cache[url]){
      setData(cache[url])
      setPending(false)
      console.log('cache hit')
    }else{
        console.log('cache miss')
        response = await octokit.request(url)
        if(response.status === 200){
          setData(response.data)
          setPending(false)
        }else{
          setError('could not fetch data')
          setPending(false)
        }
    }
  }

  useEffect( () => {
    if(!url) return
    // getRepos()
  },[url])

  return { data, isPending, error }
}
