import React, { useState } from 'react';

const CodeContext = React.createContext({})
export { CodeContext }

const CodeContextContainer = ({
  children,
}) => {
  const [code, setCode] = useState();
  const [team, setTeam] = useState(0);
  const [baseUrl] = useState('Application');

  return (
    <CodeContext.Provider
      value={{
        setCode,
        code,
        team,
        setTeam,
        baseUrl
      }}
    >
      { children }
    </CodeContext.Provider>
  )
}

export default CodeContextContainer
