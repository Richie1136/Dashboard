import { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true)


  const context = {
    activeMenu,
    setActiveMenu
  }

  return (
    <StateContext.Provider value={context}>
      {children}
    </StateContext.Provider>
  )

}

export const useStateContext = () => useContext(StateContext)