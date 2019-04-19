module.exports=(first,...arg)=>{
    return arg.reduce((accumlator,currentValue)=>{
        return accumlator*=currentValue;
},first);
};