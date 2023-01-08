import { useEffect, useState } from 'react';
import './App.css';

const styleObj = { fontSize: '2rem', color: 'red', backgroundColor: 'lightgreen' };

function App() {
  return (
    <div className="App">
      <article className='blog'>
        <h2 style={styleObj}>My Blog</h2>
        <p style={{ color: 'red' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam dolor eveniet? Pariatur incidunt voluptate a, molestiae sapiente culpa cupiditate eius accusantium corrupti reiciendis ullam velit eveniet necessitatibus fuga, nobis dolor quae in unde quam eligendi voluptatum! Dignissimos reprehenderit inventore totam culpa in nam voluptatibus, ducimus sit? Soluta, amet ullam.
        </p>
      </article>
      <Blog></Blog>
      <Mobile></Mobile>
      <Todo></Todo>
    </div>
  );
}

const Blog = () => {
  return (
    <div>
      <h1>Parent Blog</h1>
      <BlogOne heading={'Saint Martin Tour'} author={'Al Amin Miah'}></BlogOne>
      <BlogTwo heading={'Coxes Bazar Tour'} author={'Sabbir Howladar'}></BlogTwo>
      <BlogThree heading={'Bandarban Tour'} author={'Masum Billah'}></BlogThree>
    </div>
  );
}

const BlogOne = (props) => {
  return (
    <div style={{ backgroundColor: 'lightskyblue' }}>
      <h3>Heading: {props.heading}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
}

const BlogTwo = (props) => {
  return (
    <div style={{ backgroundColor: 'lightpink' }}>
      <h3>Heading: {props.heading}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
}

const BlogThree = (props) => {
  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <h3>Heading: {props.heading}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
}

const Mobile = () => {
  const [count, setCount] = useState(100);

  const decreaseCount = () => setCount(count - 10);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decreaseCount}>battery down</button>
    </div>
  );
}

const Todo = () => {

  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, []);

  return (
    <div>
      <h1>To Do Lists: {todos.length}</h1>
      {
        todos.map(todo => <li>{todo.title}</li>)
      }
    </div>
  );
}

export default App;
