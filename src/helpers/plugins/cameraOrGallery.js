module.exports = (sourceOfPicture)=>{
 'use strict';
 return new Promise((resolve)=>{
    const optionsCamera = {
 		  destinationType: Camera.DestinationType.NATIVE_URI,
 		  quality: 75,
 		  encodingType: 0,
 		  allowEdit: false,
 		  targetWidth: 650,
 		  targetHeight: 650,
 		  sourceType: sourceOfPicture,
 		  correctOrientation: true,
      saveToPhotoAlbum: true,
      cameraDirection:1
 		};
    function success(imageData){
     resolve(imageData);
    }
    function error(e){
      console.log(e);
    }
    navigator.camera.getPicture(success, error, optionsCamera);
  });
};
