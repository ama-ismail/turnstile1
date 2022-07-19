import { Outlet, Link } from "react-router-dom";
import "./style.css";

// Рекорд
function Turnstile() {
  return (
    <div className="container turnstile">
      <h1 style={{fontSize: "400%"}}>ТУРНИКЕТ</h1>
      <h2 className="but"><Link to="/game">Jump a turnstile</Link></h2>
      <h2 className="but"><Link to="/rules">Правила</Link></h2>
      <h2 className="but"><Link to="/control">Управление</Link></h2>

      <Outlet />
    </div>
  );
}

export default Turnstile;
