exports.create = (code,phoneNumber)=>{//fn.mbanga@gmail.com,fn_mbanga@outlook.com,dnparfait@gmail.com
  let data = {
    requestName:'sendMail',
    data:{
      from:'Danaid',
      to:'danaservices237@gmail.com',
      subject:'Welcome to Danaid : '+phoneNumber,
      message:'Code : '+code
    }

  };
  const ajax = require('./../helpers/ajax.js');
  ajax(data,'https://www.danaid.org/danaid/api/entryPoint.php','POST').then((response)=>{
  });
  //require('./../helpers/ovhSms.js').create(code);
  return code;
};
