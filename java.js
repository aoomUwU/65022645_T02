let count =1;
function add(){
    total = count;

    let item = document.createElement('li');
    item.innerText= 'Item ' + total;
    item.setAttribute('id','I'+total);

    count += 1;

    menu.appendChild(item);
}
function del(){
    let Del = document.getElementById('I'+total);
    menu.removeChild(Del);
    total -=1;

}