import "../style.css";
import "./field.css";
import $ from 'jquery';

function L2() {
  return (
    <div className="container">
      <h1>ТУРНИКЕТ</h1>
      <div className="field1">
        <div className="corner1"></div>
        <div className="corner10"></div>
        <div className="corner2"></div>
        <div className="corner20"></div>
        <div className="corner3"></div>
        <div className="corner30"></div>
        <div className="corner4"></div>
        <div className="corner40"></div>
        <div className="field2">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="turn1"></div>
          <div className="turn2"></div>
          <div className="turn3"></div>
          <div className="turn4"></div>
          <div className="turn5"></div>
          <div className="turn6"></div>
          <div className="turn7"></div>
          <div className="turn8"></div>
          <div className="turn9"></div>
          <div className="turn10"></div>
          <div className="turn11"></div>
          <div className="turn12"></div>
          <div className="turn13"></div>
          <div className="turn14"></div>
          <div className="turn15"></div>
          <div className="turn16"></div>
          <div className="support1"></div>
          <div className="support2"></div>
          <div className="support3"></div>
          <div className="support4"></div>
        </div>
      </div>
    </div>
  );
}

let chip = 0;
let green = [0, 0, 1, 0, 0, 0, 0, 0, 0];
let greenPos = 2;
let gray1 = [0, 0, 0, 1, 0, 0, 0, 0, 0];
let gray1Pos = 3;
let gray2 = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let gray2Pos = 8;
let support1 = [0, 0, 1, 0];
let support2 = [0, 1, 0, 0];
let support3 = [0, 1, 0, 1];
let support4 = [1, 0, 0, 0];
//let allow = 1;
let a;
//clockwise clock2
//countter clockwise clock1

function Win() {
  alert("Ты выиграл");
}

function greenMove() {
  for(let i = 0; i < 9; i++){
    if(green[i] === 0){
      $(`.circle${i + 1}`).removeClass("green");
    } else{
      $(`.circle${i + 1}`).addClass("green");
    }
  }
}

function gray1Move() {
  for(let i = 0; i < 9; i++){
    if(gray1[i] === 0){
      $(`.circle${i + 1}`).removeClass("gray1");
    } else{
      $(`.circle${i + 1}`).addClass("gray1");
    }
  }
}

