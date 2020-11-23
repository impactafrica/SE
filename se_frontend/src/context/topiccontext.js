import React,{useState,createContext} from 'react'

export const topicContext = createContext();

function TopicProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [topicId, setTopicId] = useState({});

  return (
    <topicContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        topicId,
        setTopicId,
      }}
    >
      {props.children}
    </topicContext.Provider>
  );
}
export default TopicProvider;
