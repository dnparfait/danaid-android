module.exports = ()=>{
return new Promise((resolve)=>{
  const ajax = require('./ajax.js');
  //Get access_token
  ajax({Authorization:"Basic MHRYaW5qQWU5VEd3VVZHSUFXQW1GS2JtWkpVdzBkaEE6MXRmQ0d6aFNSeDA1V1c2OA=="
  },'https://api.orange.com/oauth/v2/token','POST').then((response)=>{
    console.log(response);
            console.log(response);
          }).catch((error)=>{console.log(error);
          });
  //
  const url = 'https://api.orange.com/oauth/v2/';
  let dataToSend = {
      outboundSMSMessageRequest: {
        address: "237698075801",
        outboundSMSTextMessage: {
          message: "Hello"
        },
          senderAddress: "237698075801",
          senderName: "237698075801"
        },
        headers: { "Content-Type": "application/json",
             "Authorization": "Basic MHRYaW5qQWU5VEd3VVZHSUFXQW1GS2JtWkpVdzBkaEE6MXRmQ0d6aFNSeDA1V1c2OA==" }
  };
  let credentials= 'Basic MHRYaW5qQWU5VEd3VVZHSUFXQW1GS2JtWkpVdzBkaEE6MXRmQ0d6aFNSeDA1V1c2OA==';
      let postData = "";
      postData += "grant_type=client_credentials";
        let options = {
            host: 'api.orange.com',
            path: '/oauth/v2/token'
        };
        options['method'] = 'POST';
        options['headers'] = {
            'Authorization': credentials,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        };
  //
  ajax(dataToSend,url,'POST').then((response)=>{console.log('envoyé');
            console.log(response);
          }).catch((error)=>{console.log(error);
          });
});
}
