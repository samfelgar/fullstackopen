import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>{ props.part } { props.exercises }</p>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((item, index) => {
        return <Part part={item.name} exercises={item.exercises} key={index} />
      })}
    </div>
  );
}

const Total = (props) => {
  let sum = 0;
  props.parts.forEach((item) => sum += parseInt(item.exercises));
  return (
    <p>Number of exercises {sum}.</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));