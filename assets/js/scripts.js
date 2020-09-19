let app = function(){

  // Monitor open or close the menu.
  (function(){
    let menubutton = document.querySelector(".scene");
    let menu = document.querySelector(".header_menu");
    let body = document.querySelector("body");

    menubutton.onclick = function(){
      if (_.contains(menubutton.classList, "opened")) {
        menubutton.classList.remove("opened");
        menu.classList.remove("opened");
        body.classList.remove("rigid");
    
      } else {
        menubutton.classList.add("opened");
        menu.classList.add("opened");
        body.classList.add("rigid");

      }
    }

  })();

}

window.onload = app;
