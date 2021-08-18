const button = document.querySelector('.btn1');
var label = document.querySelector('.label1');
button.addEventListener('click', function(){
    alert("message");
    label.innerHTML = "Total Cost: R " ;
});
