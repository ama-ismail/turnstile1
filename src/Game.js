import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./style.css";
import $ from 'jquery';

function Turnstile() {
  //let get = WinCheck;$(`.i${index + 1}`).removeClass("hide");
  $(document).ready(function(){
    for(let i = 1; i <= 40; i++){
      const get = localStorage.getItem(`${i}`);
      if(get === "win"){
        $(`.i${i}`).css("display", "block");
      }
    }
  });
  function refreshPage(){
    window.location.reload();
  }
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <h2>Уровни</h2>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level1">1</Link></h1>
          <i className="fa fa-check imgEnd i1" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level2">2</Link></h1>
          <i className="fa fa-check imgEnd i2" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level3">3</Link></h1>
          <i className="fa fa-check imgEnd i3" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level4">4</Link></h1>
          <i className="fa fa-check imgEnd i4" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level5">5</Link></h1>
          <i className="fa fa-check imgEnd i5" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level6">6</Link></h1>
          <i className="fa fa-check imgEnd i6" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level7">7</Link></h1>
          <i className="fa fa-check imgEnd i7" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level8">8</Link></h1>
          <i className="fa fa-check imgEnd i8" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level9">9</Link></h1>
          <i className="fa fa-check imgEnd i9" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level beginner" onClick={refreshPage}><Link to="/game/level10">10</Link></h1>
          <i className="fa fa-check imgEnd i10" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level11">11</Link></h1>
          <i className="fa fa-check imgEnd i11" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level12">12</Link></h1>
          <i className="fa fa-check imgEnd i12" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level13">13</Link></h1>
          <i className="fa fa-check imgEnd i13" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level14">14</Link></h1>
          <i className="fa fa-check imgEnd i14" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level15">15</Link></h1>
          <i className="fa fa-check imgEnd i15" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level16">16</Link></h1>
          <i className="fa fa-check imgEnd i16" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level17">17</Link></h1>
          <i className="fa fa-check imgEnd i17" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level18">18</Link></h1>
          <i className="fa fa-check imgEnd i18" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level19">19</Link></h1>
          <i className="fa fa-check imgEnd i19" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level intermediate" onClick={refreshPage}><Link to="/game/level20">20</Link></h1>
          <i className="fa fa-check imgEnd i20" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level21">21</Link></h1>
          <i className="fa fa-check imgEnd i21" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level22">22</Link></h1>
          <i className="fa fa-check imgEnd i22" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level23">23</Link></h1>
          <i className="fa fa-check imgEnd i23" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level24">24</Link></h1>
          <i className="fa fa-check imgEnd i24" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level25">25</Link></h1>
          <i className="fa fa-check imgEnd i25" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level26">26</Link></h1>
          <i className="fa fa-check imgEnd i26" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level27">27</Link></h1>
          <i className="fa fa-check imgEnd i27" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level28">28</Link></h1>
          <i className="fa fa-check imgEnd i28" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level29">29</Link></h1>
          <i className="fa fa-check imgEnd i29" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level advanced" onClick={refreshPage}><Link to="/game/level30">30</Link></h1>
          <i className="fa fa-check imgEnd i30" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level31">31</Link></h1>
          <i className="fa fa-check imgEnd i31" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level32">32</Link></h1>
          <i className="fa fa-check imgEnd i32" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level33">33</Link></h1>
          <i className="fa fa-check imgEnd i33" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level34">34</Link></h1>
          <i className="fa fa-check imgEnd i34" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level35">35</Link></h1>
          <i className="fa fa-check imgEnd i35" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level36">36</Link></h1>
          <i className="fa fa-check imgEnd i36" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level37">37</Link></h1>
          <i className="fa fa-check imgEnd i37" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level38">38</Link></h1>
          <i className="fa fa-check imgEnd i38" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level39">39</Link></h1>
          <i className="fa fa-check imgEnd i39" style={{fontSize: "48px", color: "white"}}></i>
        </div>
        <div className="col-sm-3">
          <h1 className="level expert" onClick={refreshPage}><Link to="/game/level40">40</Link></h1>
          <i className="fa fa-check imgEnd i40" style={{fontSize: "48px", color: "white"}}></i>
        </div>
      </div>
      <button type="button"><Link to="/"style={{color: "black"}}>Назад</Link></button>
      <Outlet />
    </div>
  );
}

export default Turnstile;
