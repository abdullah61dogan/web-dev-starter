'use strict';
showMessage('Work in Progress...');
/*
-------------------------Basics------------------------------------
changePercentOff(33);

let tcno = Symbol();

let person = {
    name: 'Apo',
    age: '24',
    school: 'gazi',
    showInfo: function(realAge) {
        showMessage(this.name+' is at '+ realAge);
    },
    [tcno]: 'TC.No'
};
person.showInfo(30);
console.log(person);
*/
/*
-------------------------Scope------------------------------------

function showProductId(){
    let productId = 12345;
    //console.log(productId);
}
//console.log(productId);  Hata!
showProductId();

-------------------------Scope------------------------------------

function showProductId(){
    let productId = 12345;
    function fix() {
        let productId = 67890;  //yeni atama yapılmazsa eskisini kullanır. 12345;
        console.log('in fix:', productId);
    }
    console.log(productId);
}
//console.log(productId);  Yine Hata!
showProductId();*/