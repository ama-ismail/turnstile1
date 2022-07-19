import React from 'react';
import Field from '../levels/Field';
import $ from 'jquery';
import "../style.css";
import "../levels/field.css";

let value = {greenPos, bluePos, purplePos, orangePos, gray1Pos, gray2Pos, gray3Pos, gray4Pos, green, orange, blue, purple,
  gray1, gray2, gray3, gray4, support1, support2, support3, support4, chip, allow, goal};

export default function Lev40(value) {
  /*
  const g = React.useState(props.green);
  const green = g[0];
  const o = React.useState(props.orange);
  const orange = o[0];
  const b = React.useState(props.blue);
  const blue = b[0];
  const p = React.useState(props.purple);
  const purple = p[0];
  const g1 = React.useState(props.gray1);
  const gray1 = g1[0];
  const g2 = React.useState(props.gray2);
  const gray2 = g2[0];
  const g3 = React.useState(props.gray3);
  const gray3 = g3[0];
  const g4 = React.useState(props.gray4);
  const gray4 = g4[0];
  const s1 = React.useState(props.support1);
  const support1 = s1[0];
  const s2 = React.useState(props.support2);
  const support2 = s2[0];
  const s3 = React.useState(props.support3);
  const support3 = s3[0];
  const s4 = React.useState(props.support4);
  const support4 = s4[0];
  const c = React.useState(props.chip);
  let chip = c[0];
  const gP = React.useState(props.greenPos);
  let greenPos = gP[0];
  const oP = React.useState(props.orangePos);
  let orangePos = oP[0];
  const bP = React.useState(props.bluePos);
  let bluePos = bP[0];
  const pP = React.useState(props.purplePos);
  let purplePos = pP[0];
  const g1P = React.useState(props.gray1Pos);
  let gray1Pos = g1P[0];
  const g2P = React.useState(props.gray2Pos);
  let gray2Pos = g2P[0];
  const g3P = React.useState(props.gray3Pos);
  let gray3Pos = g3P[0];
  const g4P = React.useState(props.gray4Pos);
  let gray4Pos = g4P[0];
  const al = React.useState(props.allow);
  let allow = al[0];
  const gol = React.useState(props.goal);
  let goal = gol[0];
  */
  $(document).ready(function(){
    /*
    const green = props.green;
    const orange = props.orange;
    const blue = props.blue;
    const purple = props.purple;
    const gray1 = props.gray1;
    const gray2 = props.gray2;
    const gray3 = props.gray3;
    const gray4 = props.gray4;
    const support1 = props.support1;
    const support2 = props.support2;
    const support3 = props.support3;
    const support4 = props.support4;
    let chip = props.chip;
    let greenPos = props.greenPos;
    let orangePos = props.orangePos;
    let bluePos = props.bluePos;
    let purplePos = props.purplePos;
    let gray1Pos = props.gray1Pos;
    let gray2Pos = props.gray2Pos;
    let gray3Pos = props.gray3Pos;
    let gray4Pos = props.gray4Pos;
    let allow = props.allow;
    let goal = props.goal;
    */
    let a;
    /*
    const green = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const gray1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const gray2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const support1 = [0, 1, 0, 0];
    const support2 = [1, 1, 0, 0];
    const support3 = [1, 0, 0, 0];
    const support4 = [1, 0, 0, 0];
    const orange = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const blue = [0, 0, 1, 0, 0, 0, 0, 0, 0];
    const purple = [0, 0, 0, 1, 0, 0, 0, 0, 0];
    let chip = 0;
    let greenPos = -1;
    let orangePos = -1;
    let bluePos = -1;
    let purplePos = -1;
    let gray1Pos = -1;
    let gray2Pos = -1;
    let allow = 1;
    let goal = 0;
    let a;
    */
    //clockwise clock2
    //countter clockwise clock1

    function number() {
      for(let i = 0; i < 9; i++){
        $(`.circle${i + 1}`).text("");
      }
      for(let i = 0; i < 9; i++){
        if(blue[i] === 1){
          $(`.circle${i + 1}`).text("1");
        }
        if(purple[i] === 1){
          $(`.circle${i + 1}`).text("2");
        }
        if(orange[i] === 1){
          $(`.circle${i + 1}`).text("3");
        }
        if(green[i] === 1){
          $(`.circle${i + 1}`).text("4");
        }
        if(gray1[i] === 1){
          $(`.circle${i + 1}`).text("5");
        }
        if(gray2[i] === 1){
          $(`.circle${i + 1}`).text("6");
        }
        if(gray3[i] === 1){
          $(`.circle${i + 1}`).text("7");
        }
        if(gray4[i] === 1){
          $(`.circle${i + 1}`).text("8");
        }
      }
    }

    function greenMove() {
      for(let i = 0; i < 9; i++){
        if(green[i] === 0){
          $(`.circle${i + 1}`).removeClass("green");
        } else{
          greenPos = i;
          $(`.circle${i + 1}`).addClass("green");
        }
      }
    }

    function orangeMove() {
      for(let i = 0; i < 9; i++){
        if(orange[i] === 0){
          $(`.circle${i + 1}`).removeClass("orange");
        } else{
          orangePos = i;
          $(`.circle${i + 1}`).addClass("orange");
        }
      }
    }

    function blueMove() {
      for(let i = 0; i < 9; i++){
        if(blue[i] === 0){
          $(`.circle${i + 1}`).removeClass("blue");
        } else{
          bluePos = i;
          $(`.circle${i + 1}`).addClass("blue");
        }
      }
    }

    function purpleMove() {
      for(let i = 0; i < 9; i++){
        if(purple[i] === 0){
          $(`.circle${i + 1}`).removeClass("purple");
        } else{
          purplePos = i;
          $(`.circle${i + 1}`).addClass("purple");
        }
      }
    }

    function gray1Move() {
      for(let i = 0; i < 9; i++){
        if(gray1[i] === 0){
          $(`.circle${i + 1}`).removeClass("gray1");
        } else{
          gray1Pos = i;
          $(`.circle${i + 1}`).addClass("gray1");
        }
      }
    }

    function gray2Move() {
      for(let i = 0; i < 9; i++){
        if(gray2[i] === 0){
          $(`.circle${i + 1}`).removeClass("gray2");
        } else{
          gray2Pos = i;
          $(`.circle${i + 1}`).addClass("gray2");
        }
      }
    }

    function gray3Move() {
      for(let i = 0; i < 9; i++){
        if(gray3[i] === 0){
          $(`.circle${i + 1}`).removeClass("gray3");
        } else{
          gray3Pos = i;
          $(`.circle${i + 1}`).addClass("gray3");
        }
      }
    }

    function gray4Move() {
      for(let i = 0; i < 9; i++){
        if(gray4[i] === 0){
          $(`.circle${i + 1}`).removeClass("gray4");
        } else{
          gray4Pos = i;
          $(`.circle${i + 1}`).addClass("gray4");
        }
      }
    }

    function support1Move() {
      for(let i = 0; i < 4; i++){
        if(support1[i] === 0){
          $(`.turn${i + 1}`).removeClass("support");
        } else{
          $(`.turn${i + 1}`).addClass("support");
        }
      }
    }

    function support1clock1() {
      a = support1[0];
      support1[0] = support1[1];
      support1[1] = support1[2];
      support1[2] = support1[3];
      support1[3] = a;
      support1Move();
    }

    function support1clock2() {
      a = support1[3];
      support1[3] = support1[2];
      support1[2] = support1[1];
      support1[1] = support1[0];
      support1[0] = a;
      support1Move();
    }

    function support2Move() {
      for(let i = 0; i < 4; i++){
        if(support2[i] === 0){
          $(`.turn${i + 5}`).removeClass("support");
        } else{
          $(`.turn${i + 5}`).addClass("support");
        }
      }
    }

    function support2clock1() {
      a = support2[0];
      support2[0] = support2[1];
      support2[1] = support2[2];
      support2[2] = support2[3];
      support2[3] = a;
      support2Move();
    }

    function support2clock2() {
      a = support2[3];
      support2[3] = support2[2];
      support2[2] = support2[1];
      support2[1] = support2[0];
      support2[0] = a;
      support2Move();
    }

    function support3Move() {
      for(let i = 0; i < 4; i++){
        if(support3[i] === 0){
          $(`.turn${i + 9}`).removeClass("support");
        } else{
          $(`.turn${i + 9}`).addClass("support");
        }
      }
    }

    function support3clock1() {
      a = support3[0];
      support3[0] = support3[1];
      support3[1] = support3[2];
      support3[2] = support3[3];
      support3[3] = a;
      support3Move();
    }

    function support3clock2() {
      a = support3[3];
      support3[3] = support3[2];
      support3[2] = support3[1];
      support3[1] = support3[0];
      support3[0] = a;
      support3Move();
    }

    function support4Move() {
      for(let i = 0; i < 4; i++){
        if(support4[i] === 0){
          $(`.turn${i + 13}`).removeClass("support");
        } else{
          $(`.turn${i + 13}`).addClass("support");
        }
      }
    }

    function support4clock1() {
      a = support4[0];
      support4[0] = support4[1];
      support4[1] = support4[2];
      support4[2] = support4[3];
      support4[3] = a;
      support4Move();
    }

    function support4clock2() {
      a = support4[3];
      support4[3] = support4[2];
      support4[2] = support4[1];
      support4[1] = support4[0];
      support4[0] = a;
      support4Move();
    }

    function win() {
      if(greenPos === -1 || greenPos === 6){
        goal++;
      }
      if(orangePos === -1 || orangePos === 8){
        goal++;
      }
      if(bluePos === -1 || bluePos === 0){
        goal++;
      }
      if(purplePos === -1 || purplePos === 2){
        goal++;
      }
      if(goal === 4){
        window.open("/game/Win", "_self");
      }
      goal = 0;
    }

    function correctMove(){
      if(support1[1] === 1 && support2[3] === 1){
        allow = 0;
      }
      if(support3[1] === 1 && support4[3] === 1){
        allow = 0;
      }
      if(support1[2] === 1 && support3[0] === 1){
        allow = 0;
      }
      if(support2[2] === 1 && support4[0] === 1){
        allow = 0;
      }
    }

    function correctMove2(num, way){
      if((num === 0 && way === "R" && support1[0] === 1) || (num === 1 && way === "D" && support1[1] === 1)
       || (num === 4 && way === "L" && support1[2] === 1) || (num === 3 && way === "U" && support1[3] === 1)){
        if(support1[0] === 1 && (gray1[1] === 1 || gray2[1] === 1 || gray3[1] === 1 || gray4[1] === 1 ||
          green[1] === 1 || orange[1] === 1 || blue[1] === 1 || purple[1] === 1) && num !== 1){
          allow = 0;
        } else if(support1[1] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support1[2] === 1 && (gray1[3] === 1 || gray2[3] === 1 || gray3[3] === 1 || gray4[3] === 1 ||
          green[3] === 1 || orange[3] === 1 || blue[3] === 1 || purple[3] === 1) && num !== 3){
          allow = 0;
        } else if(support1[3] === 1 && (gray1[0] === 1 || gray2[0] === 1 || gray3[0] === 1 || gray4[0] === 1 ||
          green[0] === 1 || orange[0] === 1 || blue[0] === 1 || purple[0] === 1) && num !== 0){
          allow = 0;
        }
      }
      if((num === 0 && way === "D" && support1[3] === 1) || (num === 1 && way === "L" && support1[0] === 1)
      || (num === 4 && way === "U" && support1[1] === 1) || (num === 3 && way === "R" && support1[2] === 1)){
        if(support1[1] === 1 && (gray1[1] === 1 || gray2[1] === 1 || gray3[1] === 1 || gray4[1] === 1 ||
          green[1] === 1 || orange[1] === 1 || blue[1] === 1 || purple[1] === 1) && num !== 1){
          allow = 0;
        } else if(support1[2] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support1[3] === 1 && (gray1[3] === 1 || gray2[3] === 1 || gray3[3] === 1 || gray4[3] === 1 ||
          green[3] === 1 || orange[3] === 1 || blue[3] === 1 || purple[3] === 1) && num !== 3){
          allow = 0;
        } else if(support1[0] === 1 && (gray1[0] === 1 || gray2[0] === 1 || gray3[0] === 1 || gray4[0] === 1 ||
          green[0] === 1 || orange[0] === 1 || blue[0] === 1 || purple[0] === 1) && num !== 0){
          allow = 0;
        }
      }
      if((num === 1 && way === "R" && support2[0] === 1) || (num === 2 && way === "D" && support2[1] === 1)
      || (num === 5 && way === "L" && support2[2] === 1) || (num === 4 && way === "U" && support2[3] === 1)){
        if(support2[0] === 1 && (gray1[2] === 1 || gray2[2] === 1 || gray3[2] === 1 || gray4[2] === 1 ||
          green[2] === 1 || orange[2] === 1 || blue[2] === 1 || purple[2] === 1) && num !== 2){
          allow = 0;
        } else if(support2[1] === 1 && (gray1[5] === 1 || gray2[5] === 1 || gray3[5] === 1 || gray4[5] === 1 ||
          green[5] === 1 || orange[5] === 1 || blue[5] === 1 || purple[5] === 1) && num !== 5){
          allow = 0;
        } else if(support2[2] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support2[3] === 1 && (gray1[1] === 1 || gray2[1] === 1 || gray3[1] === 1 || gray4[1] === 1 ||
          green[1] === 1 || orange[1] === 1 || blue[1] === 1 || purple[1] === 1) && num !== 1){
          allow = 0;
        }
      }
      if((num === 1 && way === "D" && support2[3] === 1) || (num === 2 && way === "L" && support2[0] === 1)
      || (num === 5 && way === "U" && support2[1] === 1) || (num === 4 && way === "R" && support2[2] === 1)){
        if(support2[1] === 1 && (gray1[2] === 1 || gray2[2] === 1 || gray3[2] === 1 || gray4[2] === 1 ||
          green[2] === 1 || orange[2] === 1 || blue[2] === 1 || purple[2] === 1) && num !== 2){
          allow = 0;
        } else if(support2[2] === 1 && (gray1[5] === 1 || gray2[5] === 1 || gray3[5] === 1 || gray4[5] === 1 ||
          green[5] === 1 || orange[5] === 1 || blue[5] === 1 || purple[5] === 1) && num !== 5){
          allow = 0;
        } else if(support2[3] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support2[0] === 1 && (gray1[1] === 1 || gray2[1] === 1 || gray3[1] === 1 || gray4[1] === 1 ||
          green[1] === 1 || orange[1] === 1 || blue[1] === 1 || purple[1] === 1) && num !== 1){
          allow = 0;
        }
      }
      if((num === 3 && way === "R" && support3[0] === 1) || (num === 4 && way === "D" && support3[1] === 1)
      || (num === 7 && way === "L" && support3[2] === 1) || (num === 6 && way === "U" && support3[3] === 1)){
        if(support3[0] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support3[1] === 1 && (gray1[7] === 1 || gray2[7] === 1 || gray3[7] === 1 || gray4[7] === 1 ||
          green[7] === 1 || orange[7] === 1 || blue[7] === 1 || purple[7] === 1) && num !== 7){
          allow = 0;
        } else if(support3[2] === 1 && (gray1[6] === 1 || gray2[6] === 1 || gray3[6] === 1 || gray4[6] === 1 ||
          green[6] === 1 || orange[6] === 1 || blue[6] === 1 || purple[6] === 1) && num !== 6){
          allow = 0;
        } else if(support3[3] === 1 && (gray1[3] === 1 || gray2[3] === 1 || gray3[3] === 1 || gray4[3] === 1 ||
          green[3] === 1 || orange[3] === 1 || blue[3] === 1 || purple[3] === 1) && num !== 3){
          allow = 0;
        }
      }
      if((num === 3 && way === "D" && support3[3] === 1) || (num === 4 && way === "L" && support3[0] === 1)
      || (num === 7 && way === "U" && support3[1] === 1) || (num === 6 && way === "R" && support3[2] === 1)){
        if(support3[1] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        } else if(support3[2] === 1 && (gray1[7] === 1 || gray2[7] === 1 || gray3[7] === 1 || gray4[7] === 1 ||
          green[7] === 1 || orange[7] === 1 || blue[7] === 1 || purple[7] === 1) && num !== 7){
          allow = 0;
        } else if(support3[3] === 1 && (gray1[6] === 1 || gray2[6] === 1 || gray3[6] === 1 || gray4[6] === 1 ||
          green[6] === 1 || orange[6] === 1 || blue[6] === 1 || purple[6] === 1) && num !== 6){
          allow = 0;
        } else if(support3[0] === 1 && (gray1[3] === 1 || gray2[3] === 1 || gray3[3] === 1 || gray4[3] === 1 ||
          green[3] === 1 || orange[3] === 1 || blue[3] === 1 || purple[3] === 1) && num !== 3){
          allow = 0;
        }
      }
      if((num === 4 && way === "R" && support4[0] === 1) || (num === 5 && way === "D" && support4[1] === 1)
      || (num === 8 && way === "L" && support4[2] === 1) || (num === 7 && way === "U" && support4[3] === 1)){
        if(support4[0] === 1 && (gray1[5] === 1 || gray2[5] === 1 || gray3[5] === 1 || gray4[5] === 1 ||
          green[5] === 1 || orange[5] === 1 || blue[5] === 1 || purple[5] === 1) && num !== 5){
          allow = 0;
        } else if(support4[1] === 1 && (gray1[8] === 1 || gray2[8] === 1 || gray3[8] === 1 || gray4[8] === 1 ||
          green[8] === 1 || orange[8] === 1 || blue[8] === 1 || purple[8] === 1) && num !== 8){
          allow = 0;
        } else if(support4[2] === 1 && (gray1[7] === 1 || gray2[7] === 1 || gray3[7] === 1 || gray4[7] === 1 ||
          green[7] === 1 || orange[7] === 1 || blue[7] === 1 || purple[7] === 1) && num !== 7){
          allow = 0;
        } else if(support4[3] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        }
      }
      if((num === 4 && way === "D" && support4[3] === 1) || (num === 5 && way === "L" && support4[0] === 1)
      || (num === 8 && way === "U" && support4[1] === 1) || (num === 7 && way === "R" && support4[2] === 1)){
        if(support4[1] === 1 && (gray1[5] === 1 || gray2[5] === 1 || gray3[5] === 1 || gray4[5] === 1 ||
          green[5] === 1 || orange[5] === 1 || blue[5] === 1 || purple[5] === 1) && num !== 5){
          allow = 0;
        } else if(support4[2] === 1 && (gray1[8] === 1 || gray2[8] === 1 || gray3[8] === 1 || gray4[8] === 1 ||
          green[8] === 1 || orange[8] === 1 || blue[8] === 1 || purple[8] === 1) && num !== 8){
          allow = 0;
        } else if(support4[3] === 1 && (gray1[7] === 1 || gray2[7] === 1 || gray3[7] === 1 || gray4[7] === 1 ||
          green[7] === 1 || orange[7] === 1 || blue[7] === 1 || purple[7] === 1) && num !== 7){
          allow = 0;
        } else if(support4[0] === 1 && (gray1[4] === 1 || gray2[4] === 1 || gray3[4] === 1 || gray4[4] === 1 ||
          green[4] === 1 || orange[4] === 1 || blue[4] === 1 || purple[4] === 1) && num !== 4){
          allow = 0;
        }
      }
    }

    function turnMoveLeft(num){
      correctMove2(num, "L");
      if(allow === 1){
        if(num === 1 && support1[0] === 1){
          support1clock1();
          correctMove();
          if(allow === 0){
            support1clock2();
          }
        } else if(num === 4 && support1[2] === 1){
          support1clock2();
          correctMove();
          if(allow === 0){
            support1clock1();
          }
        }
        if(num === 2 && support2[0] === 1){
          support2clock1();
          correctMove();
          if(allow === 0){
            support2clock2();
          }
        } else if(num === 5 && support2[2] === 1){
          support2clock2();
          correctMove();
          if(allow === 0){
            support2clock1();
          }
        }
        if(num === 4 && support3[0] === 1){
          support3clock1();
          correctMove();
          if(allow === 0){
            support3clock2();
          }
        } else if(num === 7 && support3[2] === 1){
          support3clock2();
          correctMove();
          if(allow === 0){
            support3clock1();
          }
        }
        if(num === 5 && support4[0] === 1){
          support4clock1();
          correctMove();
          if(allow === 0){
            support4clock2();
          }
        } else if(num === 8 && support4[2] === 1){
          support4clock2();
          correctMove();
          if(allow === 0){
            support4clock1();
          }
        }
      }
    }

    function turnMoveUp(num) {
      correctMove2(num, "U");
      if(allow === 1){
        if(num === 4 && support1[1] === 1){
          support1clock1();
          correctMove();
          if(allow === 0){
            support1clock2();
          }
        } else if(num === 3 && support1[3] === 1){
          support1clock2();
          correctMove();
          if(allow === 0){
            support1clock1();
          }
        }
        if(num === 5 && support2[1] === 1){
          support2clock1();
          correctMove();
          if(allow === 0){
            support2clock2();
          }
        } else if(num === 4 && support2[3] === 1){
          support2clock2();
          correctMove();
          if(allow === 0){
            support2clock1();
          }
        }
        if(num === 7 && support3[1] === 1){
          support3clock1();
          correctMove();
          if(allow === 0){
            support3clock2();
          }
        } else if(num === 6 && support3[3] === 1){
          support3clock2();
          correctMove();
          if(allow === 0){
            support3clock1();
          }
        }
        if(num === 8 && support4[1] === 1){
          support4clock1();
          correctMove();
          if(allow === 0){
            support4clock2();
          }
        } else if(num === 7 && support4[3] === 1){
          support4clock2();
          correctMove();
          if(allow === 0){
            support4clock1();
          }
        }
      }
    }

    function turnMoveRight(num) {
      correctMove2(num, "R");
      if(allow === 1){
        if(num === 3 && support1[2] === 1){
          support1clock1();
          correctMove();
          if(allow === 0){
            support1clock2();
          }
        } else if(num === 0 && support1[0] === 1){
          support1clock2();
          correctMove();
          if(allow === 0){
            support1clock1();
          }
        }
        if(num === 4 && support2[2] === 1){
          support2clock1();
          correctMove();
          if(allow === 0){
            support2clock2();
          }
        } else if(num === 1 && support2[0] === 1){
          support2clock2();
          correctMove();
          if(allow === 0){
            support2clock1();
          }
        }
        if(num === 6 && support3[2] === 1){
          support3clock1();
          correctMove();
          if(allow === 0){
            support3clock2();
          }
        } else if(num === 3 && support3[0] === 1){
          support3clock2();
          correctMove();
          if(allow === 0){
            support3clock1();
          }
        }
        if(num === 7 && support4[2] === 1){
          support4clock1();
          correctMove();
          if(allow === 0){
            support4clock2();
          }
        } else if(num === 4 && support4[0] === 1){
          support4clock2();
          correctMove();
          if(allow === 0){
            support4clock1();
          }
        }
      }
    }

    function turnMoveDown(num) {
      correctMove2(num, "D");
      if(allow === 1){
        if(num === 0 && support1[3] === 1){
          support1clock1();
          correctMove();
          if(allow === 0){
            support1clock2();
          }
        } else if(num === 1 && support1[1] === 1){
          support1clock2();
          correctMove();
          if(allow === 0){
            support1clock1();
          }
        }
        if(num === 1 && support2[3] === 1){
          support2clock1();
          correctMove();
          if(allow === 0){
            support2clock2();
          }
        } else if(num === 2 && support2[1] === 1){
          support2clock2();
          correctMove();
          if(allow === 0){
            support2clock1();
          }
        }
        if(num === 3 && support3[3] === 1){
          support3clock1();
          correctMove();
          if(allow === 0){
            support3clock2();
          }
        } else if(num === 4 && support3[1] === 1){
          support3clock2();
          correctMove();
          if(allow === 0){
            support3clock1();
          }
        }
        if(num === 4 && support4[3] === 1){
          support4clock1();
          correctMove();
          if(allow === 0){
            support4clock2();
          }
        } else if(num === 5 && support4[1] === 1){
          support4clock2();
          correctMove();
          if(allow === 0){
            support4clock1();
          }
        }
      }
    }

    $(`.support1`).addClass("support");
    $(`.support2`).addClass("support");
    $(`.support3`).addClass("support");
    $(`.support4`).addClass("support");
    number();
    greenMove();
    orangeMove();
    blueMove();
    purpleMove();
    gray1Move();
    gray2Move();
    gray3Move();
    gray4Move();
    support1Move();
    support2Move();
    support3Move();
    support4Move();
    $(document).keyup(function(e){
      if(e.key === "1" || e.keyCode === 97){
        chip = 1;
      } else if(e.key === "2" || e.keyCode === 98){
        chip = 2;
      } else if(e.key === "3" || e.keyCode === 99){
        chip = 3;
      } else if(e.key === "4" || e.keyCode === 100){
        chip = 4;
      } else if(e.key === "5" || e.keyCode === 101){
        chip = 5;
      } else if(e.key === "6" || e.keyCode === 102){
        chip = 6;
      } else if(e.key === "7" || e.keyCode === 103){
        chip = 7;
      } else if(e.key === "8" || e.keyCode === 104){
        chip = 8;
      }
      if(chip === 1 && bluePos !== -1){
        if(purple[bluePos - 1] === 0 && orange[bluePos - 1] === 0 && green[bluePos - 1] === 0
          && gray1[bluePos - 1] === 0 && gray2[bluePos - 1] === 0 && gray3[bluePos - 1] === 0 && gray4[bluePos - 1] === 0
          && bluePos % 3 !== 0 && (e.key === "ArrowLeft" || e.keyCode === 37)){
          turnMoveLeft(bluePos);
          if(allow === 1){
            blue[bluePos] = 0;
            $(`.circle${bluePos + 1}`).removeClass("blue");
            bluePos--;
            blue[bluePos] = 1;
            $(`.circle${bluePos + 1}`).addClass("blue");
            win();
          } else{
            allow = 1;
          }
        } else if(purple[bluePos - 3] === 0 && orange[bluePos - 3] === 0 && green[bluePos - 3] === 0
          && gray1[bluePos - 3] === 0 && gray2[bluePos - 3] === 0 && gray3[bluePos - 3] === 0 && gray4[bluePos - 3] === 0
          && bluePos >= 3 && (e.key === "ArrowUp" || e.keyCode === 38)){
          turnMoveUp(bluePos);
          if(allow === 1){
            blue[bluePos] = 0;
            $(`.circle${bluePos + 1}`).removeClass("blue");
            bluePos-=3;
            blue[bluePos] = 1;
            $(`.circle${bluePos + 1}`).addClass("blue");
            win();
          } else{
            allow = 1;
          }
        } else if(purple[bluePos + 1] === 0 && orange[bluePos + 1] === 0 && green[bluePos + 1] === 0
          && gray1[bluePos + 1] === 0 && gray2[bluePos + 1] === 0 && gray3[bluePos + 1] === 0 && gray4[bluePos + 1] === 0
          && bluePos % 3 !== 2 && (e.key === "ArrowRight" || e.keyCode === 39)){
          turnMoveRight(bluePos);
          if(allow === 1){
            blue[bluePos] = 0;
            $(`.circle${bluePos + 1}`).removeClass("blue");
            bluePos++;
            blue[bluePos] = 1;
            $(`.circle${bluePos + 1}`).addClass("blue");
            win();
          } else{
            allow = 1;
          }
        } else if(purple[bluePos + 3] === 0 && orange[bluePos + 3] === 0 && green[bluePos + 3] === 0
          && gray1[bluePos + 3] === 0 && gray2[bluePos + 3] === 0 && gray3[bluePos + 3] === 0 && gray4[bluePos + 3] === 0
          && bluePos <= 5 && (e.key === "ArrowDown" || e.keyCode === 40)){
          turnMoveDown(bluePos);
          if(allow === 1){
            blue[bluePos] = 0;
            $(`.circle${bluePos + 1}`).removeClass("blue");
            bluePos+=3;
            blue[bluePos] = 1;
            $(`.circle${bluePos + 1}`).addClass("blue");
            win();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 2 && purplePos !== -1){
        if(blue[purplePos - 1] === 0 && orange[purplePos - 1] === 0 && green[purplePos - 1] === 0
          && gray1[purplePos - 1] === 0 && gray2[purplePos - 1] === 0 && gray3[purplePos - 1] === 0 && gray4[purplePos - 1] === 0
          && purplePos % 3 !== 0 && (e.key === "ArrowLeft" || e.keyCode === 37)){
          turnMoveLeft(purplePos);
          if(allow === 1){
            purple[purplePos] = 0;
            $(`.circle${purplePos + 1}`).removeClass("purple");
            purplePos--;
            purple[purplePos] = 1;
            $(`.circle${purplePos + 1}`).addClass("purple");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[purplePos - 3] === 0 && orange[purplePos - 3] === 0 && green[purplePos - 3] === 0
          && gray1[purplePos - 3] === 0 && gray2[purplePos - 3] === 0 && gray3[purplePos - 3] === 0 && gray4[purplePos - 3] === 0
          && purplePos >= 3 && (e.key === "ArrowUp" || e.keyCode === 38)){
          turnMoveUp(purplePos);
          if(allow === 1){
            purple[purplePos] = 0;
            $(`.circle${purplePos + 1}`).removeClass("purple");
            purplePos-=3;
            purple[purplePos] = 1;
            $(`.circle${purplePos + 1}`).addClass("purple");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[purplePos + 1] === 0 && orange[purplePos + 1] === 0 && green[purplePos + 1] === 0
          && gray1[purplePos + 1] === 0 && gray2[purplePos + 1] === 0 && gray3[purplePos + 1] === 0 && gray4[purplePos + 1] === 0
          && purplePos % 3 !== 2 && (e.key === "ArrowRight" || e.keyCode === 39)){
          turnMoveRight(purplePos);
          if(allow === 1){
            purple[purplePos] = 0;
            $(`.circle${purplePos + 1}`).removeClass("purple");
            purplePos++;
            purple[purplePos] = 1;
            $(`.circle${purplePos + 1}`).addClass("purple");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[purplePos + 3] === 0 && orange[purplePos + 3] === 0 && green[purplePos + 3] === 0
          && gray1[purplePos + 3] === 0 && gray2[purplePos + 3] === 0 && gray3[purplePos + 3] === 0 && gray4[purplePos + 3] === 0
          && purplePos <= 5 && (e.key === "ArrowDown" || e.keyCode === 40)){
          turnMoveDown(purplePos);
          if(allow === 1){
            purple[purplePos] = 0;
            $(`.circle${purplePos + 1}`).removeClass("purple");
            purplePos+=3;
            purple[purplePos] = 1;
            $(`.circle${purplePos + 1}`).addClass("purple");
            win();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 3 && orangePos !== -1){
        if(blue[orangePos - 1] === 0 && purple[orangePos - 1] === 0 && green[orangePos - 1] === 0
          && gray1[orangePos - 1] === 0 && gray2[orangePos - 1] === 0 && gray3[orangePos - 1] === 0 && gray4[orangePos - 1] === 0
          && orangePos % 3 !== 0 && (e.key === "ArrowLeft" || e.keyCode === 37)){
          turnMoveLeft(orangePos);
          if(allow === 1){
            orange[orangePos] = 0;
            $(`.circle${orangePos + 1}`).removeClass("orange");
            orangePos--;
            orange[orangePos] = 1;
            $(`.circle${orangePos + 1}`).addClass("orange");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[orangePos - 3] === 0 && purple[orangePos - 3] === 0 && green[orangePos - 3] === 0
          && gray1[orangePos - 3] === 0 && gray2[orangePos - 3] === 0 && gray3[orangePos - 3] === 0 && gray4[orangePos - 3] === 0
          && orangePos >= 3 && (e.key === "ArrowUp" || e.keyCode === 38)){
          turnMoveUp(orangePos);
          if(allow === 1){
            orange[orangePos] = 0;
            $(`.circle${orangePos + 1}`).removeClass("orange");
            orangePos-=3;
            orange[orangePos] = 1;
            $(`.circle${orangePos + 1}`).addClass("orange");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[orangePos + 1] === 0 && purple[orangePos + 1] === 0 && green[orangePos + 1] === 0
          && gray1[orangePos + 1] === 0 && gray2[orangePos + 1] === 0 && gray3[orangePos + 1] === 0 && gray4[orangePos + 1] === 0
          && orangePos % 3 !== 2 && (e.key === "ArrowRight" || e.keyCode === 39)){
          turnMoveRight(orangePos);
          if(allow === 1){
            orange[orangePos] = 0;
            $(`.circle${orangePos + 1}`).removeClass("orange");
            orangePos++;
            orange[orangePos] = 1;
            $(`.circle${orangePos + 1}`).addClass("orange");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[orangePos + 3] === 0 && purple[orangePos + 3] === 0 && green[orangePos + 3] === 0
          && gray1[orangePos + 3] === 0 && gray2[orangePos + 3] === 0 && gray3[orangePos + 3] === 0 && gray4[orangePos + 3] === 0
          && orangePos <= 5 && (e.key === "ArrowDown" || e.keyCode === 40)){
          turnMoveDown(orangePos);
          if(allow === 1){
            orange[orangePos] = 0;
            $(`.circle${orangePos + 1}`).removeClass("orange");
            orangePos+=3;
            orange[orangePos] = 1;
            $(`.circle${orangePos + 1}`).addClass("orange");
            win();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 4 && greenPos !== -1){
        if(blue[greenPos - 1] === 0 && purple[greenPos - 1] === 0 && orange[greenPos - 1] === 0
          && gray1[greenPos - 1] === 0 && gray2[greenPos - 1] === 0 && gray3[greenPos - 1] === 0 && gray4[greenPos - 1] === 0
          && greenPos % 3 !== 0 && (e.key === "ArrowLeft" || e.keyCode === 37)){
          turnMoveLeft(greenPos);
          if(allow === 1){
            green[greenPos] = 0;
            $(`.circle${greenPos + 1}`).removeClass("green");
            greenPos--;
            green[greenPos] = 1;
            $(`.circle${greenPos + 1}`).addClass("green");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[greenPos - 3] === 0 && purple[greenPos - 3] === 0 && orange[greenPos - 3] === 0
          && gray1[greenPos - 3] === 0 && gray2[greenPos - 3] === 0 && gray3[greenPos - 3] === 0 && gray4[greenPos - 3] === 0
          && greenPos >= 3 && (e.key === "ArrowUp" || e.keyCode === 38)){
          turnMoveUp(greenPos);
          if(allow === 1){
            green[greenPos] = 0;
            $(`.circle${greenPos + 1}`).removeClass("green");
            greenPos-=3;
            green[greenPos] = 1;
            $(`.circle${greenPos + 1}`).addClass("green");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[greenPos + 1] === 0 && purple[greenPos + 1] === 0 && orange[greenPos + 1] === 0
          && gray1[greenPos + 1] === 0 && gray2[greenPos + 1] === 0 && gray3[greenPos + 1] === 0 && gray4[greenPos + 1] === 0
          && greenPos % 3 !== 2 && (e.key === "ArrowRight" || e.keyCode === 39)){
          turnMoveRight(greenPos);
          if(allow === 1){
            green[greenPos] = 0;
            $(`.circle${greenPos + 1}`).removeClass("green");
            greenPos++;
            green[greenPos] = 1;
            $(`.circle${greenPos + 1}`).addClass("green");
            win();
          } else{
            allow = 1;
          }
        } else if(blue[greenPos + 3] === 0 && purple[greenPos + 3] === 0 && orange[greenPos + 3] === 0
          && gray1[greenPos + 3] === 0 && gray2[greenPos + 3] === 0 && gray3[greenPos + 3] === 0 && gray4[greenPos + 3] === 0
          && greenPos <= 5 && (e.key === "ArrowDown" || e.keyCode === 40)){
          turnMoveDown(greenPos);
          if(allow === 1){
            green[greenPos] = 0;
            $(`.circle${greenPos + 1}`).removeClass("green");
            greenPos+=3;
            green[greenPos] = 1;
            $(`.circle${greenPos + 1}`).addClass("green");
            win();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 5 && gray1Pos !== -1){
        if(blue[gray1Pos - 1] === 0 && purple[gray1Pos - 1] === 0 && orange[gray1Pos - 1] === 0
          && green[gray1Pos - 1] === 0 && gray2[gray1Pos - 1] === 0 && gray3[gray1Pos - 1] === 0 && gray4[gray1Pos - 1] === 0
          && (e.key === "ArrowLeft" || e.keyCode === 37) && gray1Pos % 3 !== 0){
          turnMoveLeft(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos--;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
            //gray1Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray1Pos - 3] === 0 && purple[gray1Pos - 3] === 0 && orange[gray1Pos - 3] === 0
          && green[gray1Pos - 3] === 0 && gray2[gray1Pos - 3] === 0 && gray3[gray1Pos - 3] === 0 && gray4[gray1Pos - 3] === 0
          && (e.key === "ArrowUp" || e.keyCode === 38) && gray1Pos >= 3){
          turnMoveUp(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos-=3;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
            //gray1Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray1Pos + 1] === 0 && purple[gray1Pos + 1] === 0 && orange[gray1Pos + 1] === 0
          && green[gray1Pos + 1] === 0 && gray2[gray1Pos + 1] === 0 && gray3[gray1Pos + 1] === 0 && gray4[gray1Pos + 1] === 0
          && (e.key === "ArrowRight" || e.keyCode === 39) && gray1Pos % 3 !== 2){
          turnMoveRight(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos++;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
            //gray1Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray1Pos + 3] === 0 && purple[gray1Pos + 3] === 0 && orange[gray1Pos + 3] === 0
          && green[gray1Pos + 3] === 0 && gray2[gray1Pos + 3] === 0 && gray3[gray1Pos + 3] === 0 && gray4[gray1Pos + 3] === 0
          && (e.key === "ArrowDown" || e.keyCode === 40) && gray1Pos <= 5){
          turnMoveDown(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos+=3;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
            //gray1Move();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 6 && gray2Pos !== -1){
        if(blue[gray2Pos - 1] === 0 && purple[gray2Pos - 1] === 0 && orange[gray2Pos - 1] === 0
          && green[gray2Pos - 1] === 0 && gray1[gray2Pos - 1] === 0 && gray3[gray2Pos - 1] === 0 && gray4[gray2Pos - 1] === 0
          && (e.key === "ArrowLeft" || e.keyCode === 37) && gray2Pos % 3 !== 0){
          turnMoveLeft(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos--;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
            //gray2Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray2Pos - 3] === 0 && purple[gray2Pos - 3] === 0 && orange[gray2Pos - 3] === 0
          && green[gray2Pos - 3] === 0 && gray1[gray2Pos - 3] === 0 && gray3[gray2Pos - 3] === 0 && gray4[gray2Pos - 3] === 0
          && (e.key === "ArrowUp" || e.keyCode === 38) && gray2Pos >= 3){
          turnMoveUp(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos-=3;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
            //gray2Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray2Pos + 1] === 0 && purple[gray2Pos + 1] === 0 && orange[gray2Pos + 1] === 0
          && green[gray2Pos + 1] === 0 && gray1[gray2Pos + 1] === 0 && gray3[gray2Pos + 1] === 0 && gray4[gray2Pos + 1] === 0
          && (e.key === "ArrowRight" || e.keyCode === 39) && gray2Pos % 3 !== 2){
          turnMoveRight(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos++;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
            //gray2Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray2Pos + 3] === 0 && purple[gray2Pos + 3] === 0 && orange[gray2Pos + 3] === 0
          && green[gray2Pos + 3] === 0 && gray1[gray2Pos + 3] === 0 && gray3[gray2Pos + 3] === 0 && gray4[gray2Pos + 3] === 0
          && (e.key === "ArrowDown" || e.keyCode === 40) && gray2Pos <= 5){
          turnMoveDown(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos+=3;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
            //gray2Move();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 7 && gray3Pos !== -1){
        if(blue[gray3Pos - 1] === 0 && purple[gray3Pos - 1] === 0 && orange[gray3Pos - 1] === 0
          && green[gray3Pos - 1] === 0 && gray1[gray3Pos - 1] === 0 && gray2[gray3Pos - 1] === 0 && gray4[gray3Pos - 1] === 0
          && (e.key === "ArrowLeft" || e.keyCode === 37) && gray3Pos % 3 !== 0){
          turnMoveLeft(gray3Pos);
          if(allow === 1){
            gray3[gray3Pos] = 0;
            $(`.circle${gray3Pos + 1}`).removeClass("gray3");
            gray3Pos--;
            gray3[gray3Pos] = 1;
            $(`.circle${gray3Pos + 1}`).addClass("gray3");
            //gray3Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray3Pos - 3] === 0 && purple[gray3Pos - 3] === 0 && orange[gray3Pos - 3] === 0
          && green[gray3Pos - 3] === 0 && gray1[gray3Pos - 3] === 0 && gray2[gray3Pos - 3] === 0 && gray4[gray3Pos - 3] === 0
          && (e.key === "ArrowUp" || e.keyCode === 38) && gray3Pos >= 3){
          turnMoveUp(gray3Pos);
          if(allow === 1){
            gray3[gray3Pos] = 0;
            $(`.circle${gray3Pos + 1}`).removeClass("gray3");
            gray3Pos-=3;
            gray3[gray3Pos] = 1;
            $(`.circle${gray3Pos + 1}`).addClass("gray3");
            //gray3Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray3Pos + 1] === 0 && purple[gray3Pos + 1] === 0 && orange[gray3Pos + 1] === 0
          && green[gray3Pos + 1] === 0 && gray1[gray3Pos + 1] === 0 && gray2[gray3Pos + 1] === 0 && gray4[gray3Pos + 1] === 0
          && (e.key === "ArrowRight" || e.keyCode === 39) && gray3Pos % 3 !== 2){
          turnMoveRight(gray3Pos);
          if(allow === 1){
            gray3[gray3Pos] = 0;
            $(`.circle${gray3Pos + 1}`).removeClass("gray3");
            gray3Pos++;
            gray3[gray3Pos] = 1;
            $(`.circle${gray3Pos + 1}`).addClass("gray3");
            //gray3Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray3Pos + 3] === 0 && purple[gray3Pos + 3] === 0 && orange[gray3Pos + 3] === 0
          && green[gray3Pos + 3] === 0 && gray1[gray3Pos + 3] === 0 && gray2[gray3Pos + 3] === 0 && gray4[gray3Pos + 3] === 0
          && (e.key === "ArrowDown" || e.keyCode === 40) && gray3Pos <= 5){
          turnMoveDown(gray3Pos);
          if(allow === 1){
            gray3[gray3Pos] = 0;
            $(`.circle${gray3Pos + 1}`).removeClass("gray3");
            gray3Pos+=3;
            gray3[gray3Pos] = 1;
            $(`.circle${gray3Pos + 1}`).addClass("gray3");
            //gray3Move();
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 8 && gray4Pos !== -1){
        if(blue[gray4Pos - 1] === 0 && purple[gray4Pos - 1] === 0 && orange[gray4Pos - 1] === 0
          && green[gray4Pos - 1] === 0 && gray1[gray4Pos - 1] === 0 && gray2[gray4Pos - 1] === 0 && gray3[gray4Pos - 1] === 0
          && (e.key === "ArrowLeft" || e.keyCode === 37) && gray4Pos % 3 !== 0){
          turnMoveLeft(gray4Pos);
          if(allow === 1){
            gray4[gray4Pos] = 0;
            $(`.circle${gray4Pos + 1}`).removeClass("gray4");
            gray4Pos--;
            gray4[gray4Pos] = 1;
            $(`.circle${gray4Pos + 1}`).addClass("gray4");
            //gray4Move();
            /*
            $(`.circle${gray4Pos + 1}`).removeClass("gray4");
            gray4Pos--;
            $(`.circle${gray4Pos + 1}`).addClass("gray4");*/
          } else{
            allow = 1;
          }
        } else if(blue[gray4Pos - 3] === 0 && purple[gray4Pos - 3] === 0 && orange[gray4Pos - 3] === 0
          && green[gray4Pos - 3] === 0 && gray1[gray4Pos - 3] === 0 && gray2[gray4Pos - 3] === 0 && gray3[gray4Pos - 3] === 0
          && (e.key === "ArrowUp" || e.keyCode === 38) && gray4Pos >= 3){
          turnMoveUp(gray4Pos);
          if(allow === 1){
            gray4[gray4Pos] = 0;
            $(`.circle${gray4Pos + 1}`).removeClass("gray4");
            gray4Pos-=3;
            gray4[gray4Pos] = 1;
            $(`.circle${gray4Pos + 1}`).addClass("gray4");
            //gray4Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray4Pos + 1] === 0 && purple[gray4Pos + 1] === 0 && orange[gray4Pos + 1] === 0
          && green[gray4Pos + 1] === 0 && gray1[gray4Pos + 1] === 0 && gray2[gray4Pos + 1] === 0 && gray3[gray4Pos + 1] === 0
          && (e.key === "ArrowRight" || e.keyCode === 39) && gray4Pos % 3 !== 2){
          turnMoveRight(gray4Pos);
          if(allow === 1){
            gray4[gray4Pos] = 0;
            $(`.circle${gray4Pos + 1}`).removeClass("gray4");
            gray4Pos++;
            gray4[gray4Pos] = 1;
            $(`.circle${gray4Pos + 1}`).addClass("gray4");
            //gray4Move();
          } else{
            allow = 1;
          }
        } else if(blue[gray4Pos + 3] === 0 && purple[gray4Pos + 3] === 0 && orange[gray4Pos + 3] === 0
          && green[gray4Pos + 3] === 0 && gray1[gray4Pos + 3] === 0 && gray2[gray4Pos + 3] === 0 && gray3[gray4Pos + 3] === 0
          && (e.key === "ArrowDown" || e.keyCode === 40) && gray4Pos <= 5){
          turnMoveDown(gray4Pos);
          if(allow === 1){
            gray4[gray4Pos] = 0;
            $(`.circle${gray4Pos + 1}`).removeClass("gray4");
            gray4Pos+=3;
            gray4[gray4Pos] = 1;
            $(`.circle${gray4Pos + 1}`).addClass("gray4");
            //gray4Move();
          } else{
            allow = 1;
          }
        }
      }
      number();
    });
  });
  return (
    <div>
      <Field />
    </div>
  );
}