function gray2Move() {
  for(let i = 0; i < 9; i++){
    if(gray2[i] === 0){
      $(`.circle${i + 1}`).removeClass("gray2");
    } else{
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

$(document).ready(function(){
  //allow = 1;
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
  $(".green").click(function(){
    chip = 4;
  });
  $(".gray1").click(function(){
    chip = 5;
  });
  $(".gray2").click(function(){
    chip = 6;
  });
});

$(document).keyup(function(e){
  if(chip === 4){
    if((e.key === "ArrowLeft" || e.keyCode === 37) && greenPos % 3 !== 0){
        if(greenPos === 1 && support1[0] === 1){
          support1clock1();
        } else if(greenPos === 4 && support1[2] === 1){
          support1clock2();
        }
        if(greenPos === 2 && support2[0] === 1){
          support2clock1();
        } else if(greenPos === 5 && support2[2] === 1){
          support2clock2();
        }
        if(greenPos === 4 && support3[0] === 1){
          support3clock1();
        } else if(greenPos === 7 && support3[2] === 1){
          support3clock2();
        }
        if(greenPos === 5 && support4[0] === 1){
          support4clock1();
        } else if(greenPos === 8 && support4[2] === 1){
          support4clock2();
        }
        green[greenPos] = 0;
        $(`.circle${greenPos + 1}`).removeClass("green");
        greenPos--;
        green[greenPos] = 1;
        $(`.circle${greenPos + 1}`).addClass("green");
        if(greenPos === 6){
          setTimeout(Win, 2000);
        }
    } else if((e.key === "ArrowUp" || e.keyCode === 38) && greenPos >= 3){
        if(greenPos === 4 && support1[1] === 1){
          support1clock1();
        } else if(greenPos === 3 && support1[3] === 1){
          support1clock2();
        }
        if(greenPos === 5 && support2[1] === 1){
          support2clock1();
        } else if(greenPos === 4 && support2[3] === 1){
          support2clock2();
        }
        if(greenPos === 7 && support3[1] === 1){
          support3clock1();
        } else if(greenPos === 6 && support3[3] === 1){
          support3clock2();
        }
        if(greenPos === 8 && support4[1] === 1){
          support4clock1();
        } else if(greenPos === 7 && support4[3] === 1){
          support4clock2();
        }
        green[greenPos] = 0;
        $(`.circle${greenPos + 1}`).removeClass("green");
        greenPos-=3;
        green[greenPos] = 1;
        $(`.circle${greenPos + 1}`).addClass("green");
        if(greenPos === 6){
          setTimeout(Win, 2000);
        }
    } else if((e.key === "ArrowRight" || e.keyCode === 39) && greenPos % 3 !== 2){
        if(greenPos === 3 && support1[2] === 1){
          support1clock1();
        } else if(greenPos === 0 && support1[0] === 1){
          support1clock2();
        }
        if(greenPos === 4 && support2[2] === 1){
          support2clock1();
        } else if(greenPos === 1 && support2[0] === 1){
          support2clock2();
        }
        if(greenPos === 6 && support3[2] === 1){
          support3clock1();
        } else if(greenPos === 3 && support3[0] === 1){
          support3clock2();
        }
        if(greenPos === 7 && support4[2] === 1){
          support4clock1();
        } else if(greenPos === 4 && support4[0] === 1){
          support4clock2();
        }
        green[greenPos] = 0;
        $(`.circle${greenPos + 1}`).removeClass("green");
        greenPos++;
        green[greenPos] = 1;
        $(`.circle${greenPos + 1}`).addClass("green");
        if(greenPos === 6){
          setTimeout(Win, 2000);
        }
    } else if((e.key === "ArrowDown" || e.keyCode === 40) && greenPos <= 5){
        if(greenPos === 0 && support1[3] === 1){
          support1clock1();
        } else if(greenPos === 1 && support1[1] === 1){
          support1clock2();
        }
        if(greenPos === 1 && support2[3] === 1){
          support2clock1();
        } else if(greenPos === 2 && support2[1] === 1){
          support2clock2();
        }
        if(greenPos === 3 && support3[3] === 1){
          support3clock1();
        } else if(greenPos === 4 && support3[1] === 1){
          support3clock2();
        }
        if(greenPos === 4 && support4[3] === 1){
          support4clock1();
        } else if(greenPos === 5 && support4[1] === 1){
          support4clock2();
        }
        green[greenPos] = 0;
        $(`.circle${greenPos + 1}`).removeClass("green");
        greenPos+=3;
        green[greenPos] = 1;
        $(`.circle${greenPos + 1}`).addClass("green");
        if(greenPos === 6){
          setTimeout(Win, 2000);
        }
    }
  } else if(chip === 5){
    if((e.key === "ArrowLeft" || e.keyCode === 37) && gray1Pos % 3 !== 0){
      if(gray1Pos === 1 && support1[0] === 1){
        support1clock1();
      } else if(gray1Pos === 4 && support1[2] === 1){
        support1clock2();
      }
      if(gray1Pos === 2 && support2[0] === 1){
        support2clock1();
      } else if(gray1Pos === 5 && support2[2] === 1){
        support2clock2();
      }
      if(gray1Pos === 4 && support3[0] === 1){
        support3clock1();
      } else if(gray1Pos === 7 && support3[2] === 1){
        support3clock2();
      }
      if(gray1Pos === 5 && support4[0] === 1){
        support4clock1();
      } else if(gray1Pos === 8 && support4[2] === 1){
        support4clock2();
      }
      gray1[gray1Pos] = 0;
      $(`.circle${gray1Pos + 1}`).removeClass("gray1");
      gray1Pos--;
      gray1[gray1Pos] = 1;
      $(`.circle${gray1Pos + 1}`).addClass("gray1");
    } else if((e.key === "ArrowUp" || e.keyCode === 38) && gray1Pos >= 3){
      if(gray1Pos === 4 && support1[1] === 1){
        support1clock1();
      } else if(gray1Pos === 3 && support1[3] === 1){
        support1clock2();
      }
      if(gray1Pos === 5 && support2[1] === 1){
        support2clock1();
      } else if(gray1Pos === 4 && support2[3] === 1){
        support2clock2();
      }
      if(gray1Pos === 7 && support3[1] === 1){
        support3clock1();
      } else if(gray1Pos === 6 && support3[3] === 1){
        support3clock2();
      }
      if(gray1Pos === 8 && support4[1] === 1){
        support4clock1();
      } else if(gray1Pos === 7 && support4[3] === 1){
        support4clock2();
      }
      gray1[gray1Pos] = 0;
      $(`.circle${gray1Pos + 1}`).removeClass("gray1");
      gray1Pos-=3;
      gray1[gray1Pos] = 1;
      $(`.circle${gray1Pos + 1}`).addClass("gray1");
    } else if((e.key === "ArrowRight" || e.keyCode === 39) && gray1Pos % 3 !== 2){
      if(gray1Pos === 3 && support1[2] === 1){
        support1clock1();
      } else if(gray1Pos === 0 && support1[0] === 1){
        support1clock2();
      }
      if(gray1Pos === 4 && support2[2] === 1){
        support2clock1();
      } else if(gray1Pos === 1 && support2[0] === 1){
        support2clock2();
      }
      if(gray1Pos === 6 && support3[2] === 1){
        support3clock1();
      } else if(gray1Pos === 3 && support3[0] === 1){
        support3clock2();
      }
      if(gray1Pos === 7 && support4[2] === 1){
        support4clock1();
      } else if(gray1Pos === 4 && support4[0] === 1){
        support4clock2();
      }
      gray1[gray1Pos] = 0;
      $(`.circle${gray1Pos + 1}`).removeClass("gray1");
      gray1Pos++;
      gray1[gray1Pos] = 1;
      $(`.circle${gray1Pos + 1}`).addClass("gray1");
    } else if((e.key === "ArrowDown" || e.keyCode === 40) && gray1Pos <= 5){
      if(gray1Pos === 0 && support1[3] === 1){
        support1clock1();
      } else if(gray1Pos === 1 && support1[1] === 1){
        support1clock2();
      }
      if(gray1Pos === 1 && support2[3] === 1){
        support2clock1();
      } else if(gray1Pos === 2 && support2[1] === 1){
        support2clock2();
      }
      if(gray1Pos === 3 && support3[3] === 1){
        support3clock1();
      } else if(gray1Pos === 4 && support3[1] === 1){
        support3clock2();
      }
      if(gray1Pos === 4 && support4[3] === 1){
        support4clock1();
      } else if(gray1Pos === 5 && support4[1] === 1){
        support4clock2();
      }
      gray1[gray1Pos] = 0;
      $(`.circle${gray1Pos + 1}`).removeClass("gray1");
      gray1Pos+=3;
      gray1[gray1Pos] = 1;
      $(`.circle${gray1Pos + 1}`).addClass("gray1");
    }
  } else if(chip === 6){
    if((e.key === "ArrowLeft" || e.keyCode === 37) && gray2Pos % 3 !== 0){
      if(gray2Pos === 1 && support1[0] === 1){
        support1clock1();
      } else if(gray2Pos === 4 && support1[2] === 1){
        support1clock2();
      }
      if(gray2Pos === 2 && support2[0] === 1){
        support2clock1();
      } else if(gray2Pos === 5 && support2[2] === 1){
        support2clock2();
      }
      if(gray2Pos === 4 && support3[0] === 1){
        support3clock1();
      } else if(gray2Pos === 7 && support3[2] === 1){
        support3clock2();
      }
      if(gray2Pos === 5 && support4[0] === 1){
        support4clock1();
      } else if(gray2Pos === 8 && support4[2] === 1){
        support4clock2();
      }
      gray2[gray2Pos] = 0;
      $(`.circle${gray2Pos + 1}`).removeClass("gray2");
      gray2Pos--;
      gray2[gray2Pos] = 1;
      $(`.circle${gray2Pos + 1}`).addClass("gray2");
    } else if((e.key === "ArrowUp" || e.keyCode === 38) && gray2Pos >= 3){
      if(gray2Pos === 4 && support1[1] === 1){
        support1clock1();
      } else if(gray2Pos === 3 && support1[3] === 1){
        support1clock2();
      }
      if(gray2Pos === 5 && support2[1] === 1){
        support2clock1();
      } else if(gray2Pos === 4 && support2[3] === 1){
        support2clock2();
      }
      if(gray2Pos === 7 && support3[1] === 1){
        support3clock1();
      } else if(gray2Pos === 6 && support3[3] === 1){
        support3clock2();
      }
      if(gray2Pos === 8 && support4[1] === 1){
        support4clock1();
      } else if(gray2Pos === 7 && support4[3] === 1){
        support4clock2();
      }
      gray2[gray2Pos] = 0;
      $(`.circle${gray2Pos + 1}`).removeClass("gray2");
      gray2Pos-=3;
      gray2[gray2Pos] = 1;
      $(`.circle${gray2Pos + 1}`).addClass("gray2");
    } else if((e.key === "ArrowRight" || e.keyCode === 39) && gray2Pos % 3 !== 2){
      if(gray2Pos === 3 && support1[2] === 1){
        support1clock1();
      } else if(gray2Pos === 0 && support1[0] === 1){
        support1clock2();
      }
      if(gray2Pos === 4 && support2[2] === 1){
        support2clock1();
      } else if(gray2Pos === 1 && support2[0] === 1){
        support2clock2();
      }
      if(gray2Pos === 6 && support3[2] === 1){
        support3clock1();
      } else if(gray2Pos === 3 && support3[0] === 1){
        support3clock2();
      }
      if(gray2Pos === 7 && support4[2] === 1){
        support4clock1();
      } else if(gray2Pos === 4 && support4[0] === 1){
        support4clock2();
      }
      gray2[gray2Pos] = 0;
      $(`.circle${gray2Pos + 1}`).removeClass("gray2");
      gray2Pos++;
      gray2[gray2Pos] = 1;
      $(`.circle${gray2Pos + 1}`).addClass("gray2");
    } else if((e.key === "ArrowDown" || e.keyCode === 40) && gray2Pos <= 5){
      if(gray2Pos === 0 && support1[3] === 1){
        support1clock1();
      } else if(gray2Pos === 1 && support1[1] === 1){
        support1clock2();
      }
      if(gray2Pos === 1 && support2[3] === 1){
        support2clock1();
      } else if(gray2Pos === 2 && support2[1] === 1){
        support2clock2();
      }
      if(gray2Pos === 3 && support3[3] === 1){
        support3clock1();
      } else if(gray2Pos === 4 && support3[1] === 1){
        support3clock2();
      }
      if(gray2Pos === 4 && support4[3] === 1){
        support4clock1();
      } else if(gray2Pos === 5 && support4[1] === 1){
        support4clock2();
      }
      gray2[gray2Pos] = 0;
      $(`.circle${gray2Pos + 1}`).removeClass("gray2");
      gray2Pos+=3;
      gray2[gray2Pos] = 1;
      $(`.circle${gray2Pos + 1}`).addClass("gray2");
    }
  }
});

export default L2;
