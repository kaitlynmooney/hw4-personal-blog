const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let mode = 'light';
const anchorEl = document.querySelector('#blog-anchor');

themeSwitcher.addEventListener('click', function () {

  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }

  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});
function blogFormStorage() {

  const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
  if (!savedBlogs) {
    return []
  } else {
    return savedBlogs;
  };
};
const retrievedBlogs = blogFormStorage();
for (let i = 0; i < retrievedBlogs.length; i++) {
  const cardBodyEl = document.createElement('div');
  cardBodyEl.setAttribute('class', 'card');
  const titleEl = document.createElement('h1');
  const contentEl = document.createElement('p');
  const usernameEl = document.createElement('p');
  retrievedBlogs[i]
  titleEl.textContent = retrievedBlogs[i].title;
  contentEl.textContent = retrievedBlogs[i].content;
  usernameEl.textContent = retrievedBlogs[i].username;
  anchorEl.appendChild(cardBodyEl);
  cardBodyEl.appendChild(titleEl);
  cardBodyEl.appendChild(contentEl);
  cardBodyEl.appendChild(usernameEl);
  console.log(blogFormStorage);
}
