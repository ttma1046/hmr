// import printMe from './print.js';
// import text from './textbit.js'
import exp, { e, sum, pi } from './lib/mathplusplus'

function component() {
  const element = document.createElement('div');
  element.innerHTML = sum(1, 2) + ' ' + e + ' ' + exp(pi);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./lib/mathplusplus', function () {
    console.log('Accepting the updated printMe module!');

    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
