function component() {
  let element = document.createElement('div');

  element.innerHTML = ['Hello', 'World'].join(' ');

  return element;
}

document.body.appendChild(component());
