exports.create = (code)=>{
  let ovh = require('ovh')({
  appKey: 'nPThMyRLX15VrN6f',
  appSecret: 'bv94VCKAOAWvQQO0skhTx861xPvDs9mG',
  consumerKey: 'JawPTO2pApJtD8mfVyReQYZ14DTFzjr9'
});
 // Get the serviceName (name of your sms account)
ovh.request('GET', '/sms', function (err, serviceName) {
  if(err) {
    console.log(err, serviceName);
  }
  else {
    console.log("My account SMS is " + serviceName);

    // Send a simple SMS with a short number using your serviceName
    ovh.request('POST', '/sms/' + serviceName + '/jobs', {
      message: code,
      senderForResponse: true,
      receivers: ['23798075801']
    }, function (errsend, result) {
      console.log(errsend, result);
    });
  }
});
  return;
};
