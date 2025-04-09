const removeUrlAnchor = url => url.split('#')[0];
​
// Alternate solutions:
​
// const removeUrlAnchor = url => url.replace(/#.*/, '');
// const removeUrlAnchor = url => {
//   let index = url.indexOf('#');
//   return index !== -1 ? url.slice(0, index) : url
// }