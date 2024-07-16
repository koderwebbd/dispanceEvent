// const dispanceEvent = new CustomEvent('dispance', {
//   detail: { message: 'This is a custom dispance event' }
// });
const dispanceEvent = new CustomEvent('search_click');
document.dispatchEvent(dispanceEvent);

document.addEventListener('search_click', function(event) {
      //console.log('search_click event triggeredx:', event.detail.message);
});

 
