var app = angular.module('messageApp', []);
app.config(function(myMessageProvider){
  myMessageProvider.setName('Dave');
});
