import './styles/global.css'
import Game from '../pages/Game'
import { useEffect } from 'react'
import { useFetchUser } from '../entities/hooks/useFetchUser'
function App() {

  const fetchUser = useFetchUser()
  useEffect(() => {
    refreshUserHandler()
  }, [])

  const refreshUserHandler = async () => {
    try {
      await fetchUser()
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
