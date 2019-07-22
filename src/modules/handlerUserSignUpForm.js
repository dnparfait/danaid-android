exports.create = (data)=>{
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  }
  return new Promise((resolve,reject)=>{
    let timeStamp = new Date().getTime();
    const regexMail =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(data.name == '' || data.surname == '' || data.dob == 0 || data.profession == ''
  || data.matrimonialStatut == '' || data.region == '' || data.commune == '' || data.email == ''
|| data.genre == ''){
            resolve({error:true,message:language.userSignUpForm.errorSendingForm.emptyForm});
    }else{
      if(!regexMail.test(data.email)){
        resolve({error:true,message:language.userSignUpForm.errorSendingForm.emailRegex});
      }else if(timeStamp-parseInt(date.dob)<567648000){
        resolve({error:true,message:language.userSignUpForm.errorSendingForm.date});
      }else{
        resolve({error:false});
      }
    }
  });
};
