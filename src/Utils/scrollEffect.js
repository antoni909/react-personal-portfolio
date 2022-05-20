
export const scrollEffect = targetRef => {
  console.log(targetRef)
  targetRef.current.scrollIntoView({ 
    behavior:'smooth',
    block: 'start',
  })
}

