import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  
  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const getMostVoted = () => {
    let maxIndex = 0;
    for (let i = 1; i < points.length; i++) {
      if (points[i] > points[maxIndex]) {
        maxIndex = i
      }
    }
    setMostVoted(maxIndex)
  }
  
  const handleVotes = () => {
    const pCopy = [ ...points ]
    
    pCopy[selected] += 1
    
    setPoints(pCopy)
  }

  useEffect(() => {
    getMostVoted()
  })

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <div>
        <Button handleClick={handleVotes} text="vote" />
        <Button handleClick={handleSelected} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
