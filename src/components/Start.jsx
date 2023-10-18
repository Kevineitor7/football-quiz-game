import { useState } from 'react'
import Logo from './Logo.jsx'


export default function Start({
  startGame
}) {

  const [clubsTop, setClubsTop] = useState(['Barcelona', 'Arsenal', 'Real_Madrid', 'Manchester_United', 'Inter_Milan', 'Newcastle_United'])
  const [clubsBottom, setClubsBottom] = useState(['Manchester_City', 'Ajax', 'Liverpool', 'AC_Milan', 'Sevilla', 'Bayern_Munich'])

    return (
        <>
          <div className="intro">
            <div className="intro-clubs">
            {clubsTop ? (
                    clubsTop.map((club, index) => (
                        <Logo key={club + index} club={club}/>
                    ))
                ): (
                        <div className='logo'>loading</div>
                )}
            </div>
            <h3>Test your football knowledge</h3>
            <button id='intro-btn' onClick={startGame}>Start playing</button>
            <div className="intro-clubs2">
            {clubsBottom ? (
                    clubsBottom.map((club, index) => (
                        <Logo key={club + index} club={club}/>
                    ))
                ): (
                        <div className='logo'>loading</div>
                )}
            </div>
          </div>
        </>
    )
}