exports.create = (dataToSend)=>{
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  }
  return new Promise((resolve,reject)=>{
      dataToSend.serviceId = localStorage.getItem('serviceId');
      console.log(dataToSend);
      resolve({error:false});
  });
};
