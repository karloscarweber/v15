// assets/js/controllers/attribution_controller.js
import { Controller } from "stimulus"
import underscore, { map } from "underscore"
let _ = underscore;

export default class extends Controller {
  // static values = { tags: Array }

  static values = {
    key: String
  }

  connect() {
    // this.traverseTags()
    this.findAuthor()
    // this.load()
  }

  findAuthor() {
    var element = this.element.getElementsByTagName('figcaption')
    var authorRegEx = /author:([a-z]+)/g;

    if(element.length > 0) {
      var text = element[0].innerHTML
      var replacedText = text.replace(authorRegEx, 'By <a href="\/author\/$1">$1<\/a>')
      element[0].innerHTML = replacedText
    }
  }


  // load stuff for later if we need it.

  // load() {
  //   var url = "/ghost/api/v3/content/authors/?key="
  //   fetch(url.concat(this.keyValue))
  //     .then(response => response.text())
  //     .then(json => {
  //
  //       let authors = JSON.parse(json).authors
  //       _.each(authors, function(element, index, list){
  //
  //       })
  //
  //       console.log("we got data", authors[1])
  //     })
  // }

}
