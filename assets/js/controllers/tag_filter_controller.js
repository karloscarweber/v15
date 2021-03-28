// assets/js/controllers/tag_filter_controller.js
import { Controller } from "stimulus"
import underscore, { map } from "underscore"
let _ = underscore;

export default class extends Controller {
  // static values = { tags: Array }

  static values = {
    tags: Array,
    filters: Array
  }

  connect() {
    this.traverseTags()
  }

  // filtering callbacks
  toggleFilter(event) {
    var element = event.element
    element.dataset.tag
    console.log(event)
    // console.log( "tags value: ", this.tagsValue)
    applyFilter()
  }

  // traverse tags
  // traverse the tags and adds them to the values.
  traverseTags() {
    var tags = []
    _.each(this.element.getElementsByClassName('tag'), function(element, index, list){
      console.log("tag: ", list[index].dataset.tag)
      this.push(list[index].dataset.tag)
    }, tags)

    this.tagsValue = tags
  }

  applyFilter() {

    var filters = this.filtersValue
    // var include = false

    _.each(document.getElementsByClassName('post-item'), function(element, index, list) {

      var tags = list[index].dataset.tags
      if (Array.isArray(tags) && tags.length) {

        if (_.intersection(tags, filters).length !== 0) {
          // include = true
          element.classList.remove("visible")
        } else {
          // include = false
          element.classList.add("hidden")
        }

      }

      // iterate to next item
    })




  }

}
