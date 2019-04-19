module.exports=(...arg)=>{
    return arg.reduce((accumlator,currentValue)=>{
             return accumlator+=currentValue;
    },0);
};