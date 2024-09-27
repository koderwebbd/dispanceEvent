// const dispanceEvent = new CustomEvent('search_click', {
//   detail: { message: 'This is a custom dispance event' }
// });
const dispanceEvent = new CustomEvent('search_click');
document.dispatchEvent(dispanceEvent);

document.addEventListener('search_click', function(event) {
      //console.log('search_click event triggeredx:', event.detail.message);
});

//another example 
const dispanceEvent = new CustomEvent('variant_click', {
detail: { variant: selectedVariant }
});
//const dispanceEvent = new CustomEvent('variant_click');
document.dispatchEvent(dispanceEvent);

//receive
document.addEventListener('variant_click', (event) => { 
    console.log(event.detail.variant)
});
