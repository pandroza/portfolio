//Page Loader
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 2000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
 
}
//Font Awesome clock
var iEls = document.getElementsByTagName("i");
var iconArr = ["fas fa-eye", "fas fa-dragon", "fas fa-kiwi-bird", "fas fa-flask", "fas fa-ghost fa-1x","fas fa-book-dead fa-1x", "fas fa-atom fa-1x", "fas fa-meteor fa-1x", "fas fa-yin-yang fa-1x", "fas fa-pastafarianism fa-1x"];
setInterval(function() {
var d = new Date();
var h = d.getHours();
var hours = [h]; 
var m = d.getMinutes();  
var mins = [m];          
var s = d.getSeconds();
var secs = [s];
var sM = secs.map(myClock)
var mM = mins.map(myClock)  
var hM = hours.map(myClock)       
function myClock(num) {
  var t = num / 10;
  return Math.floor(t);
}
var s2 = sM*10;
var s3 = s - s2;
var m2 = mM*10;
var m3 = m - m2;
var h2 = hM*10;
var h3 = h - h2;
iEls[0].className = iconArr[hM];
iEls[1].className = iconArr[h3];
iEls[2].className = iconArr[mM];
iEls[3].className = iconArr[m3];
iEls[4].className = iconArr[sM];
iEls[5].className = iconArr[s3];
}, 1000); 

//My Code For Hexaflip projects slideshow
  var pageNames = ["John Peel Tribute Page", "Guitar Lessons Page", "Bike Shop Page","Random Quote Generator ","React Music Creator", "5O US States Game","Survey Page","Technical Document","Floaty Octocat","This Page"];
          var pageInfo = ["Made with HTML, CSS and JavaScript. A tribute page to the influential DJ John Peel. It has a choice of animated backgrounds, some interactive, created with <a id=\"link1\" href = \"https://css-doodle.com/\">CSS-Doodle.</a> Click 'change theme' and background and styles change. Site is responsive and mobile friendly. Site layout changes on different screen sizes. Also contain selection of links to related YouTube content which you can play inside site.","Made with HTML, CSS, and JavaScript. Static site for imaginary guitar lessons business. Site header is animated music notes background created on <a id=\"link1\" href = \"https://css-doodle.com/\">CSS-Doodle</a>, with multiple headings of important info fading in and out. Site responsive and mobile friendly. Site layout changes on different screen sizes. Uses Bootstrap for responsive Nav-Bar and carousel of customer reviews. Has iFrame for potential YouTube content.","Made with HTML, CSS, JavaScript and Bootstrap. A static site for an imaginary Bike Repair company. Background is gallery of stylish images each with bold headings of business's main selling points. Responsive and mobile friendly. Site layout changes on different screen sizes. Uses Bootstrap to create responsive Nav-bar and carousel of customer reviews. Contain's iFrame of YouTube video for business's potential video content.","Made with React, Sass and Bootstrap. A stylised random quote generator for socialist politician and activist Alexandria Ocasio-Cortez aka AOC. Quotes can be Tweeted. Design is based on AOC's posters and uses skewed angles. Has two Bootstrap Carousels, one for the quote and the other for author name, overlayed on each other. CSS-Doodle background.","Made with React. A mini music creator where you can make songs from a large list of different SFX and drum beats. Song can be composed using up to 18 of the samples. Uses a drag and drop API so user can click and drag samples they want in song. Has a compact design where a whole track is contained on one screen. This is an ongoing project which I'm planning to add more features to and make a large as I can.","Made with HTML, CSS and JQuery. A simple word game. You must unscramble and type the names of all 50 U.S states in the time limit. States you must guess are in random order.","Made with HTML, CSS and JavaScript. An example of a survey form made on freeCodeCamp. Has name, number, email, checkboxes and text input fields with HTML5 validation. Site Responsive and mobile friendly. Has clickable <a id=\"link1\" href = \"https://css-doodle.com/\">CSS-Doodle</a> background.","Made with HTML and CSS. An example of a technical document made on freeCodeCamp. Responsive and mobile friendly. Nav-bar switches from top to side positioning based on screen size.", "Made with JavaScript using P5JS library. A simple side scroller game based on Flappy Bird, featuring github mascot Octocat. In this game, you guide Octocat through checkpoints going up, down and left-to-right, and collect 'github coins' Click play button to start.","Made with HTML, CSS and JavaScript. Site is mobile first and responsive. The header has a HH/MM/SS clock that uses <a id=\"link1\" href = \"https://fontawesome.com/\">FontAwesome</a>  Icons. The images are displayed in the projects section using <a id=\"link1\" href = \"https://oxism.com/hexaflip/\">Hexaflip</a> plugin. On large screen has CSS-Doodle background of FontAwesome icons."];
          var pageLinks = ["https://www.pandroza.net/john-peel/", "https://www.pandroza.net/guitar-lessons/", "https://www.pandroza.net/bike-shop/","https://codepen.io/pandroza/pen/WNpQqmr","https://codepen.io/pandroza/pen/PopjrQg?editors=1100","https://codepen.io/pandroza/pen/abpLboP","https://codepen.io/pandroza/full/YzGbyyj","https://codepen.io/pandroza/full/eYBVvby","https://editor.p5js.org/ross.mcinerney82/sketches/ckqmGj-Tt", ""];
