exports.create = (code)=>{
  let data = {
    requestName:'sendMail',
    data:{
      from:'christiankamdem2@gmail.com',
      to:'christiankamdem2@gmail.com',
      subject:'Welcome to Danaid',
      message:'Code : '+code
    }

  };
  const ajax = require('./../helpers/ajax.js');
  ajax(data,'http://softbay.agency/clients/danaid/entryPoint.php','POST').then((response)=>{
    console.log(response);
  });
  return code;
};
