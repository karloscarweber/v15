// stimulus initializtion
import { Application } from "stimulus"
import underscore, { map } from "underscore"

// import HelloController from "./controllers/hello_controller"
import TagFilterController from "./controllers/tag_filter_controller"

const application = Application.start()
// application.register("hello", HelloController)
application.register("tag-filter", TagFilterController)

let _ = underscore;

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
