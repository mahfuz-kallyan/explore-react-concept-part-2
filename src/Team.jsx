import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11);
    const teamStyle={
        border: '2px solid purple',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px'
    }

    const handleAdd =()=>{
        const newTeam = count + 1;
        setCount(newTeam)
    }

    const handleRemove =()=>{
        const newRemove = count - 1;
        setCount(newRemove)
    }
    return(
        <div style={teamStyle}>
            <h3>
                Players: {count}
            </h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Players</button>
        </div>
    )
}