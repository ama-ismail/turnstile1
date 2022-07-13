import { Outlet, Link } from "react-router-dom";
import "./style.css";

function Turnstile() {
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <h2>Уровни</h2>
      <div class="row">
        <div class="col-sm-3">
          <h1 className="level"><Link to="/game/level1">1</Link></h1>
        </div>
        <div class="col-sm-3">
          <h1 className="level"><Link to="/game/level2">2</Link></h1>
        </div>
        <div class="col-sm-3">
          <h1 className="level"><Link to="/game/level3">3</Link></h1>
        </div>
        <div class="col-sm-3">
          <h1 className="level"><Link to="/game/level4">4</Link></h1>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Turnstile;
