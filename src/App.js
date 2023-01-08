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
    </div>
  );
}

const Blog = () => {
  return (
    <div>
      <h3>Parent Blog</h3>
    </div>
  );
}

const BlogOne = (props) => {
  return (
    <div></div>
  );
}

const BlogTwo = (props) => {
  return (
    <div></div>
  );
}

const BlogThree = (props) => {
  return (
    <div></div>
  );
}

export default App;
