
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('ourMenuLink').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('otherSection').scrollIntoView({ behavior: 'smooth' });
  });
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 13) + "px; left: " + (e.pageX - 13) + "px;")
});

const dot = document.querySelector('.dot');

document.addEventListener('mousemove', e => {
  dot.setAttribute("style", "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;")
});