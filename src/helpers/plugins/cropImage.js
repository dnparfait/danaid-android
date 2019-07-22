module.exports = (pathToImage)=>{
 return new Promise((resolve)=>{
    const options = [650,650];
    plugins.crop.promise(pathToImage, options)
    .then((newPath)=>{
      resolve(newPath);
    }).catch((error)=> {
      console.log(error);
    });
 });
};
