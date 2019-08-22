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
    const regexMail =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(data.name == '' || data.surname == '' || data.dob == '' || data.profession == ''
  || data.matrimonialStatut == '' || data.region == '' || data.commune == '' || data.email == ''
|| data.genre == ''){
            resolve({error:true,message:language.userSignUpForm.errorSendingForm.emptyForm});
    }else{
      if(!regexMail.test(data.email)){
        resolve({error:true,message:language.userSignUpForm.errorSendingForm.emailRegex});
      }else{
        if(currentYear-userYear<18){
          resolve({error:true,message:language.userSignUpForm.errorSendingForm.date});
        }else{
          //We send data to server
          //require('./../helpers/registrationDataToServer.js').create(data);
              resolve({error:false});
        }
      }
    }
  });
};
