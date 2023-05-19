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
let str = '*^_^*亲爱的满满：<//写信实在是温柔的事啊，细腻的心思藏在横竖撇捺之中<//时间过得真快，有你的日子已足有两个月了。。。<//好幸运地遇见了你,真好呀O(∩_∩)O~<//尽管相识在网络中，相隔着千山万水<//却仍能感受到你温暖的存在(๑′ᴗ‵๑)<//愿思念化作文字流淌，能流进你的心房<//无论是在晨曦的微光中☀<//还是在月色下的温柔里🌙<//我的心跳都属于你❤<//每次与你的聊天<//都如同一场美丽的梦<//愿这首诗带给你甜蜜和温馨<//让你感受到我的真挚♬ <//无论是现实还是虚拟的世界<//你都是我心中最珍贵的那个人Ｉ Lᵒᵛᵉᵧₒᵤ❤<//祝姐姐天天开心◍˃ ᵕ ˂◍<//From 喜欢你的ʕ̢̣·͡˔·ོɁ̡̣ ';
let strp = '';

function print() {
  if (str[i] == '<') {
    box.innerHTML = strp + "<br>|";
    strp += "<br>";
  } else {
    strp += str[i];
    box.innerHTML = strp + '_';
  }
  i++;
}

setTimeout(() => {
  let printid = setInterval(() => {
    print();
    if (i == str.length) {
      clearInterval(printid);
      nextPageLink.style.display = 'inline';
    }
  }, 200); // 200毫秒打一个字
}, 5500); // 5500毫秒开始打字

  // 背景出现
  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1500);
  }

  appearBackground();
});
