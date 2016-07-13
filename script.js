function show(element) {
  element.classList.remove('collapsed');
}

function hide(element) {
  element.classList.add('collapsed');
}

function applyMethod(elements, method) {
  for(i = 0; i < elements.length; i++) {
    method(elements[i])
  }
}

function hide_all(elements) {
  applyMethod(elements, add_toggle_links);
  applyMethod(elements, hide);
  elements[0].getElementsByClassName('toggle')[0].click();
}

function toggle_class(element, className) {
  if (element.className.search(className) >= 0) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function add_toggle_links(element) {
  var a_link = document.createElement('a');
  a_link.appendChild(document.createTextNode("Click to read more..."));
  a_link.setAttribute('class', 'toggle');
  a_link.setAttribute('href', '#');
  a_link.setAttribute('onclick', 'toggle(this.parentNode)');
  element.appendChild(a_link);

  var close_link = document.createElement('a');
  close_link.appendChild(document.createTextNode("Click to show less"));
  close_link.setAttribute('class', 'toggle hidden small-font');
  close_link.setAttribute('href', '#');
  close_link.setAttribute('onclick', 'toggle(this.parentNode)');
  element.appendChild(close_link);
}

function toggle(element) {
  var matchClass = /collapsed/;
  if(matchClass.test(element.className)) {
    show(element);
  } else {
    hide(element);
  }
  var links = element.getElementsByClassName('toggle');
  for(i = 0; i < links.length; i++) {
    toggle_class(links[i], 'hidden');
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  hide_all(Array.from(document.getElementsByClassName('thought')));
});
