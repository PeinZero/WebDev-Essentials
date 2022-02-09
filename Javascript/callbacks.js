const posts = [
    {
        name: "mahad",
        age:21
    },
    {
        name: "ammar",
        age: 20
    }
];

function getPosts(){
    
    setTimeout( () => {
        let node = '';
        posts.forEach( (post) => {
            node += `<li>${post.name}</li>`
        })
        console.log(node);
        document.querySelector("#mylist").innerHTML = node;
    },500);
}

function createPost(post,callback ) {
    setTimeout( ()=>{
        posts.push(post);
        callback();
    },1000)
}


createPost({name: "atif", age:25},getPosts);