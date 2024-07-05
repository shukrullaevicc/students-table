import AppContext from "../store"
import { useReducer } from "react"
import { reducer } from "../reducer/reducer"

const StateProvider = ({children}) => {
  return (
    <AppContext.Provider value={useReducer(reducer, {students: []})}>
      {children}
    </AppContext.Provider>
  )
}

export default StateProvider