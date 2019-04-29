const React = {
  createElement,
  render
};
function createElement(el, props, children) {
  return anElement(el, props, children);
}
function render(el, domEl) {
  return domEl.appendChild(el);
}

function camelToDashString(str) {
  return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}
//convert style from camelCase to dash-case
function styleToString(style) {
  return Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}${camelToDashString(propName)}:${propValue};`;
  }, "");
}

// append every child in array
function anElement(element, props, children) {
  if (typeof element === "function") {
    return element();
  } else {
    const anElement = document.createElement(element);

    //check for style props and convert them from camelCase to dash-case
    props &&
      Object.keys(props).forEach(propName => {
        anElement[propName] =
          propName === "style"
            ? styleToString(props[propName])
            : props[propName];
      });
    //append elements
    if (Array.isArray(children)) {
      children.forEach(child => {
        if (typeof child === "object") {
          anElement.appendChild(child);
        } else {
          anElement.innerHTML += child;
        }
      });
    } else if (typeof children === "object") {
      anElement.appendChild(children);
    } else if (children) {
      anElement.innerHTML += children;
    }
    return anElement;
  }
}
export default React;
