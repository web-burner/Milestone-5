console.log("Hello World");
const tags = document.getElementsByTagName("li");
console.log(tags);
for (let tag of tags) {
  console.log(tag);
  tag.style.color = 'green'
}

const h1 = document.getElementById("heading");
h1.style.color = "Red";
h1.classList.add('bg');
const h2 = document.getElementById('heading2')
console.log(h2.getAttribute('id'))
h2.setAttribute('class','bg')
h2.innerHTML = '<p>Vallage na kichu</p>'
h2.innerText = 'Jibon ta bedona mular juice kha'
