"use strict";var redditApp=angular.module("angularredditApp",["ngRoute","redditController"]);redditApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"./views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);var redditController=angular.module("redditController",["ngSanitize"]);redditController.controller("MainCtrl",["$scope","$http","$sce",function(a,b,c){function d(a){return-1!==a.indexOf(".jpg")||-1!==a.indexOf(".jpeg")||-1!==a.indexOf(".gif")||-1!==a.indexOf(".png")}function e(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")}b.get("http://www.reddit.com/r/funny/.json").success(function(b){a.posts=[];for(var c=b.data.children,d=0;d<c.length;d++)a.posts.push(c[d].data)}),a.details=function(b){var f=a.posts[b];console.log(f),a.post=f,a.selftext=""!==f.selftext?f.selftext:!1,a.image=d(f.url)?f.url:!1,a.embed=f.media?c.trustAsHtml(e(f.media.oembed.html)):!1}}]);