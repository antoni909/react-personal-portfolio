import RelatedEducation from './RelatedEducation'
import PreviousExp from './PreviousExp'

// DONE: create class for Box parent and Card child items
// DONE: create show skills on hover of certificate
// DONE: popup text overflows into next component when hover over CF cert
// TODO: create move renderPreviousExp and renderRelatedEd into their own components, as children of education component

const Education = () => {
  
  return (
    <>
      <RelatedEducation />
      <PreviousExp />

    </>
  );
}

export default Education;
