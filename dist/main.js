function removeRedirects() {
  var links = document.querySelectorAll('a[onclick^=this\\.href\\=\\"https\\:\\/\\/slack-redir]'),
      link,
      i = links.length;
  while (i--) {
    link = links[i];
    link.removeAttribute('onclick');
    link.parentNode.replaceChild(link.cloneNode(true), link);
  }
}

setInterval(removeRedirects, 300);
