module.exports = ()=>{
  const {Composite,TextView,ScrollView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const compositeCard = new ScrollView({
    top:100,
    bottom:0,
    left:10,
    right:10,
    elevation:6
  });
  const profileImageWrapper = new Composite({
    top:5,
    height:280,
    left:10,
    right:10,
    cornerRadius:4,
    elevation:6,
    background:appBasicsInformations.color.color2
  }).appendTo(compositeCard);
  const profileInfosWrapper = new Composite({
    top:310,
    height:200,
    left:10,
    right:10,
    cornerRadius:4,
    elevation:6,
    background:appBasicsInformations.color.color2
  }).appendTo(compositeCard);
  const myProfileImage = new ImageView({
    centerX:0,
    centerY:0,
   image:'src/icons/user-silhouette.png',
   scaleMode:'fit'
 }).appendTo(profileImageWrapper);
 const profileIcon = new ImageView({
  image:'src/icons/add-contact.png',
  top:10,
  left:10,
  height:25,
  width:30
}).appendTo(profileInfosWrapper);
 const fullnameTitle = new TextView({
   top:5,
   left:60,
   textColor:appBasicsInformations.color.color1,
   font:'16px calibri bold',
   text:'Name & Surname'
 }).appendTo(profileInfosWrapper);
 const fullname = new TextView({
   top:25,
   left:60,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:localStorage.getItem('name') + ' ' + localStorage.getItem('surname')
 }).appendTo(profileInfosWrapper);
 const serviceIcon = new ImageView({
  image:'src/icons/24-hours.png',
  top:50,
  left:10,
  height:25,
  width:30
}).appendTo(profileInfosWrapper);
 const serviceTitle = new TextView({
   top:45,
   left:60,
   textColor:appBasicsInformations.color.color1,
   font:'16px calibri bold',
   text:'Service'
 }).appendTo(profileInfosWrapper);
 const service = new TextView({
   top:65,
   left:60,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:'Access'
 }).appendTo(profileInfosWrapper);
 const telIcon = new ImageView({
  image:'src/icons/phone-call.png',
  top:90,
  left:10,
  height:25,
  width:30
}).appendTo(profileInfosWrapper);
 const telTitle = new TextView({
   top:85,
   left:60,
   textColor:appBasicsInformations.color.color1,
   font:'16px calibri bold',
   text:'Telephone'
 }).appendTo(profileInfosWrapper);
 const tel = new TextView({
   top:105,
   left:60,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:localStorage.getItem('telephone')
 }).appendTo(profileInfosWrapper);
 const matriculeIcon = new ImageView({
  image:'src/icons/terminal.png',
  top:140,
  left:10,
  height:25,
  width:30
}).appendTo(profileInfosWrapper);
 const matriculeTitle = new TextView({
   top:135,
   left:60,
   textColor:appBasicsInformations.color.color1,
   font:'16px calibri bold',
   text:'Matricule'
 }).appendTo(profileInfosWrapper);
 const matricule = new TextView({
   top:155,
   left:60,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:localStorage.getItem('matricule')
 }).appendTo(profileInfosWrapper);
  return compositeCard;
};
