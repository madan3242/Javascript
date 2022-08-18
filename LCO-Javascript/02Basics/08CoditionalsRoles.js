//Create an application with following roles:
//admin - get full access 
//subadmin - get access to create/delete courses
//testprep - gets access to create/delete tests
//user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You got full access");
        break;
    case "subadmin":
        console.log("You got access to create/delete courses");
        break;
    case "testprep":
        console.log("You got access to create/delete tests");
        break;
    case "student":
        console.log("You got access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}