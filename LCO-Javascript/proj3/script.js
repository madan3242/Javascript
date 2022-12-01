const courses = [
    {
        name: "ReactJs Course",
        price: "2.3"
    },
    {
        name: "Angular Course",
        price: "2.5"
    },
    {
        name: "MERN Course",
        price: "4.2"
    },
    {
        name: "C++ Course",
        price: "2.2"
    },
];

function genrateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span");
        span.classList.add("float-right")

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

// genrateList();

window.addEventListener('load', genrateList)

const button = document.querySelector(".sort-btn")

button.addEventListener('click', () => {
    courses.sort((a, b) => a.price - b.price);
    genrateList();
})