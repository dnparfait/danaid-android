exports.create = (code)=>{
  let data = {
    requestName:'sendMail',
    data:{
      from:'Danaid',
      to:'fn.mbanga@gmail.com,fn_mbanga@outlook.com,christiankamdem2@gmail.com',
      subject:'Welcome to Danaid',
      message:'Code : '+code
    }

  };
  const ajax = require('./../helpers/ajax.js');
  ajax(data,'http://softbay.agency/clients/danaid/entryPoint.php','POST').then((response)=>{
  });
  return code;
};
