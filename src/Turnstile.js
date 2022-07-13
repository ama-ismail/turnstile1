import { Outlet, Link } from "react-router-dom";
import "./style.css";

function Turnstile() {
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <p style={{width: "100px"}}><Link to="/game">Играть</Link></p>
      <br />
      <p style={{width: "100px"}}><Link to="/rules">Правила</Link></p>
      <br />

      <Outlet />
    </div>
  );
}

export default Turnstile;
