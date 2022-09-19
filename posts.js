const posts = [
    {name:"1.post", message:"Content of 1.Post message"},
    {name:"2.post", message:"Content of 2.Post message"},
    {name:"3.post", message:"Content of 3.Post message"}
]


const listPost = () => {
    posts.map((post) => {
        console.log(post);
    })
}
listPost();

const createPost = (newPost) => {
    const promise1 = new Promise((resolve,reject) => {
        console.log("yeni post ekleniyor..");
        posts.push(newPost);
        resolve(posts);
        // reject();
    })
    return promise1;
}

async function showPost() {
    await createPost({name:"13.post", message:"Content of 13.Post message"})
    console.log("New List:");
    await listPost();
} 
showPost();






