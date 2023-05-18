let heart = document.querySelector('.heart.content');
let card = document.querySelector('.card');
let box = document.querySelector('#box');

heart.addEventListener('click', function() {
  card.setAttribute("style", "opacity:0");
  let x = document.createElement("audio");
  x.setAttribute("src", "qlx.mp3");
  x.setAttribute("autoplay", "autoplay");

  // 打字效果
  let i = 0;
let str = '第一行<第二行';
let strp = '';

function print() {
  if (str[i] == '<') {
    box.innerHTML = strp + "<br><br>|";
    strp += "<br><br>";
  } else {
    strp += str[i];
    box.innerHTML = strp + '|';
  }
  i++;
}

setTimeout(() => {
  let printid = setInterval(() => {
    print();
    if (i == str.length) {
      clearInterval(printid);
      setTimeout(() => {
        // 打字结束后延迟一定时间后跳转到下一个网页
        window.location.href = 'skystar.html';
      }, 2000); // 延迟 2 秒后跳转，根据需要调整延迟时间
    }
  }, 190); // 190毫秒打一个字
}, 5500); // 5500毫秒开始打字


  // 背景出现
  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1500);
  }

  appearBackground();
});
