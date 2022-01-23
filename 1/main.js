let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y);

sel('.box').style.display = 'none';

getId('colors').onclick = function(event){
    sel('.box').style.display = 'block';
    sel('.box2').style.display = 'none';
}

sel('.one').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(2, 122, 192)';
}
sel('.two').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(250, 102, 4)';
}
sel('.three').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(196, 0, 26)';
}
sel('.four').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(171, 240, 12)';
}
sel('.five').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(164, 5, 238)';
}
sel('.six').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(145, 10, 73)';
}
sel('.seven').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(8, 247, 68)';
}
sel('.eight').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(240, 22, 7)';
}
sel('.nine').onmousedown = function(){
    document.querySelector('.all').style.background = 'rgb(0, 13, 196)';
}

sel('.box2').style.display = 'none';

getId('images').onclick = function(event){
    sel('.box2').style.display = 'block';
    sel('.box').style.display = 'none';
}

sel('.one2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://lebisca.com/wp-content/uploads/2020/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact.jpg)';
}
sel('.two2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg)';
}
sel('.three2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://en.bcdn.biz/Images/2012/11/1/fdefc3b1-e76e-44fa-bf5c-fa1b069f26d1.jpg)';
}
sel('.four2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa374569469517.5b82ce7e5e33b.jpg)';
}
sel('.five2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-G15iTGp76Wp8IgdF64zzt4XKZY_so5tcQ&usqp=CAU)';
}
sel('.six2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://i.imgur.com/wOMCMfT.jpg)';
}
sel('.seven2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://www.sony-asia.com/microsite/cityscape/assets/images/au/img-1.jpg)';
}
sel('.eight2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Y9_UM2BrdmFQ5eWavs2r0ss5T1WnKGF0bg&usqp=CAU)';
}
sel('.nine2').onmousedown = function(){
    document.querySelector('.all').style.background = 'url(https://tukiem.com/wp-content/uploads/2017/09/PT_hero_42_153645159.jpg)';
}