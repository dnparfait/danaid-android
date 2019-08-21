exports.create = (data)=>{
  const ajax = require('./../helpers/ajax.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  }
  return new Promise((resolve,reject)=>{console.log('________________');console.log(data);
      data.data.serviceId = localStorage.getItem('serviceId');
      ajax(data,'https://www.danaid.org/api/entryPoint.php','POST').then((response)=>{
        if(response.error == false){
          resolve({error:false});
        }
      });
  });
};
