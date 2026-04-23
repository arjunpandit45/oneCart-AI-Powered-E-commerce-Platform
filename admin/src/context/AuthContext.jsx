import React, { createContext } from 'react'

export const authDataContext = createContext()
function AuthContext({children}) {
    // let serverUrl = "http://localhost:8000"
    let serverUrl = "https://onecart-admin45.onrender.com"

    let value = {
      serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
