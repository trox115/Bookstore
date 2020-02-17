function arrayRemove (arr,index){
  return arr.filter(function(ele){
       return ele != index;
   });
}
