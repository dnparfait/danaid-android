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
        //
        data.matricule = data.matricule+''+data.region.charAt(0).toUpperCase()+''+data.commune.charAt(0).toUpperCase();
        let nbSerie1 = (Math.floor(Math.random() * 99) + 10);
        let nbSerie2 = null;
        if(data.genre == 'F'){
          nbSerie2 = 2;
        }else{
          nbSerie2 = 1;
        }
        data.matricule = data.matricule+''+nbSerie1+''+nbSerie2;
        //We set data to localStorage
        localStorage.setItem('name',data.name);
        localStorage.setItem('surname',data.surname);
        localStorage.setItem('matricule',data.matricule);
        //
        require('./views/userPage.js').create();
        resolve({error:false});
      }
    }
  });
};
