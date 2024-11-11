

import './App.css'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
