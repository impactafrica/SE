import React,{useState,createContext} from 'react'

export const questionContext = createContext();

function QuestionProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [questionId, setQuestionId] = useState({});

  return (
    <questionContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        questionId,
        setQuestionId,
      }}
    >
      {props.children}
    </questionContext.Provider>
  );
}
export default QuestionProvider;
