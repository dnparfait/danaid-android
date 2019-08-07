exports.create = (dataToSend)=>{
  const {ScrollView,TextView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  localStorage.setItem('serviceId',3);
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  let service = 3;
  const compositeService = new ScrollView({
    top:30,
    bottom:70,
    left:10,
    right:10,
    elevation:6
  });
  let radioOption1 = new RadioButton({text: language.servicePage.service1.name + ' ('+language.servicePage.service1.fees +')',
  top:50,
  checkedTintColor:appBasicsInformations.color.color1,
   checked: true}).on('checkedChanged',(e)=>{
     service = e.value == true?3:service;
     localStorage.setItem('serviceId',service);
   }).appendTo(compositeService);
   let description1 = new TextView({
     top:40,
     left:10,
     right:10,
     height:200,
     font:'13px calibri bold',
     text:language.servicePage.service1.description,
     textColor:appBasicsInformations.color.color3
   }).appendTo(compositeService);
  let radioOption2 = new RadioButton({text: language.servicePage.service2.name + ' ('+language.servicePage.service2.fees +')',
  checkedTintColor:appBasicsInformations.color.color1,
  top:200
  }).on('checkedChanged',(e)=>{
    service = e.value == true?2:service;
    localStorage.setItem('serviceId',service);
  }).appendTo(compositeService);
  let description2 = new TextView({
    top:190,
    left:10,
    right:10,
    height:200,
    font:'13px calibri bold',
    text:language.servicePage.service2.description,
    textColor:appBasicsInformations.color.color3
  }).appendTo(compositeService);
  let radioOption3 = new RadioButton({text: language.servicePage.service3.name + ' ('+language.servicePage.service3.fees +')',
  checkedTintColor:appBasicsInformations.color.color1,
  top:350
  }).on('checkedChanged',(e)=>{
    service = e.value == true?1:service;
    localStorage.setItem('serviceId',service);
  }).appendTo(compositeService);
  let description3 = new TextView({
    top:340,
    left:10,
    right:10,
    height:200,
    font:'13px calibri bold',
    text:language.servicePage.service3.description,
    textColor:appBasicsInformations.color.color3
  }).appendTo(compositeService);
  const serviceTitle = new TextView({
    left:10,
    top:10,
    text:language.servicePage.title,
    font:'18px calibri bold',
    textColor:appBasicsInformations.color.color1
  }).appendTo(compositeService);
  return compositeService;
};
