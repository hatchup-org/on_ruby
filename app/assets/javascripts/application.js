/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
//= require jquery
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require vendor/jquery.collapser
//= require navi
//= require utility
//= require custom
//= require map
//= require dropdown

$(function() {
  Utility.disable();
});

$.fn.random = function() {
  return this.eq(Math.floor(Math.random() * this.length));
};
