import { useEffect, useState } from 'react'

export default function Logo({
    club
}) {


const [logo, setLogo] = useState('')
const [error, setError] = useState(null)

useEffect(() => {
    async function fetching() {
        try {    
            const response = await fetch(
                `https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=${club}&APIkey=ecd1bf46e9d359b5c69596e04df7ada0bf65f2b3cf87484ce04721fa4a0b2aa4`, 
                {mode:'cors'}
                )
            const data = await response.json()
            setLogo(data.result[0].team_logo)
        }
        catch(err) {
            setError(err)
        }
     }
    fetching()
},[])

    if (error) return <div className="logo">{error}</div>
    
    return <div className="logo"><img className="image" src={logo} alt={club}/></div>
}