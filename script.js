/* No Magic Wand — small progressive-enhancement script */

// Current year in any footer
document.querySelectorAll('.year-auto').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

/*
  Newsletter forms (hero, footer, end of posts).
  Placeholder behavior: shows a friendly confirmation so the page feels
  alive during development. To go live, either replace each
  <form class="signup"> with your provider's embed (beehiiv or Substack),
  or set PLACEHOLDER_MODE to false and point each form's `action` at your
  provider's POST endpoint.
*/
(function () {
  var PLACEHOLDER_MODE = true; // set to false once a real action URL is wired

  document.querySelectorAll('form.signup').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var input = form.querySelector('input[type="email"]');
      var next = form.nextElementSibling;
      var note = (next && next.classList.contains('signup-note'))
        ? next
        : form.parentNode.querySelector('.signup-note');

      if (!input || !input.value || !input.checkValidity()) {
        e.preventDefault();
        if (note) { note.textContent = 'Please enter a valid email address.'; note.classList.remove('success'); }
        if (input) input.focus();
        return;
      }

      if (PLACEHOLDER_MODE) {
        e.preventDefault();
        if (note) { note.textContent = 'You are on the list. Thanks for subscribing.'; note.classList.add('success'); }
        form.reset();
      }
    });
  });
})();
