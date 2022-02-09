const posts = [
    {name: "mahad",age:21},
    {name: "ammar",age: 20}
];

function getPosts(){
    
    setTimeout( () => {
        let node = '';
        posts.forEach( (post) => {
            node += `<li>${post.name}</li>`
        })
        console.log(node);
        document.querySelector("#mylist").innerHTML = node;
    },1000);
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout( ()=>{
            posts.push(post);

            let error = false

            if (!error){
                resolve();
            }
            else{
                reject("Something went wrong")
            }
        },1000)
    }) 
}


// createPost({name: "atif", age:25})
//     .then(getPosts)
//     .catch((err)=> console.error(err))

// ---------------------------------------Async/Await-----------------------------------//
async function init (){
    await createPost({name: "atif", age:25});
    getPosts();
}

init();

// ---------------------------------------Async/Await/Fetch-----------------------------------//
// async function fetchdata(){
//     const responsex = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await responsex.json();
//     console.log(data);
// }

// fetchdata();

// ---------------------------------------PROMISE.ALL-----------------------------------//
// const p1 = Promise.resolve("entering");
// const p2 = 69;
// const p3 = new Promise((resolve,reject) => 
//     setTimeout(resolve,2000,"leaving")
// )

// const p4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((responsex) => responsex.json())

// Promise.all([p1,p2,p3,p4])
//     .then((values) => console.log(values));
    