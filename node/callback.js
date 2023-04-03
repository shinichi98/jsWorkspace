function adduser(num,callback){
    callback(num);
}
adduser(1,(num)=>{
    console.log(num);
});