function removeRedirects() {
  Array.from(document.querySelectorAll('a[href^="https://slack-redir.net/link?url="'))
    .forEach(a => a.href = decodeURIComponent(a.href.substr(5)));
}

let timeout = 0;
function schedule() {
  clearTimeout(timeout);
  timeout = setTimeout(removeRedirects, 300);
}

new MutationObserver(removeRedirects)
  .observe(document.body, { childList: true });

removeRedirects();
