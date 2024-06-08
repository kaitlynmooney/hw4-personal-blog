// /* DEPENDENCIES */
const blogForm = document.querySelector('#blog-form');
const submitButton = document.querySelector('#submit');
const usernameInputEl = document.querySelector('#username');
const titleInputEl = document.querySelector('#title');
const contentInputEl = document.querySelector('#content');

function blogFormStorage() {

const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
if (!savedBlogs) {
    return []
    } else {
    return savedBlogs;
    };
};
let retrievedBlogs = blogFormStorage();
console.log(retrievedBlogs);

function saveBlogsToStorage(blogs) {
  const projectsAsJSON = JSON.stringify(blogs);
  localStorage.setItem("blogs", projectsAsJSON)
  };
console.log(saveBlogsToStorage);
const blogs = blogFormStorage();
saveBlogsToStorage(blogs);

function handleBlogFormSubmit(event) {
event.preventDefault();
const blogs = {
    username: usernameInputEl.value,
    title: titleInputEl.value,
    content: contentInputEl.value,
    }
    retrievedBlogs.push(blogs);
localStorage.setItem('blogs',JSON.stringify(retrievedBlogs));
window.location.replace('blog.html');
};

function printBlogData() {
blogs = blogFormStorage();
}
submitButton.addEventListener('click', function (event){
event.preventDefault();
handleBlogFormSubmit(event);
})