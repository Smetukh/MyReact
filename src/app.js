function anElement(element, children) {
  if (typeof element === "function") {
    return element();
  } else {
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        anElement.appendChild(child);
      } else {
        anElement.innerHTML += child;
      }
    });
    return anElement;
  }
}

function createElement(el, props, ...children) {
  return anElement(el, props, children);
}
// function render (el, domEl) {
//   return domEl.appendChild(el);
// }

const React = {
  createElement,
  render: (el, domEl) => {
    domEl.appendChild(el);
  }
};

// const helloWorld =
//   React.createElement('div', { style: { backgroundColor: 'red' } }
// , [
//   React.createElement('span', undefined, 'Hello world'),
//   React.createElement('br'),
//   'This is just a text node',
//   React.createElement('div', { textContent: 'Text content' }),
// ]
// );
// const helloWorld = React.createElement('div', null, `Hello World`);
const Hello = function() {
  return React.createElement("div", null, `Hello World`);
};
const helloWorld = React.createElement(Hello, null, null);
const helloWorld2 = React.createElement(Hello, null, null);
const regularDiv = React.createElement("div", null, `I'm just a regular div`);

const parent = React.createElement(
  "div",
  null,
  helloWorld,
  helloWorld2,
  regularDiv,
  ` I'm just a text`
);

ReactDOM.render(parent, document.getElementById("root"));

// React.render(
//   app,
//   document.getElementById('root'),
// );
