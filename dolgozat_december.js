//Number to digit tiers
function szamok_tordelese(num){
    const str = num.toString();

    const result = [420,2017,2010,4020,80200];
    for (let i = 1; i <= str.Lenght; i++){
        result.push(str.slice(0,i));
    }
    return result;
}
console.log(szamok_tordelese(420));

//Easy Time Convert
function ido(num){
    const str = num.toString();

    for (let i = 1; i <= str; i++){
        
    }
}
//Is this a triangle?

//Credit Card Mask
