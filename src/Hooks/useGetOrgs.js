import { useState, useEffect } from 'react';
import { octokit } from '../Utils/gh';

// TODO: refactor to use hook useRef()
// FIX: repeated data in state: cache 
export const useGetOrgs = ( url ) => {

  const [cache, setCache] = useState({})
  const [orgData, setOrgData] = useState({})
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState('')

  const makeOrgs = async (rawOrgData) => {
    // console.log('raw',rawOrgData)
    let obj = {}
    rawOrgData.forEach( org => {
      let keyName = org.login.replace(/-/g,'_')
      let tempObj = {orgName: org.login, orgRepos: org.repos_url}
      obj[keyName] = tempObj 
    })
    setOrgData({...orgData,...obj})
}

  const getData = async() => {

    if(cache[url]){
      // console.log('cache hit',cache)
      makeOrgs(cache[url])
      setPending(false)
    }
    else{
        // console.log('cache miss',cache)
        const response = await octokit.request(url, {org: 'org'})
        if(response.status === 200){
          setCache(cache[url] = await response.data)
          makeOrgs(cache[url])
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
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[url])

  return { orgData, isPending, error }
}

