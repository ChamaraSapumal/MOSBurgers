
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('ourMenuLink').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('otherSection').scrollIntoView({ behavior: 'smooth' });
  });
});

