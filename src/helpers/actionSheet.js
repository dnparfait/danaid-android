module.exports = (titleActionSheet,itemsActioSheet)=>{
  return new Promise((resolve)=>{
    new tabris.ActionSheet({
        title: titleActionSheet,
        actions:itemsActioSheet
      }).on("select", ({target: actionSheet, index}) =>{
          resolve(actionSheet.actions[index].title);
      }).open();
 });
}
