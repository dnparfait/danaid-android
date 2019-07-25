module.exports = (navigationViewAnimation,boolAnimation) =>{
  const {contentView,NavigationView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  navigationViewAnimation = new NavigationView({
   left: 0, top: 20, right: 0, bottom: 0, toolbarColor:appBasicsInformations.color.color2, titleTextColor:appBasicsInformations.color.color1
    }).appendTo(contentView);
  if(boolAnimation === true){
      navigationViewAnimation.set({
        opacity:0,
        transform:{scaleX:0,scaleY:0},
       });
      navigationViewAnimation.animate({
         transform: {scaleX:1,scaleY:1},
         opacity:1
       }, {
         delay: 0,
         duration:200,
         repeat:0,
         reverse:false,
         easing: "linear"
       }
    ).then(function(){});
   }

return navigationViewAnimation;
};
