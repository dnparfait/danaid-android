exports.create = (data)=>{
    const ajax = require('./../helpers/ajax.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  }
  return new Promise((resolve,reject)=>{
    let d = new Date();
    let currentYear = d.getFullYear();
    let userYear = data.year;
if(data.name == '' || data.surname == '' || data.dob == '' || data.genre == ''){
            resolve({error:true,message:language.userSignUpForm.errorSendingForm.emptyForm});
    }else{
          //We send data to server
          //require('./../helpers/registrationDataToServer.js').create(data);
              resolve({error:false});
    }
  });
};
