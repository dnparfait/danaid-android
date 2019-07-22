exports.create = ()=>{
  const {Composite,Popover,Button} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let popup = new Popover();
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const cancelButton = new Button({
    bottom:0,
    left:0,
    width:100,
    background:appBasicsInformations.color.color1,
    text:language.takePhotoProfile.cancelButton
  }).on('tap',()=>{
    popup.close();
  });
  const previewPhoto = new Composite({
    centerX:0,
    centerY:0,
    width:300,
    height:300,
    elevation:4,
    background:appBasicsInformations.color.color2
  }).on("tap", function() {console.log(navigator);
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      targetWidth: 1024,
      targetHeight: 1024,
      destinationType: window.Camera.DestinationType.FILE_URI
    });
    function onSuccess(imageUrl) {
      previewPhoto.set("image", {src: imageUrl});
    }
    function onFail(message) {
      console.log("Camera failed because: " + message);
    }
  });
  const doneButton = new Button({
    bottom:0,
    right:0,
    width:100,
    background:appBasicsInformations.color.color1,
    text:language.takePhotoProfile.doneButton
  }).on('tap',()=>{
    popup.close();
  });

  popup.contentView.append(previewPhoto);
  popup.contentView.append(cancelButton);
  popup.contentView.append(doneButton);
  return popup;
};
