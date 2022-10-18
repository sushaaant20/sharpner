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
  {
    title: "Post three",
    body: "This is post three",
    createdAt: "",
  },
];
//console.log(...posts);

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - last updated ${d}seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: d });
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something is wrong");
      }
    }, 2000);
  });
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop({ ...post });
      //const error = true;

      if (posts.length === 0) {
        resolve();
      } else {
        reject("Error: Array is empty");
      }
    }, 1000);
  });
}

// createPost({ title: "post Four", body: "this is post 3" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

deletePost().catch((err) => console.log(err));
deletePost().catch((err) => console.log(err));
deletePost().catch((err) => console.log(err));
deletePost().catch((err) => console.log(err));
