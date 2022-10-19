var d = new Date().getSeconds();
const posts = [
  {
    title: "Post One",
    body: "This is Post One",
    createdAt: "",
  },
  {
    title: "Post two",
    body: "This is post two",
    createdAt: "",
  },
];
console.log(...posts);

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - last updated ${d}seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: d });
    callback();
  }, 2000);
}

//getPosts();
createPost({ title: "Post Three", body: "This is post three" }, getPosts);

createPost({ title: "Post Four", body: "This is the 4th post" }, getPosts);
createPost({ title: "Post Four", body: "This is the 5th post" }, getPosts);
createPost({ title: "Post Four", body: "This is the 5th post" }, getPosts);
