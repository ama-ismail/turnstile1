import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnstile from './Turnstile';
import Score from './Score';
import Rules from './Rules';
import Control from './Control';
import Game from './Game';
import NoPage from "./NoPage";
import L10 from './levels/L10';
import Win from './levels/Win';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Turnstile/>} />
      <Route path="/score" element={<Score />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/control" element={<Control />} />
      <Route path="/game" element={<Game />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/game/level1" element={<L10
        index = {1}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[0, 1, 0, 1]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level2" element={<L10
        index = {2}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 1, 0]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[0, 1, 0, 0]}
        support4 = {[0, 1, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level3" element={<L10
        index = {3}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 0]}
        support2 = {[1, 1, 0, 0]}
        support3 = {[1, 0, 0, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level4" element={<L10
        index = {4}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[1, 1, 1, 1]}
        support3 = {[0, 1, 0, 0]}
        support4 = {[0, 1, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level5" element={<L10
        index = {5}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 1]}
        support2 = {[1, 1, 1, 0]}
        support3 = {[1, 0, 0, 1]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level6" element={<L10
        index = {6}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[0, 0, 0, 1]}
        support3 = {[0, 1, 1, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level7" element={<L10
        index = {7}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 1, 1]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[0, 0, 1, 0]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level8" element={<L10
        index = {8}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[1, 1, 1, 0]}
        support3 = {[0, 1, 1, 1]}
        support4 = {[0, 1, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level9" element={<L10
        index = {9}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        support1 = {[0, 0, 0, 1]}
        support2 = {[0, 1, 1, 1]}
        support3 = {[1, 0, 0, 1]}
        support4 = {[0, 0, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level10" element={<L10
        index = {10}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 0]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[1, 0, 0, 1]}
        support4 = {[0, 0, 1, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level11" element={<L10
        index = {11}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        orange = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 1, 1]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[0, 0, 1, 0]}
        support4 = {[0, 0, 1, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level12" element={<L10
        index = {12}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 1]}
        support2 = {[0, 1, 1, 0]}
        support3 = {[1, 0, 0, 1]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level13" element={<L10
        index = {13}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 0, 0]}
        support2 = {[0, 1, 0, 1]}
        support3 = {[1, 1, 1, 1]}
        support4 = {[1, 1, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level14" element={<L10
        index = {14}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 1, 0]}
        support2 = {[0, 0, 0, 1]}
        support3 = {[0, 1, 1, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level15" element={<L10
        index = {15}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 1]}
        support2 = {[1, 0, 0, 1]}
        support3 = {[0, 1, 0, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level16" element={<L10
        index = {16}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 1, 1]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[0, 0, 0, 1]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level17" element={<L10
        index = {17}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 1, 1]}
        support2 = {[1, 0, 0, 1]}
        support3 = {[0, 1, 0, 0]}
        support4 = {[1, 0, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level18" element={<L10
        index = {18}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 0, 1]}
        support2 = {[0, 0, 1, 1]}
        support3 = {[0, 0, 1, 1]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level19" element={<L10
        index = {19}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 1]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[0, 1, 0, 1]}
        support4 = {[0, 1, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level20" element={<L10
        index = {20}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 0]}
        support2 = {[1, 0, 0, 0]}
        support3 = {[1, 0, 1, 0]}
        support4 = {[1, 0, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level21" element={<L10
        index = {21}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        orange = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 0, 0]}
        support2 = {[0, 0, 1, 0]}
        support3 = {[0, 0, 0, 1]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level22" element={<L10
        index = {22}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        support1 = {[1, 0, 0, 1]}
        support2 = {[1, 1, 0, 1]}
        support3 = {[1, 0, 1, 0]}
        support4 = {[1, 0, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level23" element={<L10
        index = {23}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        blue = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[0, 0, 0, 1]}
        support4 = {[1, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level24" element={<L10
        index = {24}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 0, 1]}
        support2 = {[1, 1, 1, 1]}
        support3 = {[1, 0, 1, 1]}
        support4 = {[0, 0, 1, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level25" element={<L10
        index = {25}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        orange = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 0]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[1, 1, 1, 1]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level26" element={<L10
        index = {26}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 1, 0]}
        support2 = {[1, 0, 1, 1]}
        support3 = {[0, 1, 0, 1]}
        support4 = {[0, 1, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level27" element={<L10
        index = {27}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 0, 0]}
        support2 = {[1, 1, 1, 0]}
        support3 = {[1, 0, 0, 0]}
        support4 = {[0, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level28" element={<L10
        index = {28}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        support1 = {[1, 0, 0, 0]}
        support2 = {[1, 1, 0, 1]}
        support3 = {[1, 1, 1, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level29" element={<L10
        index = {29}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        support1 = {[0, 0, 0, 1]}
        support2 = {[1, 0, 1, 0]}
        support3 = {[1, 0, 1, 1]}
        support4 = {[0, 0, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level30" element={<L10
        index = {30}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 0, 1]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[1, 1, 1, 1]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level31" element={<L10
        index = {31}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 0, 1]}
        support2 = {[1, 1, 0, 1]}
        support3 = {[1, 0, 1, 0]}
        support4 = {[0, 1, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level32" element={<L10
        index = {32}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        purple = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 1, 1]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[0, 1, 0, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level33" element={<L10
        index = {33}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 0, 1]}
        support2 = {[0, 1, 1, 0]}
        support3 = {[1, 0, 1, 1]}
        support4 = {[0, 1, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level34" element={<L10
        index = {34}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        blue = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 1, 0, 1]}
        support2 = {[0, 1, 0, 0]}
        support3 = {[0, 0, 1, 0]}
        support4 = {[1, 1, 1, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level35" element={<L10
        index = {35}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        support1 = {[1, 0, 1, 0]}
        support2 = {[1, 1, 0, 0]}
        support3 = {[0, 1, 1, 0]}
        support4 = {[1, 0, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level36" element={<L10
        index = {36}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 1, 0, 0, 0, 0, 0]}
        blue = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray1 = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 0, 1, 0]}
        support2 = {[0, 1, 0, 1]}
        support3 = {[0, 1, 1, 0]}
        support4 = {[1, 0, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level37" element={<L10
        index = {37}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 1, 0]}
        support2 = {[1, 0, 0, 0]}
        support3 = {[0, 0, 0, 1]}
        support4 = {[1, 1, 0, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level38" element={<L10
        index = {38}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 1]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[1, 1, 0, 1]}
        support2 = {[1, 0, 0, 0]}
        support3 = {[0, 0, 0, 1]}
        support4 = {[1, 1, 1, 1]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level39" element={<L10
        index = {39}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[0, 0, 0, 0, 0, 0, 1, 0, 0]}
        blue = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        gray1 = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        support1 = {[0, 0, 0, 1]}
        support2 = {[0, 1, 1, 1]}
        support3 = {[1, 0, 1, 1]}
        support4 = {[0, 0, 1, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/level40" element={<L10
        index = {40}
        greenPos = {-1}
        bluePos = {-1}
        purplePos = {-1}
        orangePos = {-1}
        gray1Pos = {-1}
        gray2Pos = {-1}
        gray3Pos = {-1}
        gray4Pos = {-1}
        green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        orange = {[1, 0, 0, 0, 0, 0, 0, 0, 0]}
        blue = {[0, 0, 0, 0, 0, 1, 0, 0, 0]}
        purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        gray1 = {[0, 1, 0, 0, 0, 0, 0, 0, 0]}
        gray2 = {[0, 0, 1, 0, 0, 0, 0, 0, 0]}
        gray3 = {[0, 0, 0, 0, 1, 0, 0, 0, 0]}
        gray4 = {[0, 0, 0, 0, 0, 0, 0, 1, 0]}
        support1 = {[1, 0, 0, 1]}
        support2 = {[1, 1, 1, 1]}
        support3 = {[0, 1, 1, 0]}
        support4 = {[0, 1, 0, 0]}
        chip = {0}
        allow = {1}
        goal = {0}
      />} />
      <Route path="/game/Win" element={<Win />} />
    </Routes>
  </BrowserRouter>
);

/*
<Route path="/game/level32" element={<L9
  greenPos = {-1}
  bluePos = {-1}
  purplePos = {-1}
  orangePos = {-1}
  gray1Pos = {-1}
  gray2Pos = {-1}
  gray3Pos = {-1}
  gray4Pos = {-1}
  green = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  orange = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  blue = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  purple = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  gray1 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  gray2 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  gray3 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  gray4 = {[0, 0, 0, 0, 0, 0, 0, 0, 0]}
  support1 = {[0, 0, 0, 0]}
  support2 = {[0, 0, 0, 0]}
  support3 = {[0, 0, 0, 0]}
  support4 = {[0, 0, 0, 0]}
  chip = {0}
  allow = {1}
  goal = {0}
/>} />
*/
