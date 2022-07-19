import React from 'react';
import Field from './Field';
import $ from 'jquery';
import "../style.css";
import "./field.css";

export default function L1({chip, green, greenPos, gray1, gray1Pos,
  gray2, gray2Pos, support1, support2, support3, support4, allow, a}) {
  $(document).ready(function(){
    /*
    let chip = 0;
    const green = [0, 0, 1, 0, 0, 0, 0, 0, 0];
    let greenPos;
    const gray1 = [0, 0, 0, 1, 0, 0, 0, 0, 0];
    let gray1Pos;
    const gray2 = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let gray2Pos;
    const support1 = [0, 0, 1, 0];
    const support2 = [0, 1, 0, 0];
    const support3 = [0, 1, 0, 1];
    const support4 = [1, 0, 0, 0];
    let allow = 1;
    let a;
    */
    //clockwise clock2
    //countter clockwise clock1

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
      if(greenPos === 6){
        window.open("/game/Win", "_self");
      }
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
        if(support1[0] === 1 && (gray1[1] === 1 || gray2[1] === 1 || green[1] === 1) && num !== 1){
          allow = 0;
        } else if(support1[1] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support1[2] === 1 && (gray1[3] === 1 || gray2[3] === 1 || green[3] === 1) && num !== 3){
          allow = 0;
        } else if(support1[3] === 1 && (gray1[0] === 1 || gray2[0] === 1 || green[0] === 1) && num !== 0){
          allow = 0;
        }
      }
      if((num === 0 && way === "D" && support1[3] === 1) || (num === 1 && way === "L" && support1[0] === 1)
      || (num === 4 && way === "U" && support1[1] === 1) || (num === 3 && way === "R" && support1[2] === 1)){
        if(support1[1] === 1 && (gray1[1] === 1 || gray2[1] === 1 || green[1] === 1) && num !== 1){
          allow = 0;
        } else if(support1[2] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support1[3] === 1 && (gray1[3] === 1 || gray2[3] === 1 || green[3] === 1) && num !== 3){
          allow = 0;
        } else if(support1[0] === 1 && (gray1[0] === 1 || gray2[0] === 1 || green[0] === 1) && num !== 0){
          allow = 0;
        }
      }
      if((num === 1 && way === "R" && support2[0] === 1) || (num === 2 && way === "D" && support2[1] === 1)
      || (num === 5 && way === "L" && support2[2] === 1) || (num === 4 && way === "U" && support2[3] === 1)){
        if(support2[0] === 1 && (gray1[2] === 1 || gray2[2] === 1 || green[2] === 1) && num !== 2){
          allow = 0;
        } else if(support2[1] === 1 && (gray1[5] === 1 || gray2[5] === 1 || green[5] === 1) && num !== 5){
          allow = 0;
        } else if(support2[2] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support2[3] === 1 && (gray1[1] === 1 || gray2[1] === 1 || green[1] === 1) && num !== 1){
          allow = 0;
        }
      }
      if((num === 1 && way === "D" && support2[3] === 1) || (num === 2 && way === "L" && support2[0] === 1)
      || (num === 5 && way === "U" && support2[1] === 1) || (num === 4 && way === "R" && support2[2] === 1)){
        if(support2[1] === 1 && (gray1[2] === 1 || gray2[2] === 1 || green[2] === 1) && num !== 2){
          allow = 0;
        } else if(support2[2] === 1 && (gray1[5] === 1 || gray2[5] === 1 || green[5] === 1) && num !== 5){
          allow = 0;
        } else if(support2[3] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support2[0] === 1 && (gray1[1] === 1 || gray2[1] === 1 || green[1] === 1) && num !== 1){
          allow = 0;
        }
      }
      if((num === 3 && way === "R" && support3[0] === 1) || (num === 4 && way === "D" && support3[1] === 1)
      || (num === 7 && way === "L" && support3[2] === 1) || (num === 6 && way === "U" && support3[3] === 1)){
        if(support3[0] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support3[1] === 1 && (gray1[7] === 1 || gray2[7] === 1 || green[7] === 1) && num !== 7){
          allow = 0;
        } else if(support3[2] === 1 && (gray1[6] === 1 || gray2[6] === 1 || green[6] === 1) && num !== 6){
          allow = 0;
        } else if(support3[3] === 1 && (gray1[3] === 1 || gray2[3] === 1 || green[3] === 1) && num !== 3){
          allow = 0;
        }
      }
      if((num === 3 && way === "D" && support3[3] === 1) || (num === 4 && way === "L" && support3[0] === 1)
      || (num === 7 && way === "U" && support3[1] === 1) || (num === 6 && way === "R" && support3[2] === 1)){
        if(support3[1] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        } else if(support3[2] === 1 && (gray1[7] === 1 || gray2[7] === 1 || green[7] === 1) && num !== 7){
          allow = 0;
        } else if(support3[3] === 1 && (gray1[6] === 1 || gray2[6] === 1 || green[6] === 1) && num !== 6){
          allow = 0;
        } else if(support3[0] === 1 && (gray1[3] === 1 || gray2[3] === 1 || green[3] === 1) && num !== 3){
          allow = 0;
        }
      }
      if((num === 4 && way === "R" && support4[0] === 1) || (num === 5 && way === "D" && support4[1] === 1)
      || (num === 8 && way === "L" && support4[2] === 1) || (num === 7 && way === "U" && support4[3] === 1)){
        if(support4[0] === 1 && (gray1[5] === 1 || gray2[5] === 1 || green[5] === 1) && num !== 5){
          allow = 0;
        } else if(support4[1] === 1 && (gray1[8] === 1 || gray2[8] === 1 || green[8] === 1) && num !== 8){
          allow = 0;
        } else if(support4[2] === 1 && (gray1[7] === 1 || gray2[7] === 1 || green[7] === 1) && num !== 7){
          allow = 0;
        } else if(support4[3] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
          allow = 0;
        }
      }
      if((num === 4 && way === "D" && support4[3] === 1) || (num === 5 && way === "L" && support4[0] === 1)
      || (num === 8 && way === "U" && support4[1] === 1) || (num === 7 && way === "R" && support4[2] === 1)){
        if(support4[1] === 1 && (gray1[5] === 1 || gray2[5] === 1 || green[5] === 1) && num !== 5){
          allow = 0;
        } else if(support4[2] === 1 && (gray1[8] === 1 || gray2[8] === 1 || green[8] === 1) && num !== 8){
          allow = 0;
        } else if(support4[3] === 1 && (gray1[7] === 1 || gray2[7] === 1 || green[7] === 1) && num !== 7){
          allow = 0;
        } else if(support4[0] === 1 && (gray1[4] === 1 || gray2[4] === 1 || green[4] === 1) && num !== 4){
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
    greenMove();
    gray1Move();
    gray2Move();
    support1Move();
    support2Move();
    support3Move();
    support4Move();
    $(document).keyup(function(e){
      if(e.key === "4" || e.keyCode === 100){
        chip = 4;
        console.log(4);
      } else if(e.key === "5" || e.keyCode === 101){
        chip = 5;
        console.log(5);
      } else if(e.key === "6" || e.keyCode === 102){
        chip = 6;
        console.log(6);
      }
      if(chip === 4){
        if(gray1[greenPos - 1] === 0 && gray2[greenPos - 1] === 0 && greenPos % 3 !== 0 && (e.key === "ArrowLeft" || e.keyCode === 37)){
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
        } else if(gray1[greenPos - 3] === 0 && gray2[greenPos - 3] === 0 && greenPos >= 3 && (e.key === "ArrowUp" || e.keyCode === 38)){
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
        } else if(gray1[greenPos + 1] === 0 && gray2[greenPos + 1] === 0 && greenPos % 3 !== 2 && (e.key === "ArrowRight" || e.keyCode === 39)){
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
        } else if(gray1[greenPos + 3] === 0 && gray2[greenPos + 3] === 0 && greenPos <= 5 && (e.key === "ArrowDown" || e.keyCode === 40)){
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
      else if(chip === 5){
        if(green[gray1Pos - 1] === 0 && gray2[gray1Pos - 1] === 0 && (e.key === "ArrowLeft" || e.keyCode === 37) && gray1Pos % 3 !== 0){
          turnMoveLeft(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos--;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
          } else{
            allow = 1;
          }
        } else if(green[gray1Pos - 3] === 0 && gray2[gray1Pos - 3] === 0 && (e.key === "ArrowUp" || e.keyCode === 38) && gray1Pos >= 3){
          turnMoveUp(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos-=3;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
          } else{
            allow = 1;
          }
        } else if(green[gray1Pos + 1] === 0 && gray2[gray1Pos + 1] === 0 && (e.key === "ArrowRight" || e.keyCode === 39) && gray1Pos % 3 !== 2){
          turnMoveRight(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos++;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
          } else{
            allow = 1;
          }
        } else if(green[gray1Pos + 3] === 0 && gray2[gray1Pos + 3] === 0 && (e.key === "ArrowDown" || e.keyCode === 40) && gray1Pos <= 5){
          turnMoveDown(gray1Pos);
          if(allow === 1){
            gray1[gray1Pos] = 0;
            $(`.circle${gray1Pos + 1}`).removeClass("gray1");
            gray1Pos+=3;
            gray1[gray1Pos] = 1;
            $(`.circle${gray1Pos + 1}`).addClass("gray1");
          } else{
            allow = 1;
          }
        }
      }
      else if(chip === 6){
        if(green[gray2Pos - 1] === 0 && gray1[gray2Pos - 1] === 0 && (e.key === "ArrowLeft" || e.keyCode === 37) && gray2Pos % 3 !== 0){
          turnMoveLeft(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos--;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
          } else{
            allow = 1;
          }
        } else if(green[gray2Pos - 3] === 0 && gray1[gray2Pos - 3] === 0 && (e.key === "ArrowUp" || e.keyCode === 38) && gray2Pos >= 3){
          turnMoveUp(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos-=3;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
          } else{
            allow = 1;
          }
        } else if(green[gray2Pos + 1] === 0 && gray1[gray2Pos + 1] === 0 && (e.key === "ArrowRight" || e.keyCode === 39) && gray2Pos % 3 !== 2){
          turnMoveRight(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos++;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
          } else{
            allow = 1;
          }
        } else if(green[gray2Pos + 3] === 0 && gray1[gray2Pos + 3] === 0 && (e.key === "ArrowDown" || e.keyCode === 40) && gray2Pos <= 5){
          turnMoveDown(gray2Pos);
          if(allow === 1){
            gray2[gray2Pos] = 0;
            $(`.circle${gray2Pos + 1}`).removeClass("gray2");
            gray2Pos+=3;
            gray2[gray2Pos] = 1;
            $(`.circle${gray2Pos + 1}`).addClass("gray2");
          } else{
            allow = 1;
          }
        }
      }
    });
  });
  return (
    <div>
      <Field />
    </div>
  );
}
