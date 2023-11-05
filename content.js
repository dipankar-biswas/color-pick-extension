document.addEventListener('mouseup', function(event) {
    // alert('Ok baby');
    setTimeout(() => {
        console.log(document.querySelector('#aac-hex-name').innerHTML);
        console.log(document.querySelector('#aac-artyclick-name').innerHTML);
    }, 100);
});