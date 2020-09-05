let app = function(){


  console.log("run app")
  // Monitor open or close the menu.
  (function(){
    let menubutton = document.querySelector(".scene");
    // let extendedmenu = document.querySelector(".expanding_menu_container");
    // let menu_backround = document.querySelector(".expanding_menu_background");

    menubutton.onclick = function(){
      if (_.contains(menubutton.classList, "opened")) {
        menubutton.classList.remove("opened");
        // extendedmenu.classList.remove("opened");
        // menu_backround.classList.remove("opened");
        //
        // // keep the menu from being all crazy
        // menubutton.classList.add("transitioning");
        // extendedmenu.classList.add("transitioning");
        //
        // setTimeout(function(){
        //   menubutton.classList.remove("transitioning");
        //   extendedmenu.classList.remove("transitioning");
        // }, 1550);
      } else {
        menubutton.classList.add("opened");
        // extendedmenu.classList.add("opened");
        // menu_backround.classList.add("opened");
        //
        // // keep the menu from being all crazy
        // menubutton.classList.add("transitioning");
        // extendedmenu.classList.add("transitioning");
        //
        // setTimeout(function(){
        //   menubutton.classList.remove("transitioning");
        //   extendedmenu.classList.remove("transitioning");
        // }, 1550);
      }
    }

  })();

}

window.onload = app;
