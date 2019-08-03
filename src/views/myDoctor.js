module.exports = ()=>{
  const {Composite,TextView,ScrollView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const compositeMyDoctor = new ScrollView({
    top:100,
    bottom:0,
    left:10,
    right:10,
    elevation:6
  });
  const doctorImage = new ImageView({
   image:'src/icons/doctorGrey.png',
   top:5,
   left:10,
   right:10,
   height:200
 }).appendTo(compositeMyDoctor);
 const nameTitle = new TextView({
   top:210,
   left:10,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'Name'
 }).appendTo(compositeMyDoctor);
 const name = new TextView({
   top:230,
   left:10,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:'Christian Kamdem'
 }).appendTo(compositeMyDoctor);
 const surnameTitle = new TextView({
   top:260,
   left:10,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'Surname'
 }).appendTo(compositeMyDoctor);
 const surname = new TextView({
   top:280,
   left:10,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:'Christian Kamdem'
 }).appendTo(compositeMyDoctor);
 const specialityTitle = new TextView({
   top:310,
   left:10,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'Spciality'
 }).appendTo(compositeMyDoctor);
 const speciality = new TextView({
   top:330,
   left:10,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:'Chirugien'
 }).appendTo(compositeMyDoctor);
 const regionTitle = new TextView({
   top:360,
   left:10,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'Region'
 }).appendTo(compositeMyDoctor);
 const region = new TextView({
   top:380,
   left:10,
   textColor:appBasicsInformations.color.color3,
   font:'16px calibri bold',
   text:'West'
 }).appendTo(compositeMyDoctor);
  return compositeMyDoctor;
};
