let count = 0;
document.getElementById('btn-plus').addEventListener('click',function(){
    const element = document.getElementById('count');
    count++;
    element.innerText = count;
})


function minus(){
    const element = document.getElementById('count');
    count--;
    element.innerText = count;
}