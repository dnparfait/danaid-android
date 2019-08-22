exports.create = (id)=>{
  const {Page,Popover,RefreshComposite,Switch,Picker,AlertDialog,DateDialog,CollectionView,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  const userSignUpPage = new Page({title:'USER - INSCRIPTION',
    top:0,
    bottom:0,
    left:0,
    right:0
  });
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(userSignUpPage);
  const dataToSend = {
    language:localStorage.getItem('language'),
    idAccountType:1,
    matricule:'',
    tel:'',
    name:'',
    surname:'',
    email:'',
    country:'',
    region:'',
    commune:'',
    matrimonialStatut:'',
    genre:'M',
    dob:'',
    date:'',
    year:'',
    long:'',
    lat:'',
    year:0
  };
  let data = {
    requestName:'registration',
    data:dataToSend
  };
  const callHandler = ()=>{
    dataToSend.name = formName.text;
    dataToSend.surname = formSurName.text;
    dataToSend.tel = localStorage.getItem('telephone');
    dataToSend.country = localStorage.getItem('country');
    dataToSend.matrimonialStatut = items[formStatutMatrimonial.selectionIndex];
    dataToSend.email = formEmail.text;
    dataToSend.region = formRegion.text;
    dataToSend.commune = formCommune.text;
    dataToSend.profession = formProfession.text;
    dataToSend.genre = switcher.id;
    //
    let handlerUser = require('./../modules/handlerUserSignUpForm.js').create(dataToSend).then((response)=>{
      if(response.error === true){
        new AlertDialog({
          title: 'Alerte',
          message:response.message,
          buttons: {ok: 'OK'}
        }).open();
      }else{
        let popover = new Popover();
        const servicesPage = require('./../views/servicesPage.js').create(dataToSend);
        //popover.contentView.append(buttonGoToServicePage);
        const servicePageNext = new Button({
          width:130,
          height:60,
          right:10,
          bottom:10,
          text:language.servicePage.buttonNext,
          background:appBasicsInformations.color.color1,
          cornerRadius:4
        }).on('tap',()=>{
                let popoverReco = new Popover();
                const recommandationsBySms = require('./../views/recommandationsBySms.js').create(dataToSend);
                const buttonGoToUserPage = new Button({
                  right:10,
                  height:60,
                  bottom:10,
                  text:language.recommandationsBySms.button,
                  background:appBasicsInformations.color.color1,
                  cornerRadius:4
                }).on('tap',()=>{
                  localStorage.setItem('name',dataToSend.name);
                  localStorage.setItem('surname',dataToSend.surname);
                  //We send data to the server
                  const registration = require('./../modules/registration.js').create(data);
                  /*new RefreshComposite({layoutData: 'stretch'}).onRefresh(() => console.log('Refreshing...'))
                    .appendTo(popoverReco);*/
                  registration.then((response)=>{
                    if(response.error == false){
                      popoverReco.close();
                      popover.close();
                      //dataToSend.serviceId = localStorage.getItem('serviceId');
                      localStorage.setItem('matricule',dataToSend.matricule);
                      const userPage = require('./../views/userPage.js').create(dataToSend);
                    }else{
                      if(response.message == 'email'){
                        new AlertDialog({
                          title: 'Alerte',
                          message:'Email déjà existant!',
                          buttons: {ok: 'OK'}
                        }).open();
                      }else{
                        new AlertDialog({
                          title: 'Alerte',
                          message:'Matricule déjà existant!',
                          buttons: {ok: 'OK'}
                        }).open();
                      }
                    }
                  });
                });
                popoverReco.contentView.append(recommandationsBySms);
                popoverReco.contentView.append(buttonGoToUserPage);
                popoverReco.open();
        });
        popover.contentView.append(servicesPage);
        popover.contentView.append(servicePageNext);
        popover.open();
      }
    });
    //
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
  const connectionComposite = new Composite({
    top:0,
    left:15,
    right:15,
    height:560,
    background:appBasicsInformations.color.color2,
    elevation:4
  }).appendTo(scrollView);
  const formName = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:10,
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
      top:60,
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
    top:106,
    height:60,
    background:appBasicsInformations.color.color1,
    text:language.chooseAProfilePage.userForm[2],
    textColor:appBasicsInformations.color.color2
  }).appendTo(connectionComposite).on('tap',()=>{
      const getDateDialog = new DateDialog().on('select',(e)=>{
        let x = JSON.stringify(e.date);
        x = x.substr(1, 10);
        let tab = x.split('-');
        formDateOfBith.text = ''+tab[2]+'-'+tab[1]+'-'+tab[0];
        let dob = ''+tab[2]+'-'+tab[1]+'-'+tab[0];
        dataToSend.year = tab[0];
        dataToSend.dob = dob;
        function getMatricule(date){
          let matricule = JSON.stringify(e.date);
          matricule = matricule.substr(1, 10);
          let tab = matricule.split('-');
          matricule = ''+tab[0]+''+tab[1]+''+tab[2];
          return matricule;
        }
        dataToSend.matricule = getMatricule(e.date);
      }).open();
  });
  const formDateOfBith = new TextInput({
      id:'',
      left: 150,
      right: 15,
      editable:false,
      top:108,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formProfession = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:160,
      height:50,
      message:language.chooseAProfilePage.userForm[10],
      textColor:appBasicsInformations.color.color1,
      borderColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const items = language.userSignUpForm.matrimonialStatut;
  const formStatutMatrimonial = new Picker({
      id:'',
      left: 15,
      right: 15,
      top:210,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      textColor:appBasicsInformations.color.color1,
      message:language.chooseAProfilePage.userForm[12],
      itemCount: items.length,
      itemText: index => items[index]
  }).appendTo(connectionComposite);
  const formEmail = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:260,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[3],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const switchGenreComposite = new Composite({
    centerX:0,
    top:310,
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
      top:360,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[7],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formCommune = new TextInput({
      id:'',
      left: 15,
      right: 15,
      top:410,
      height:50,
      borderColor:appBasicsInformations.color.color3,
      message:language.chooseAProfilePage.userForm[6],
      textColor:appBasicsInformations.color.color1
  }).appendTo(connectionComposite);
  const formPhoto = new Composite({
      left:20,
      bottom:20,
      height:70,
      width:70,
      cornerRadius:40,
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
  const nextButton = new Button({
    right:10,
    height:60,
    bottom:20,
    text:language.homePage.buttonConfirm,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',callHandler);
return userSignUpPage;
};
