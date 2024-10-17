import Counter from './counter'
import './App.css'
import Team from './Team'
import User from './User'
import Friends from './Friends'


function App() {
 function handleClick(){
  alert ('button clicked')
 }

 const handle = ()=>{
  alert('Press Done')
 }

 const addToFive = (num)=>{
  alert(num + 5)
 }
  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handle}>Clicked 2</button>
      <button onClick={()=> {alert('Third Cliked')}}>Third</button>
      <button onClick={()=> addToFive(5)}>Four</button>
    </>
  )
}

export default App
