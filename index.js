//Global Variables
//console.log(document.querySelector(".ten").checked)
var button = $(".submit");
var container = $(".container");
var body = $("body");
var light = $(".light");
var dark = $(".dark");
var bar = $(".bar");
var welcome = $(".welcome");
var aboutUs = $(".aboutUs");
var resources = $(".resources");
var clubsAndClasses = $(".clubsAndClasses");
var navigationBar = $(".navigation-bar");
var heading = $("h1");
var programLinks = $(".programLinks");
var headText = $("a");

dark.on("click", darkMode);
light.on("click", lightMode)

//Function Calls & Event Listeners
button.on("click", showPrograms);

//Function Declarations
function showPrograms (){
  if (document.querySelector(".ten").checked==true) {
    container.empty().append(`<div class = "alexaCafe">
      <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
      <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
      <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
    </div>`);
}
  if (document.querySelector(".eleven").checked==true) {
    container.empty().append(`<div class = "alexaCafe">
      <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
      <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
      <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
    </div>`);
}
    if (document.querySelector(".twelve").checked==true) {
      container.empty().append(`<div class = "alexaCafe">
        <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
        <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
        <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
      </div>`);
}
      if (document.querySelector(".thirteen").checked==true) {
        container.empty().append(`<div class = "alexaCafe">
          <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
          <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
          <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
        </div>`);
        container.append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
}

if (document.querySelector(".fourteen").checked==true) {
  container.empty().append(`<div class = "alexaCafe">
    <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
    <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
    <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
  </div>`);
  container.append(`<div class = "kwk">
      <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
      <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
      <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
    </div>`);
container.append(`  <div class = "gwc">
    <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
    <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
    <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
  </div>`);
}

if (document.querySelector(".fifteen").checked==true) {
  container.empty().append(`<div class = "alexaCafe">
    <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
    <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
    <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
  </div>`);
  container.append(`<div class = "kwk">
      <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
      <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
      <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
    </div>`);
container.append(`  <div class = "gwc">
    <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
    <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
    <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
  </div>`);
}




      if (document.querySelector(".sixteen").checked==true) {
        container.empty().append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
          container.append(`<div class = "gwc">
              <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
              <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
              <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
            </div>`);

}

      if (document.querySelector(".seventeen").checked==true) {
        container.empty().append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
}

    if (document.querySelector(".eighteen").checked==true) {
      container.empty().append(`<div class = "kwk">
          <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
          <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
          <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
        </div>`);
  }

}
// dark and light modes


function darkMode(){
  console.log("dark mode activated");
  welcome.css("background-color", "black");
  welcome.css("color","#39ff14")
  bar.css("background-color", "black");
  aboutUs.css("background-color", "black");
  aboutUs.css("color", "#39ff14");
  resources.css("background-color", "black");
  resources.css("color", "#39ff14");
  clubsAndClasses.css("background-color","black");
  clubsAndClasses.css("color", "#39ff14");
  navigationBar.css("background-color", "black");
  navigationBar.css("color", "#d519ff");
  heading.css("background-color", "black");
  heading.css("color", "#ff247f");
  programLinks.css("background-color", "black");
  headText.css("color", "#d519ff");
  body.css("background-color", "black");
  button.css("background-color", "#ff247f")
  light.css("background-color", "#ff247f")
  dark.css("background-color", "#ff247f")
}

function lightMode(){
  console.log("light mode activated");
  welcome.css("background-color", "#e3fcfc");
  welcome.css("color","#FF69B4")
  bar.css("background-color", "#e3fcfc");
  aboutUs.css("background-color", "#e3fcfc");
  aboutUs.css("color", "#FF69B4");
  resources.css("background-color", "#e3fcfc");
  resources.css("color", "#FF69B4");
  clubsAndClasses.css("background-color","#e3fcfc");
  clubsAndClasses.css("color", "#FF69B4");
  navigationBar.css("background-color", "#e3fcfc");
  navigationBar.css("color", "#FF69B4");
  heading.css("background-color", "#e3fcfc");
  heading.css("color", "#FF69B4");
  programLinks.css("background-color", "#e3fcfc");
  headText.css("color", "#FF69B4");
  body.css("background-color","white");
  button.css("background-color","#FF69B4");
  light.css("background-color","#FF69B4");
  dark.css("background-color","#FF69B4");
}
