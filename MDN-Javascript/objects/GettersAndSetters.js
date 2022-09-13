const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log(myObj.a); // 7
  console.log(myObj.b); // 8 <-- At this point the get b() method is initiated.
  myObj.c = 50;         //   <-- At this point the set c(x) method is initiated
  console.log(myObj.a); // 25
  
const myObject = {
    a : 0
};

Object.defineProperties(myObject, {
    b : {
        get (){
            return this.a + 1;
        }
    },
    c : {
        set(x){
            this.a = x / 2;
        }
    }
});

myObject.c = 10;
console.log(myObject.b);