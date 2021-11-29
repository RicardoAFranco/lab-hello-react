import './App.css';

function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="navbar">
          <img src="./images/pic1.png" alt="logo1" />
          <img src="./images/pic2.png" alt="menu" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </section>
      <section className="content">
        <div className="box">
          <img src="./images/pic3.png" alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interative UIs.</p>
        </div>
        <div className="box">
          <img src="./images/pic4.png" alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="box">
          <img src="./images/pic5.png" alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="box">
          <img src="./images/pic6.png" alt="" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
