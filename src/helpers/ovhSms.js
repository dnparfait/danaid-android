exports.create = (code)=>{
  /*let ovh = require('ovh')({
  appKey: 'nPThMyRLX15VrN6f',
  appSecret: 'bv94VCKAOAWvQQO0skhTx861xPvDs9mG',
  consumerKey: 'JawPTO2pApJtD8mfVyReQYZ14DTFzjr9'
});*/
 // Get the serviceName (name of your sms account)
 const ajax = require('./../helpers/ajax.js');
 ajax(data,'http://www.danaid.org/danaid/api/vendors/ovhSms/','POST').then((response)=>{
 });
  return true;
};
