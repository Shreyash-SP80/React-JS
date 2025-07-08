// const { Children } = require("react")

function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('targer', reactElement.props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for (let prop in reactElement.props) {
        if (prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}

// In ract also element evaluate like this 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}
// console.log(Children)

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)

