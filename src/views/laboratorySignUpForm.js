exports.create = ()=>{
  const {Popover,Switch,Picker,AlertDialog,DateDialog,CollectionView,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let dataToSend = {
    language:localStorage.getItem('language'),
    idAccountType:4,
    tel:'',
    name:'',
    surname:'',
    email:'',
    country:'',
    region:'',
    commune:'',
    establishment_name:'',
    genre:'M',
    dob:0,
    long:'',
    lat:''
  };
  const callHandler = ()=>{
    dataToSend.name = formName.text;
    dataToSend.surname = formSurName.text;
    dataToSend.country = localStorage.getItem('telephone');
    dataToSend.country = localStorage.getItem('country');
    dataToSend.establishment_name = establishment_name.text;
    dataToSend.email = formEmail.text;
    dataToSend.region = formRegion.text;
    dataToSend.commune = formCommune.text;
    dataToSend.profession = formProfession.text;
    dataToSend.genre = switcher.id;
    let handlerUser = require('./../modules/handlerUserSignUpForm.js').create(dataToSend).then((response)=>{
      if(response.error === true){
        new AlertDialog({
          title: 'Alerte',
          message:response.message,
          buttons: {ok: 'OK'}
        }).open();
      }else{
        let popover = new Popover();console.log('reussit');
        const recommandationsBySms = require('./../views/recommandationsBySms.js').create();
        const skipValidate = new Button({
          right:10,
          height:60,
          bottom:20,
          text:language.recommandationsBySms.button,
          background:appBasicsInformations.color.color1,
          cornerRadius:4
        }).on('tap',()=>{
          popover.close();
        });
        popover.contentView.append(skipValidate);
        popover.contentView.append(recommandationsBySms);
        popover.open();
      };
    });
    };
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  localStorage.setItem('type_account_id',1);
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
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  });
  const connectionComposite = new Composite({
    centerY:0,
    left:15,
    right:15,
    height:580,
    background:appBasicsInformations.color.color2,
    elevation:4
  }).appendTo(scrollView);
  const formName = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:30,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[0],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite).on('tap',(e)=>{
      formName.id = e.value;
      dataToSend.name = e.value;
  });
  const formSurName = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:80,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[1],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite).on('tap',(e)=>{
      dataToSend.surname = e.value;
  });
  const getDate = new Button({
    id:0,
    left: 15,
    width: 120,
    top:126,
    height:60,
    background:appBasicsInformations.color.color1,
    text:language.chooseAProfilePage.userForm[2],
    textColor:appBasicsInformations.color.color2
  }).appendTo(connectionComposite).on('tap',()=>{
      const getDateDialog = new DateDialog().on('select',(e)=>{
        formDateOfBith.text = e.date;
        dataToSend.dob = e.timeStamp;
      }).open();
  });
  const formDateOfBith = new TextInput({
      id:'',
      left: 150,
      right: 15,
      editable:false,
      top:128,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formProfession = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:180,
      height:50,
      message:language.chooseAProfilePage.userForm[10],
      textColor:appBasicsInformations.color.color1,
      borderColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const establishment_name = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:230,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      textColor:appBasicsInformations.color.color1,
      message:language.chooseAProfilePage.userForm[15],
  }).appendTo(connectionComposite);
  const formEmail = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:280,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[3],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const switchGenreComposite = new Composite({
    centerX:0,
    top:330,
    height:50,
    width:180,
    background:appBasicsInformations.color.color2,
    cornerRadius:20,
    elevation:6
  }).appendTo(connectionComposite);
  const maleGenre = new TextView({
    centerY:0,
    left:10,
    text:language.userSignUpForm.genreText[0],
    textColor:appBasicsInformations.color.color3
  }).appendTo(switchGenreComposite);
  const femaleGenre = new TextView({
    centerY:0,
    right:10,
    text:language.userSignUpForm.genreText[1],
    textColor:appBasicsInformations.color.color3
  }).appendTo(switchGenreComposite);
  const switcher = new Switch({
    id:'M',
    centerX:0,
    centerY:0,
    trackOnColor:'#b0b0b0',
    thumbOnColor:appBasicsInformations.color.color1
  }).appendTo(switchGenreComposite).on('checkedChanged',(e)=>{
    switcher.id = e.value==false?'M':'F';
  });
  const formRegion = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:380,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[7],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formCommune = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:430,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[6],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formPhoto = new Composite({
      left:20,
      bottom:10,
      height:80,
      width:80,
      cornerRadius:40,
      background:appBasicsInformations.color.color2,
      elevation:6
  }).appendTo(connectionComposite);
  const imageProfile = new ImageView({
    image:'./src/icons/user-silhouette.png',
    top:0,
    left:0,
    right:0,
    bottom:0,
    scaleMode:'fit'
  }).appendTo(formPhoto).on('tap',takePhotoProfile);
  const nextButton = new Button({
    right:10,
    height:60,
    bottom:10,
    text:language.homePage.buttonConfirm,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',callHandler);
  return scrollView;
};
