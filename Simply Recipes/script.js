const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    // console.log('no such class');
    throw Error (`Please double check your class names, there is no ${selector} class`)
};

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', ()=> {
    links.classList.toggle('show-links');
    // look up the correct toggle functionality
});