import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends(){
    const [Friends, setFriends] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
      .catch(error => console.log(error))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {Friends.length} </h3>
            {
             Friends.map(friend=> <Friend></Friend>)
}
        </div>
    )
}

/*
1. use state to hold data
2. useEffect with dependency array
3. use fetch to load 
4. set loaded data to the state*/ 