'use strict'

var content = "Hello, I'm Hyejeong"
var text = document.querySelector(".hello")
var index = 0;

function typing(){
    text.textContent += content[index++]
    if(index >= content.length){//글자수 이상이되면 clearInterval실행
        clearInterval(cys);
    }
}
var cys = setInterval(typing, 250);

//타이핑식

//여기부터
    var nc = true;   
        
    function scc(e){ // eslint-disable-line no-unused-vars
        if(nc == true){
            if(e == 0){
                $("html,body").animate({scrollTop:0},1000);
                $("#click button").css("background","#888");
                $(".c1").css("background","#555");
                
            }
            if(e == 1){
                $("html,body").animate({scrollTop:720},1000);
                $("#click button").css("background","#888");
                $(".c2").css("background","#555");
            }
            if(e == 2){
                $("html,body").animate({scrollTop:1545},1000);
                $("#click button").css("background","#888");
                $(".c3").css("background","#555");
            }
            if(e == 3){
                $("html,body").animate({scrollTop:2800},1000);
                $("#click button").css("background","#888")
                $(".c4").css("background","#555");
            }
            

            nc = false;   

            setTimeout(function(){ 
                nc = true;    
            },1000);
        }
    }

    var navgo = true;
    
    function nav(e){ // eslint-disable-line no-unused-vars
        if(navgo == true){
            if(e == 0){
                $("html,body").animate({scrollTop:0},1000);
            }
            if(e == 1){
                $("html,body").animate({scrollTop:720},1000);
            }
            if(e == 2){
                $("html,body").animate({scrollTop:1545},1000);
            }
            if(e == 3){
                $("html,body").animate({scrollTop:2800},1000);
            }
            
            navgo = false;
            
            setTimeout(function(){
                navgo = true;
            },1000);
        }
    }
        
            

    
//여기까진 클릭이벤트

$(".button").click(function(){
    window.open("http://hyejeong99.dothome.co.kr/")
});

$(".inner2 button").click(function(){
    window.open("http://ndam13.dothome.co.kr/")
});
//

//글자슬라이드

let innerText = document.querySelector(".inner");// eslint-disable-line no-unused-vars

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    /*eslint-disable no-console*/
    console.log("scrollY",value); 
    
    if(value > 950){
        innerText.style.animation='slide1 1s ease-out forwards'
    }else{
        innerText.style.animation="slideback1 1s ease-out"
    }
    

});

let secondText = document.querySelector(".inner2");// eslint-disable-line no-unused-vars

window.addEventListener("scroll",function(){
    let value2 = window.scrollY;
    
    if(value2 > 1420){
        secondText.style.animation='slide2 1s ease-out forwards'
    }else{
        secondText.style.animation='slideback2 1s ease-out'
    }
});


let appear = document.querySelector(".contactme");// eslint-disable-line no-unused-vars

window.addEventListener("scroll",function(){
    let value3 = window.scrollY;
    
    if(value3>1852){
        appear.style.animation='appear 2s forwards'
    }else{
        appear.style.animation='disappear 2s'
    }
    
 })
