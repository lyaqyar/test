// poem
var words=[
   
    '我望着月亮，却只看见你',
    '你的眼睛里有晴雨 日月 山川 江河 云雾 花鸟',
    '我的眼睛更好看,因为我的眼里有你',


    '一日不见兮，思之若狂',
    '我望着月亮，却只看见你',

    '晓看天色暮看云',
    '行也思君 坐也思君',

    '你曾是我灰色人生中的一道彩虹',

    '你值得世间所有美好',

    '无论途中刮风还是下雨，只要终点是你',

    '我见青山多妩媚',
    '料青山见我也应如是',
    '笑魇如花的你是这个世界上最美好的东西',
 
    '人生若只如初见',
    '余光中都是你',

    '愿我如星君如月',
    '夜夜流光相皎洁',
    
    '星河滚烫 你是人间理想',

    '春风十里， 桃花百里，不及你，都不及你。',

    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',

    '垆边人似月',
    '皓腕凝霜雪',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
