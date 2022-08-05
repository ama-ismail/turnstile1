import "./style.css";
import { Outlet, Link } from "react-router-dom";

export default function Control() {
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <p style={{width: "800px", textAlign: "start", fontSize: "25px"}}>
        Для управление синей фишкой нажмите 1. <br />
        Для управление фиолетовой фишкой нажмите 2. <br />
        Для управление оранжевой фишкой нажмите 3. <br />
        Для управление зелёной фишкой нажмите 4. <br />
        Для управление первой серой фишкой фишкой нажмите 5. <br />
        Для управление второй серой фишкой фишкой нажмите 6. <br />
        Для управление третьей серой фишкой фишкой нажмите 7. <br />
        Для управление четвертой серой фишкой фишкой нажмите 8. <br />
        Стрелка влево для движение влево <br />
        Стрелка вправо для движение вправо <br />
        Стрелка вверх для движение вверх <br />
        Стрелка вниз для движение вниз <br />
      </p>
      <button type="button"><Link to="/"style={{color: "black"}}>Назад</Link></button>
      <Outlet />
    </div>
  );
}

/*
<p style={{width: "800px", textAlign: "start", fontSize: "25px", backgroundColor: "red"}}>
  Внимание! Пожалуйста, обновите страницу перед каждым уровнем, иначе я не отвечаю за корректность игры.</p>
<br/>
*/
