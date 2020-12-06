import React,{useState,createContext} from 'react'

export const topicContext = createContext();

function TopicProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [topicId, setTopicId] = useState({});
  const [topicName, setTopicName] = useState({});

  return (
    <topicContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        topicId,
        setTopicId,
        topicName,
        setTopicName,
      }}
    >
      {props.children}
    </topicContext.Provider>
  );
}
export default TopicProvider;
