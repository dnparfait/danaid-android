module.exports = ()=>{
  const {Composite,TextView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const compositeService = new Composite({
    top:100,
    height:300,
    left:10,
    right:10,
    elevation:6
  });
  let radioOption1 = new RadioButton({text: 'Access (XAF. 3.500 /m)',
  top:50,
  checkedTintColor:appBasicsInformations.color.color1,
   checked: true}).appendTo(compositeService);
  let radioOption2 = new RadioButton({text: 'Assist (XAF. 6.500 /m)',
  checkedTintColor:appBasicsInformations.color.color1,
  top:100
  }).appendTo(compositeService);
  let radioOption3 = new RadioButton({text: 'Serenity (XAF. 9.500 /m)',
  checkedTintColor:appBasicsInformations.color.color1,
  top:150
  }).appendTo(compositeService);
  const serviceTitle = new TextView({
    centerX:0,
    top:10,
    text:'CHOOSE A SERVICE',
    font:'16px calibri thin',
    textColor:appBasicsInformations.color.color3
  }).appendTo(compositeService);
  return compositeService;
};
