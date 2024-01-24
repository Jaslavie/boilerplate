//* Here, I will return all of the commonly used components so its easy to view
import "./App.sass";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="grid-row">
            <div>asdf</div>
            <div>asdf</div>
            <div>asdf</div>
          </div>
          {/* Sign up  */}
          <button className="primary">Sign up</button>
          {/* Log in */}
          <button className="secondary">Log in </button>
        </div>
      </section>
    </>
  );
}

export default App;
