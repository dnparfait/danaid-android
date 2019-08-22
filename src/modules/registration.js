exports.create = (data)=>{
  const ajax = require('./../helpers/ajax.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  }
  return new Promise((resolve,reject)=>{
      data.data.serviceId = localStorage.getItem('serviceId');
      ajax(data,'https://www.danaid.org/danaid/api/entryPoint.php','POST').then((response)=>{
        resolve(response);
      });
  });
};
