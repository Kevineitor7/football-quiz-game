import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Play({
    players
}) {

const playersLength = Object.keys(players).length

const [player, setPlayer] = useState(players[Math.floor(Math.random() * playersLength)])
const [input, setInput] = useState('')
const [answer, setAnswer] = useState()
const [result, setResult] = useState('')
const [time, setTime] = useState(22)

let check = <FontAwesomeIcon icon={faCheck} beat style={{color: "#11ff00", fontSize: "5rem"}} />
let cross = <FontAwesomeIcon icon={faX} beat style={{color: "#ff0026", fontSize: "5rem"}} />
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time => time - 1)
        }, 1000)

        if (time == 0) {
            checkAnswer()
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
    }, [time])

    function handleInput(e) {
        setInput(e.target.value)
    }

    function checkAnswer() {
        if (input.toLowerCase() == player.name.toLowerCase()) {
            setAnswer(true)
            setResult(player.name)
        } else if (input.toLowerCase() != player.name.toLowerCase()) {
            setAnswer(false)
            setResult(player.name)
        }
        setTime('')
        document.querySelector('.answer-btn').style = 'display: none;'
        document.querySelector('.next-btn').style = 'display: block;'
    }

    function generatePlayer() {
        setTime(22)
        document.querySelector('.answer-btn').style = 'display: block;'
        document.querySelector('.next-btn').style = 'display: none;'
        setResult('')
        setInput('')
        setAnswer()
        let randomIndex = Math.floor(Math.random() * playersLength)
        let playerPicked = players[randomIndex]
        setPlayer(playerPicked)
    }

    return (
        <>
          <div className="play">
            <h2>Which player is this?</h2>
            <div className="logos">
                {player.clubs ? (
                    player.clubs.map((club, index) => (
                        <Logo key={club + index} club={club}/>
                    ))
                ): (
                        <div className='logo'>loading</div>
                )}
            </div>
            <div className="answer">
                <input type='text' value={input} onChange={handleInput}/>
                <button className="answer-btn" onClick={checkAnswer}>Answer</button>
                <button className="next-btn" style={{display:'none'}} onClick={generatePlayer}>Next</button>
            </div>
            <div className="result">
                {answer && <p>{check}</p>}
                {answer && <p className='player-name'>{result}</p>}
                {answer == false && <p>{cross}</p>}
                {answer == false && <p className='player-name'>{result}</p>}
            </div>
            <div className="timer">
                <span>{time}</span>
            </div>
          </div>
        </>
    )
}