exports.create = (mainPopover)=>{
  const {ImageView,Picker,contentView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
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
    height:230,
    background:appBasicsInformations.color.color2,
    elevation:4
  }).appendTo(scrollView);
  const imageLogo = new ImageView({
    centerX:0,
    image:'src/images/Danaid-grey.png',
    width:200,
    height:100
  }).appendTo(connectionComposite);
  const chooseAProfileText = new TextView({
    centerX:0,
    height:60,
    top:60,
    text:'STEP 1 - INSERT YOUR NUMBER',
    textColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const listeIndicatifs = ['+237','+45','+33'];
  const selectIndicatif = new Picker({
    itemCount: listeIndicatifs.length,
    itemText: index => listeIndicatifs[index],
    left:15,
    width:100,
    height:60,
    top:100,
    textColor:appBasicsInformations.color.color1,
    borderColor:appBasicsInformations.color.color3,
    message:'+XXX',
    textColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const phoneNumber = new TextInput({
    left:120,
    width:200,
    height:60,
    top:100,
    keyboard:'phone',
    textColor:appBasicsInformations.color.color1,
    borderColor:appBasicsInformations.color.color3,
    message:'XXXXXXXXXX',
    textColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const imageBackPage = new ImageView({
    left:10,
    bottom:20,
    image:'src/icons/left-arrow.png',
    width:100,
    height:30
  }).appendTo(connectionComposite);
  const nextButton = new Button({
    right:10,
    bottom:20,
    text:'CONFIRM',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',()=>{
    this.close();
  });
  return scrollView;
};
