let doTask = (success, faliure) => {
    let flag = false;
    if(flag == true){
        success("Data inserted Successfully");
    }
    else{
        faliure("Not successfull !");
    }
}
doTask((msg) => {
    console.log(msg);
}, 
(err) => {
    console.log(err);
});