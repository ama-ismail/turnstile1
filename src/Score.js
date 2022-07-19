//Рекорд
import { Outlet, Link } from "react-router-dom";

export default function Score() {
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <p style={{width: "800px", textAlign: "start", fontSize: "25px"}}>
        
      </p>
      <button type="button"><Link to="/"style={{color: "black"}}>Назад</Link></button>
    </div>
  );
}
