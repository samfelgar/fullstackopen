import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticsTable = ({ statistics }) => {
  return (
    <table>
      <tbody>
        { statistics.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.text}</td>
              <td>{item.value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

const Statistics = ({ good, bad, neutral }) => {

  const allStats = good + bad + neutral

  if (allStats === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const avg = (good - bad) / allStats
  const positive = (good * 100) / allStats;
  const statistics = [
    {
      text: 'good',
      value: good
    },
    {
      text: 'neutral',
      value: neutral
    },
    {
      text: 'bad',
      value: bad
    },
    {
      text: 'all',
      value: allStats
    },
    {
      text: 'average',
      value: avg
    },
    {
      text: 'positive',
      value: positive + '%'
    },
  ]

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsTable statistics={statistics} />
    </div>
  )
}

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));