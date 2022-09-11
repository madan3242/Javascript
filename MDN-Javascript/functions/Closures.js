const pet = function (name) {   // The outer function defines a variable called "name"
    const getName = function () {
      // The inner function has access to the "name" variable of the outer function
      return name;
    }
    return getName; // Return the inner function, thereby exposing it to outer scopes
}
const myPet = pet('Vivie');
  
myPet(); // Returns "Vivie"

const createPet = function (name) {
    let sex;
  
    const pet = {
      // setName(newName) is equivalent to setName: function (newName)
      // in this context
      setName(newName) {
        name = newName;
      },
  
      getName() {
        return name;
      },
  
      getSex() {
        return sex;
      },
  
      setSex(newSex) {
        if (typeof newSex === 'string' &&
          (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    };
  
    return pet;
  }
  
  const pet1 = createPet('Vivie');
  pet1.getName();                  // Vivie
  
  pet1.setName('Oliver');
  pet1.setSex('male');
  pet1.getSex();                   // male
  pet1.getName();                  // Oliver
  

const getCode = (function () {
    const apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify…
  
    return function () {
      return apiCode;
    };
})();
  
getCode();    // Returns the apiCode
  