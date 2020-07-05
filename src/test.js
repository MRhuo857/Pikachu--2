const string = `
.skin * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}
.skin {
  position: relative;
  background-color: #ffcb00;
  min-height:50vh;
}
.nose {
  position: relative;
  border: 10px solid red;
  border-color: #000 transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 100px;
  margin-left: -10px;
  z-index: 10;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  margin-left: -10px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}
.eye {
  width: 42px;
  height: 42px;
  border: 2px solid #000;
  position: absolute;
  left: 50%;
  top: 70px;
  margin-left: -21px;
  background-color: #303031;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  animation: eyeMove 1s infinite;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 110px;
  margin-left: -75px;
}
.mouth .up .lip {
  width: 72px;
  height: 30px;
  border: 3px solid #000;
  border-top-color: transparent;
  position: relative;
  position: absolute;
  right: 50%;
  margin-right: -50px;
  z-index: 1;
  background-color: #ffcb00;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-left-color: transparent;
  transform: rotate(-15deg) translateX(-25px);
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0px;
  border-right-color: transparent;
  transform: rotate(15deg) translateX(25px);
  right: 50%;
  margin-right: -50px;
}
.mouth .up .lip::before {
  position: absolute;
  content: "";
  display: block;
  width: 10px;
  height: 34px;
  bottom: 0px;
  background-color: #ffcb00;
  bottom: 0px;
}
.mouth .up .lip.left::before {
  right: -5px;
}

.mouth .up .lip.right::before {
  left: -5px;
}
.mouth .down {
  width: 130px;
  height: 140px;
  border: 3px solid #000;
  position: absolute;
  left: 50%;
  margin-left: -65px;
  bottom: -10px;
  background-color: #cc4143;
  border-bottom-left-radius: 280px 590px;
  border-bottom-right-radius: 280px 590px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -70px;
  top: 20px;
  background-color: #dd666a;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
}
.skin .face {
  width: 64px;
  height: 64px;
  border: 2px solid #000;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 160px;
  z-index: 3;
  border-radius: 50%;
  background-color: #ff5140;
}
.skin .face.left {
  transform: translateX(-120px);
}
.skin .face.right {
  transform: translateX(120px);
}
@keyframes eyeMove {
  0%,
  100% {
    top: 2px;
    left: 2px;
  }
  33% {
    top: 2;
    left: 15px;
  }
  66% {
    top: 10px;
    left: 10px;
  }
}
@keyframes handMove {
  0%,
  46%,
  54%,
  100% {
    top: 400px;
  }
  50% {
    top: 425px;
  }
}
@keyframes box-rotate {
  0%,
  90%,
  100% {
    -webkit-transform: rotate(0deg);
  }
  40%,
  50% {
    -webkit-transform: rotate(360deg);
  }
}

`;
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n);

let time = 50;

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  console.log(n + ":" + string.substring(0, n));
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};
const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  window.clearInterval(id);
};

let id = play();
btnPause.onclick = () => {
  pause();
};
btnPlay.onclick = () => {
  id = play();
};
btnSlow.onclick = () => {
  pause();
  time = 300;
  id = play();
};
btnNormal.onclick = () => {
  pause();
  time = 50;
  id = play();
};
btnFast.onclick = () => {
  pause();
  time = 0;
  id = play();
};