var images = ['./hex-pics/johnpeel5.png',
                './hex-pics/guitar-screenshot.png',
                './hex-pics/bikes3.png',
                './hex-pics/aocquote.png',
                './hex-pics/musiccreator.png',
                './hex-pics/canyon.png',
                './hex-pics/survey.png',
                './hex-pics/technic.png',
                './hex-pics/floaty-octocat.png',
                './hex-pics/thispage.png'
            ];
var myHex;
var c = 0;
var hx;
var hexval;
var phx = images[0];
var prevhexval;
var $ic = [];

//Turn jquery collections into DOMs
var $phex = $("#my-hex");
var phex = $phex[0];
//Turn icons into jquery collections array
for(var x = 1; x < 3; x++){
   $ic[x-1] = $("#icon"+ x);
 };
//Make small or large hex
function hexFunction(x) {
  if (window.matchMedia("(min-width: 600px)").matches) {
      $('#my-hex').empty();
      myHex = new HexaFlip(phex, {set: images},{
      size: 275,
      horizontalFlip: true,
      domEvents: {
            
            mouseout: function(e, face, cube) {
                               changeInfo2();
               
            },
             touchmove: function(e, face, cube) {
                 e.preventDefault();
                               changeInfo2();
               
            },
        mouseup: function(e, face, cube) {
              
          changeInfo2();
             
               
             
              
            }
        }  
   });
} else {
   $('#my-hex').empty();
   myHex = new HexaFlip(phex, {set: images},{
   size: 200,
   horizontalFlip: true,
      domEvents: {
           
            mouseout: function(e, face, cube) {
               changeInfo2();
            },
            touchmove: function(e, face, cube) {
                 e.preventDefault();
                               changeInfo2();
               
            },
            mouseup: function(e, face, cube) {
             changeInfo2();
             
               
             
              
            }
        }  
   });
}
}
var x = window.matchMedia("(min-width: 600px)")
hexFunction(x) // Call listener function at run time
x.addListener(hexFunction) // Attach listener function on state changes
/*Flip hex left*/  
$ic[0].on('click', function(){
    myHex.flipBack();
  changeInfo2();
});
/*Flip hex right*/  
$ic[1].on('click', function(){
  myHex.flip();
  changeInfo2();
});

//Function to change text
function changeInfo(){
  $("#para-link").hide(); 
  $("#ph1").hide(); 
  $("#links").attr("href",pageLinks[c]);
  $("#ph1").html(pageNames[c]);
  $("#page-para").html(pageInfo[c]);
  $("#ph1").fadeIn(1000, function() {
  $("#para-link").fadeIn(1000); 
  });
};
//Checks current hex value.If current value different from previous value, text changes
function changeInfo2() {
  setTimeout(function(){
   hexval = myHex.getValue();
   hx = String(hexval);
    let hx2 =  hx.slice(-9, -4); 
    
    for(let i = 0; i < images.length; i++){
      let hx3 =  images[i].slice(-9, -4); 
  
   if(hx2 === hx3){ 
      c = i;
  }
  }
  if(hx !== phx){
    changeInfo()
  };
  prevhexval = myHex.getValue();
  phx = String(prevhexval);
     }, 500);
  }; 

    
            
             

            

            
