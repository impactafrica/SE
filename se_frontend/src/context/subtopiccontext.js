import React,{useState,createContext} from 'react'

export const subTopicContext = createContext();

function SubTopicProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [subtopicId, setsubTopicId] = useState({});

  return (
    <subTopicContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        subtopicId,
        setsubTopicId,
      }}
    >
      {props.children}
    </subTopicContext.Provider>
  );
}
export default SubTopicProvider;
