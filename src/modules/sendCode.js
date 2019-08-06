exports.create = (code)=>{//fn.mbanga@gmail.com,fn_mbanga@outlook.com,dnparfait@gmail.com
  let data = {
    requestName:'sendMail',
    data:{
      from:'Danaid',
      to:'christiankamdem2@gmail.com,
      subject:'Welcome to Danaid',
      message:'Code : '+code
    }

  };
  const ajax = require('./../helpers/ajax.js');
  ajax(data,'http://lafriquecrit.org/danaid/api/entryPoint.php','POST').then((response)=>{
  });
  return code;
};
