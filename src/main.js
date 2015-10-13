//IIFE

// (function () {

//   var templateString = $("#itemTemplate").text();

//   var renderTemplate = _.template(templateString);

//   _.each(etsy.results, function(item) {
//     var gulp    = require('gulp');
//     var sass    = require('gulp-sass');
//     var plumber = require('gulp-plumber');
//     var notify  = require('gulp-notify');
//     var babel   = require('gulp-babel');
//     var bower   = require('main-bower-files');
//     var concat  = require('gulp-concat');
//     var server  = require('gulp-server-livereload');


//      console.log(item);

//      var freshHTML = renderTemplate(item);
//      $('.forsaleimages').append(freshHTML);
//   });

// }());


(function () {

  let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';


  $.ajax({
      url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
    }) .then (function (response) {
         console.log(response);

  var templateString = $("#itemTemplate").text();

  var renderTemplate = _.template(templateString);

  _.each(response.results, function(item) {

     console.log(item);

     var freshHTML = renderTemplate(item);
     $('.Container').append(freshHTML);
  });

  });

}());










//(function () {

  //let data = {
    //url: 'https://api.etsy.com/v2/listings/active.?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  //}

  //let url = 'https://jsonp.afeld.me/' + '?url=' + estyURL;

  //$.getJSON(url)
   //  .then( function (response) {
    //    console.log(response);

     //}

// homework oct 12 is above//


  //let cb = function (data) {
 //     console.log(data);

  //};

  //***If you use .js in http, then use ajax

  // (function () {

   
   // }());     
    


