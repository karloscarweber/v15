
let app = function(){

  // Monitor open or close the menu.
  (function(){
    let menubutton = document.querySelector(".expand_menu_button");
    let extendedmenu = document.querySelector(".expanding_menu_container");
    let menu_backtround = document.querySelector(".expanding_menu_background");

    menubutton.onclick = function(){
      if (_.contains(menubutton.classList, "opened") && !(_.contains(menubutton.classList, "transitioning"))) {
        menubutton.classList.remove("opened");
        extendedmenu.classList.remove("opened");
        menu_backtround.classList.remove("opened");

        // keep the menu from being all crazy
        menubutton.classList.add("transitioning");
        extendedmenu.classList.add("transitioning");

        setTimeout(function(){
          menubutton.classList.remove("transitioning");
          extendedmenu.classList.remove("transitioning");
        }, 1550);
      } else if ( !(_.contains(menubutton.classList, "transitioning"))){
        menubutton.classList.add("opened");
        extendedmenu.classList.add("opened");
        menu_backtround.classList.add("opened");

        // keep the menu from being all crazy
        menubutton.classList.add("transitioning");
        extendedmenu.classList.add("transitioning");

        setTimeout(function(){
          menubutton.classList.remove("transitioning");
          extendedmenu.classList.remove("transitioning");
        }, 1550);
      }
    }

  })();

}

window.onload = app;
