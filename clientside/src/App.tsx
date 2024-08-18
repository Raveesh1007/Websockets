import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ws, setWs] = useState<any>(null);
  const [latestMessage, setLatestMessage] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080")
    setWs(newSocket)
    newSocket.onopen = () => {
      console.log("connected")
      newSocket.send("Hello from Client!")
    }
    newSocket.onmessage = (message) => {
      console.log("got message", message)
      setLatestMessage(message.data)
    }
    newSocket.onclose = () => {
      console.log("disconnected");
    }
  })

  if(!ws) {
    return <div>
      Connecting...
    </div>
  }


  return (
    <>
    <input onChange ={
      (e)=> setMessage(e.target.value)
    }></input>
    <button onClick={() => 
      ws.send("Hello from Client!")
    }>send</button>
    {latestMessage}
    </>
  )
}

export default App
