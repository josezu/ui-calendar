import { createContext } from 'react'
import { State, Action } from './reducer'

interface Main {
  state: State
  dispatch: React.Dispatch<Action>
}

const MainContext = createContext({} as Main)

export default MainContext
