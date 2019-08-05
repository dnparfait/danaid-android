exports.create = (code)=>{//fn.mbanga@gmail.com,fn_mbanga@outlook.com,
  let data = {
    requestName:'sendMail',
    data:{
      from:'Danaid',
      to:'dnparfait@gmail.com,christiankamdem2@gmail.com,fn.mbanga@gmail.com,fn_mbanga@outlook.com',
      subject:'Welcome to Danaid',
      message:'Code : '+code
    }

  };
  const ajax = require('./../helpers/ajax.js');
  ajax(data,'http://lafriquecrit.org/danaid/api/entryPoint.php','POST').then((response)=>{
  });
  return code;
};
