module.exports = ()=>{
  const {Composite,DateDialog,Picker,Switch,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const takePhotoProfile = ()=>{
    function floatingButton(wrapperProfilePicture){
       wrapperProfilePicture.on('tap',({target})=>{
           const actionSheetOptions = [{title:"L'appareil photo", image: {width:30,height:30,src:'src/icons/photo-camera.png'}},{title:"La gallerie", image: {width:30,height:30,src: 'src/icons/gallery.png'}}];
           require('./../helpers/actionSheet.js')('Selectionnez une photo depuis',actionSheetOptions).then((responseAs)=>{
             let getPictureByCameraOrGallery;
             if(responseAs === "L'appareil photo"){
               getPictureByCameraOrGallery = require("./../helpers/getPictureByCameraOrGallery.js");
               console.log(Camera.PictureSourceType.CAMERA);
             }else{
               getPictureByCameraOrGallery = require("./../helpers/getPictureByCameraOrGallery.js");
               console.log(getPictureByCameraOrGallery);
             }
             getPictureByCameraOrGallery.then((newImagePath)=>{console.log('hello image4');
               wrapperProfilePicture.contentView(activityIndicator);
               require('./../helpers/plugins/uploadProfilePicture.js')(newImagePath)
               .then((responseUpload)=>{
                 if(responseUpload === "Pas de connexion internet"){
                   activityIndicator.detach();
                   toast(responseUpload,4000,"bottom");
                 }else{
                   const responseServer = JSON.parse(responseUpload.response);
                   /*if(responseServer.Message === 'Photo de profil uploade'){
                     // Requete Ajax pour mettre à jour la photo de profil
                     // Je reprend a nouveau le localStorage parcequ'il peut avoir été mis à jour
                     // Par une mise à jour du numéro de téléphone
                     ajax(JSON.stringify(dataToSend))
                     .then((responseUpdatePicture)=>{
                       activityIndicator.detach();
                       if(responseUpdatePicture.Message === "Photo de profil mise à jour"){
                         // On récupere la photo de profil et on la deplace vers le dossier MyProfilePicture
                         const getTheFileOrDirectory = require("../helpers/plugins/verifyIfDirectoryOrFileExist");
                         getTheFileOrDirectory(cordova.file.externalCacheDirectory,newImagePath.split("/").pop())
                         .then((fileEntry)=>{
                           getTheFileOrDirectory(cordova.file.dataDirectory,"/files/MyProfilePicture")
                           .then((directoryEntry)=>{
                             const newImageName = require("../helpers/createNewNameForFile.js")(objectUserInformations.uniqueId);
                             require("../helpers/plugins/moveFileToFolder.js")(fileEntry,`${newImageName}.jpeg`,directoryEntry)
                             .then((newFileEntry)=>{
                               const pathOfProfilePicture = `${cordova.file.dataDirectory}files${newFileEntry.fullPath}?${Date.now()}`;
                               scrollView.find("#profilePicture")[0].dispose();
                               new ImageView({width:142,height:142,cornerRadius:71,centerX:0,centerY:0,image:{src:pathOfProfilePicture},scaleMode:'stretch',id:"profilePicture"}).appendTo(wrapperProfilePicture);
                               updateDb('UPDATE yoolearn_teachers SET profile_picture = ? WHERE id = ?', [pathOfProfilePicture,objectUserInformations.uniqueId]);
                             });
                           });
                         });
                       }else if(responseUpdatePicture === "Pas de connexion internet"){
                         toast(responseUpdatePicture,4000,"bottom");
                       }
                     });
                   }*/
                 }
               });
             });
           });
       });
     }
     floatingButton(imageProfile);
  };
  const connectionComposite = new ScrollView({
    top:50,
    left:10,
    right:10,
    bottom:70
  });
  const formPhoto = new Composite({
      centerX:0,
      top:320,
      height:100,
      width:100,
      cornerRadius:30,
      background:appBasicsInformations.color.color2,
      elevation:6
  }).appendTo(connectionComposite);
  const imageProfile = new ImageView({
    image:'src/icons/user-silhouette.png',
    left:0,
    right:0,
    bottom:0,
    scaleMode:'fit'
  }).appendTo(formPhoto).on('tap',takePhotoProfile);
  return connectionComposite;
};
