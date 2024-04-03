import app from "../App.js";
export default function Nav() {
  return (
    <>
      <div className="Nav">
        <div className="center">
          <div className="home">
            <a
              href="#/HomePage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Home
            </a>
          </div>
          <div className="product">
            <a
              href="#App"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </div>
          <div className="update">
            <a
              href={"#" + app}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Blog
            </a>
          </div>
          <div className="profile">
            <a
              href="#/HomePage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </div>
          <div className="login">
            <a
              className="App-link"
              href="#/HomePage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
