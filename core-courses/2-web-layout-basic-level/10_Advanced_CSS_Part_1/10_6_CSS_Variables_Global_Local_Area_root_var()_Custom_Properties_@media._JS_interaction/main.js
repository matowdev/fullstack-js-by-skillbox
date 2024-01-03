const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
const mainColor = rootStyle.getPropertyValue('--js-text-color');
const mainSize = rootStyle.getPropertyValue('--js-text-size');
console.log('color:' + mainColor);
console.log('size:' + mainSize);
