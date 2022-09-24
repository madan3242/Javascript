let state = {
    id: 101,
    message: "Hello",
    location:["Banglore", "USA", "SNG"],
    user: {
        id: 1023,
        name: "User 1"
    }
}

let {location, user} = state;

console.log(location);

let[loc1, loc2, loc3] = location;

console.log(loc1);
console.log(loc2);
console.log(loc3);


console.log(user.id);
console.log(state.user.id);