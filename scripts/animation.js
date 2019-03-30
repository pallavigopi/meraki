$(document).ready(function(){
   let i,circle=[];
          for(i=0;i<300;i+=1){
              circle[i] = $('<div id="d'+i+'"><div id="c'+i+'" class="wing"></div></div>'); 
              $('#butterfly').append(circle[i]);
              $("#d"+i).css({"animation":"fly 5s linear "+i/100+"s 1",
                             "margin": i+"px 0px 0px "+ (Math.floor(Math.random() * 1000)) +"px",
                             "opacity":"0"
                           });
              $("#c"+i).css({"animation": "wings 0.5s linear "+i/100+"s infinite",});
          }
  setTimeout(del, 8000);
 function del() { circle=[]; }
  setTimeout(one1, 0);
 function one1() { $("#one").css({"visibility":"visible"}); }
  setTimeout(one2, 8000);
 function one2() { $("#one").css({"visibility":"hidden"}); }
  setTimeout(butterfly1, 0);
 function butterfly1() { $("#butterfly").css({"visibility":"visible"}); }
  setTimeout(butterfly2, 8000);
 function butterfly2() { $("#butterfly").css({"visibility":"hidden"}); }
  setTimeout(two1,8000);
 function two1() { $("#two").css({"visibility":"visible"}); }
  setTimeout(two2, 13000);
 function two2() { $("#two").css({"visibility":"hidden"}); }
  setTimeout(canvas1,8000);
 function canvas1() { $("#canvas").css({"visibility":"visible"}); }
  setTimeout(canvas2,13000);
 function canvas2() { $("#canvas").css({"visibility":"hidden"}); }
  setTimeout(three1,13000);
 function three1() { $("#three").css({"visibility":"visible"}); }
  setTimeout(three2, 15000);
 function three2() { $("#three").css({"visibility":"hidden"}); }
  setTimeout(four1, 15000);
 function four1() { $("#four").css({"visibility":"visible"}); }
  setTimeout(four2, 20000);
 function four2() { $("#four").css({"visibility":"hidden"}); }
  setTimeout(ripple1,15000);
 function ripple1() { $("#ripple").css({"visibility":"visible"}); }
  setTimeout(ripple2, 20000);
 function ripple2() { $("#ripple").css({"visibility":"hidden"}); }
  setTimeout(five1, 20000);
 function five1() { $("#five").css({"visibility":"visible"}); }
  setTimeout(five2, 25000);
 function five2() { $("#five").css({"visibility":"hidden"}); }
   setTimeout(logos, 25000);
 function logos() { $(".logo").css({"visibility":"visible"}); } 
});
