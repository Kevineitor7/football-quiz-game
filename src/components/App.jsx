import { useState } from 'react'
import Start from './Start.jsx'
import Play from './Play.jsx'
import players from '../players.js'

function App() {

  const [start, setStart] = useState(false)

  function startGame() {
    setTimeout(() => {
      setStart(!start)
    },300)
  }

  function gotoIntro() {
    setStart(false)
  }

  
  return (
    <>
      <div className="container">
          <h1 onClick={gotoIntro}>Which player played on these clubs</h1>
          {!start ? (
            <Start startGame={startGame}/>
          ) : <Play players={players}/>}
          <div className="footer">@ 2023 <a className='footer-link' target="blank" href='https://www.linkedin.com/in/kevin-campa777/'>Kevin Campa</a></div>
      </div>
    </>
  )
}

export default App
