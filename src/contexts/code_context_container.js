import React, { useState } from 'react';

const CodeContext = React.createContext({})
export { CodeContext }

const CodeContextContainer = ({
  children,
}) => {
  const [code, setCode] = useState();
  const [team, setTeam] = useState(0);

  return (
    <CodeContext.Provider
      value={{
        setCode,
        code,
        team,
        setTeam
      }}
    >
      { children }
    </CodeContext.Provider>
  )
}

export default CodeContextContainer
