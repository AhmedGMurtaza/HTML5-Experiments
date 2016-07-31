// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('monsterworld', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }

  var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) {
      admobid = { // for Android
        banner: 'ca-app-pub-8737366443143373/6747177044',
        interstitial: 'ca-app-pub-8737366443143373/6747177044'
      };
    } 

    function createSelectedBanner(){
    if(AdMob) AdMob.createBanner({
      adId: admobid.banner,
      overlap: $('#overlap').is(':checked'),
      offsetTopBar: $('#offsetTopBar').is(':checked'),
      adSize: $('#adSize').val(),
      position: $('#adPosition').val(),
    });
  }
  function showBannerAtPosition(){
    if(AdMob) AdMob.showBanner( $('#adPosition').val() );
  }
  function onDeviceReady() {
    if (! AdMob) { alert( 'admob plugin not ready' ); return; }
    initAd();
    // display a banner at startup
    createSelectedBanner();
  }
  function initAd(){
    AdMob.getAdSettings(function(info){
      console.log('adId: ' + info.adId + '\n' + 'adTrackingEnabled: ' + info.adTrackingEnabled);
    }, function(){
      console.log('failed to get user ad settings');
    });
    AdMob.setOptions({
      // adSize: 'SMART_BANNER',
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
      isTesting: true, // set to true, to receiving test ad for testing purpose
      bgColor: 'black', // color name, or '#RRGGBB'
      // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
      // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    });

}


  });
});

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('menu', {
            url: "/",
            templateUrl: "templates/menu.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "templates/about.html"
        })
        .state('instruction', {
            url: "/instructions",
            templateUrl: "templates/instructions.html"
        })
        // .state('game',{
        //     url:'/game',
        //     templateUrl:'templates/game.html',
        //     controller:'gameController'
        // })
        // .state('game.scoreboard',{
        //     url:'/scoreboard',
        //     templateUrl:'templates/scoreboard.html'
        // })

        $urlRouterProvider.otherwise('/');
})


.controller('gamecontroller', function($scope, $window){
  $scope.score = 0;
});


if( ionic.Platform.isAndroid() )  { 
   admobid = { // for Android
      banner: 'ca-app-pub-8737366443143373/6747177044' // Change this to your Ad Unit Id for banner...
   };

   if(AdMob) 
      AdMob.createBanner( {
         adId:admobid.banner, 
         position:AdMob.AD_POSITION.BOTTOM_CENTER, 
         autoShow:true
      } );
}

document.addEventListener('onAdLoaded', function(e){
   // Handle the event...
});