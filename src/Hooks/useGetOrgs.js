import { useState, useEffect, useRef } from 'react';
import { octokit } from '../Utils/gh';

// TODO: refactor to use hook useRef()
export const useGetOrgs = ( url ) => {
  const [cache, setCache] = useState({})
  const [data, setData] = useState([])
  const [orgData, setOrgData] = useState({})
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState('')

  const makeOrgs = async (rawOrgData) => {
    let obj = {}
    rawOrgData.forEach( org => {
      let keyName = org.login.replace(/-/g,'_')
      let tempObj = {orgName: org.login, orgRepos: org.repos_url}
      obj[keyName] = tempObj 
    })
    setOrgData({...orgData,...obj})
}

  const getData = async() => {
    let response
    if(cache[url]){
      console.log('cache hit',cache)
      setData([...cache[url]])
      setPending(false)
    }else{
        console.log('cache miss',cache)
        response = await octokit.request(url, {org: 'org'})
        setCache(cache[url] = await response.data)
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
    else {
      getData()
      if( data ) makeOrgs( data )
    } 
  },[url])

  return { orgData, isPending, error }
}
