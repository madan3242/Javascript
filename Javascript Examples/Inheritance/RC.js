class Component{
    item = 111;
    constructor(){
        console.log("Component Class");
    }
    render(){

    }
}

class Message extends Component{
    // super();
    item = 123;
    constructor(){
        console.log("Message class");
        super();
    }
}

// new Message();

let m1 = new Message();
// m1.item;
console.log(m1.item);