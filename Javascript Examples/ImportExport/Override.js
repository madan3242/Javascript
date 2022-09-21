class ClaasOne{
    num = 20;
    methodOne(){
        console.log("Method Class One");
    }
}

class ClaasTwo extends ClaasOne{
    num = 15;
    methodOne(){
        super.methodOne();
        console.log("Method Class Two");
    }
}

let c2 = new ClaasTwo();
console.log(c2);
c2.methodOne();
