var min = function(l){
    let m = 0;
    
    for (let i = 0; i< l.length; i++){
      if(l[i] < m ){
        m = l[i];
      }
    }
    return m;
    
}
var max = function(l){
    let m = 0;
    for (let i = 0; i< l.length; i++){
      if(l[i] > m ){
        m = l[i];
      }
    }
    return m;
    
}
