import React, { useState } from 'react';

const CodeContext = React.createContext({})
export { CodeContext }

const CodeContextContainer = ({
  children,
}) => {
  const [code, setCode] = useState();

  return (
    <CodeContext.Provider
      value={{
        setCode,
        code,
      }}
    >
      { children }
    </CodeContext.Provider>
  )
}

export default CodeContextContainer
