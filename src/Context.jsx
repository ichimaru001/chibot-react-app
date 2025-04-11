import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false)
  const [logOutPopUp, setLogOutPopUp] = useState(false)

  return (
    <AppContext.Provider
      value={{
        sidebarState,
        setSidebarState,
        logOutPopUp,
        setLogOutPopUp,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
