let items='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima suscipit repudiandae laudantium alias magnam molestias inventore ut omnis dicta officia ad magni delectus quis, provident modi praesentium iste veniam.';

let bdy = document.querySelector('body'); // body태그 찾아서 bdy변수에 할당.
let div = document.createElement('div'); // div element 생성.
bdy.append(div); // body 자식요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span') // <span></span>
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onChange = function() {
    // 버튼을 클릭 하면
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span){
        // <span>Lorem,</span> <span>imimpum,</span> 
        // findWord == span.innerText -> span.remove();
        if(findWord == span.innerText) {
            span.remove();
        }
    })
}

document.querySelector('div').after(inp, btn);