import './styles/global.css'
import Game from '../pages/Game'
import UserService from '../entities/services/userService'
import { useEffect } from 'react'
import { useRefresh } from '../entities/hooks/useRefresh'
function App() {

  const refresh = useRefresh()
  useEffect(() => {
    refreshUserHandler()
  }, [])

  const refreshUserHandler = async () => {
    try {
      await refresh('', '')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Game />
    </>
  )
}

export default App
