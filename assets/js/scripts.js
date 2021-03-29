// stimulus initializtion
import { Application } from "stimulus"
import underscore, { map } from "underscore"

// import HelloController from "./controllers/hello_controller"
import TagFilterController from "./controllers/tag_filter_controller"
import AttributionController from "./controllers/attribution_controller"

const application = Application.start()
// application.register("hello", HelloController)
application.register("tag-filter", TagFilterController)
application.register("attribution", AttributionController)

let ghostKey = "5c34d61ced340994af2a019ae5";

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


  // hunt for all image caption captions and add data-controller="atribution"
  (function(){
    let captions =

    _.each(document.querySelectorAll(".kg-image-card.kg-card-hascaption"), function(element, index, list){
      element.setAttribute('data-controller', 'attribution');
      element.setAttribute('data-attribution-key-value', ghostKey);
      element.setAttribute('data-attribution-author-value', "whatever")
    })

  })();

}

window.onload = app;
