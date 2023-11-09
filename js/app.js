let table = document.querySelector('.table-responsive');
let task = document.querySelector('.btn');
task.addEventListener('click', ()=>{
    let row = document.createElement('tr');
    for (i = 0; i < 9; i++){
        let cell = document.createElement('td');
        cell.textContent = 'oho';
        row.appendChild(cell);
    }
    
    table.appendChild(row);
})
