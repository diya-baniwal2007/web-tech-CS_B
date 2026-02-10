function roll(num,next){
    setTimeout(()=>{
        console.log("Roll no is"+num);
        if(next)next();
    },2000)
}
roll(121222,()=>{
    console.log("Wait it is getting downloaded");
    roll(12312,()=>{
        console.log("Wait it is getting downloaded");
        roll(12314,()=>{
            console.log("Wait it is almost downloaded");
            roll(12315);
        },2000);
    },3000);
},4000);
