const text = document.querySelector('.hover-effect h1');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
