let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y);

// sel('.box').style.display = 'none';

// getId('colors').onclick = function(event){
//     sel('.box').style.display = 'block';
//     sel('.box2').style.display = 'none';
// }

// sel('.one').onmousedown = function(){
//     document.querySelector('.all').style.background = 'rgb(2, 122, 192)';
// }

// sel('.tt').oninput = function(){
//     sel('.pole0').innerText = this.value;
// }

sel('.text').onclick = function(){
    console.log(`ye`);
    console.log(`${sel('.text').innerText}`);
    sel('.pole').innerText = `${sel('.text+').innerText}`;
}