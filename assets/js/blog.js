const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let mode = 'dark';
const anchorEl = document.querySelector('#blog-anchor');

themeSwitcher.addEventListener('click', function () {

  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }

  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
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
for (let i = 0; i < retrievedBlogs.length; i++ ) {
  const cardBodyEl = document.createElement('div');
  const titleEl = document.createElement('h1');
  const contentEl = document.createElement('p');
  const authorEl = document.createElement('p');
  retrievedBlogs[i]
  titleEl.textContent = retrievedBlogs[i].title;
anchorEl.appendChild(cardBodyEl);
cardBodyEl.appendChild(titleEl);
}
