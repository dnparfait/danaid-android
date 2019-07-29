module.exports = ()=>{
  const {AlertDialog,CollectionView,Switch,Popover,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = require('./../helpers/language.js').fr;
  const wrapper = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:0
  });
  const imageContainer = new Composite({
    top:50,
    centerX:0,
    height:100,
    width:100,
    cornerRadius:50,
    background:appBasicsInformations.color.color2,
    elevation:6
  }).appendTo(wrapper);
   const profileImage = new ImageView({
    image:'src/icons/user-silhouette.png',
    top:0,
    left:0,
    right:0
  }).appendTo(imageContainer);
  const name = new TextView({
    centerX:0,
    top:160,
    text:'Hello'+', '+localStorage.getItem('surname'),
    textColor:appBasicsInformations.color.color3
  }).appendTo(wrapper);
  const items = ['Langue', 'Profile informations','App informations','A propos'];
  const profileInfos = new CollectionView({
    left: 20, top: 250, width:200, height: 300,
    itemCount: items.length,
    cellHeight:50,
    createCell: () => new TextView(),
    updateCell: (view, index) =>  {
      view.text = items[index];
      view.font = '18px calibri';
      view.textColor = appBasicsInformations.color.color3;
      if(index === 0){
        //
      }else if(2){
        view.on('tap',()=>{
          new AlertDialog({
            title: items[index],
            message:'Danaid',
            buttons: {ok: 'OK'}
          }).open();
        });
      }else if(3){
        view.on('tap',()=>{
          new AlertDialog({
            title: items[index],
            message:'Danaid V0.1',
            buttons: {ok: 'OK'}
          }).open();
        });
      }
    }
  }).appendTo(wrapper);
  const c1 = new ImageView({
   image:'src/icons/next.png',
   top:315,
   right:10,
   height:20,
   width:50
 }).appendTo(wrapper);
  const switchLanguageComposite = new Composite({
    top:250,
    right:15,
    height:50,
    width:100
  }).appendTo(wrapper);
  const frenchLanguage = new TextView({
    centerY:0,
    left:0,
    text:'FR',
    textColor:appBasicsInformations.color.color3
  }).appendTo(switchLanguageComposite);
  const englishLanguage = new TextView({
    centerY:0,
    right:0,
    text:'EN',
    textColor:appBasicsInformations.color.color3
  }).appendTo(switchLanguageComposite);
  const switcher = new Switch({
    centerX:0,
    centerY:0,
    trackOnColor:'#b0b0b0',
    thumbOnColor:appBasicsInformations.color.color1
  }).appendTo(switchLanguageComposite).on('checkedChanged',(e)=>{
    if(e.value === true){
      language = require('./../helpers/language.js').en;
      localStorage.setItem('language', 'en');
    }else{
      language = require('./../helpers/language.js').fr;
      localStorage.setItem('language', 'fr');
    }
  });
  return wrapper;
};
