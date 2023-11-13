
let table = document.querySelector('.tbody');
let task = document.querySelector('.btn');

let items = [];

let savePriority = document.querySelector('#savePriority');
let pasirinktasPrioritetas;
savePriority.addEventListener('click', ()=>{
    let select1 = document.querySelector('.form-select-1');
    pasirinktasPrioritetas.textContent = select1.value;
    pasirinktasPrioritetas.classList.add('Low');
    console.log(pasirinktasPrioritetas.textContent);
    if (pasirinktasPrioritetas.textContent == "Low"){
        pasirinktasPrioritetas.classList = "Low";
    }
    else if (pasirinktasPrioritetas.textContent == "Normal"){
        pasirinktasPrioritetas.classList = "Normal";
    }
    else if (pasirinktasPrioritetas.textContent == "High"){
        pasirinktasPrioritetas.classList = "High";
    }
})
task.addEventListener('click', ()=>{
    if(inputBox1.value === ''){
        alert("You must write new Task");
    }
    // if(exampleDataList.value === ''){
    //     alert("You must choose priority");
    // }
    else{
        let item = {

        }
        let row = document.createElement('tr');
//////////////////
        item.checkbox = false;
/////////////////
        let cell1 = document.createElement('td');
        let checkDiv = document.createElement('div');
        checkDiv.classList = "form-check";
        let checkInput = document.createElement('input');
        checkInput.classList = "form-check-input";
        checkInput.type = "checkbox";
        checkInput.setAttribute = ('id', "flexCheckDefault");
        let checklabel = document.createElement('label');
        checklabel.classList = "form-check-label";
        checklabel.setAttribute = ('for', "flexCheckDefault");
        checkDiv.appendChild(checkInput);
        checkDiv.appendChild(checklabel);
        cell1.appendChild(checkDiv);
        row.appendChild(cell1);
        const handleChange = (e) => {
            e.target.checked 
               ? cell2.classList.add('checked')
               : cell2.classList.remove('checked');
          }
          
          cell1.addEventListener('change', handleChange);
//////////////////
        item.subject = inputBox1.value;
////////////////////////////
        let cell2 = document.createElement('td');
        cell2.textContent = inputBox1.value;
        row.appendChild(cell2);
        
        
        let cell3 = document.createElement('td');
        function getPriority() {
            selectElement = document.querySelector('.form-select');
            output = selectElement.value;
            return output;
        }
        cell3.textContent = getPriority();
        if (cell3.textContent == "Low"){
            cell3.classList = "Low";
        }
        else if (cell3.textContent == "Normal"){
            cell3.classList = "Normal";
        }
        else if (cell3.textContent == "High"){
            cell3.classList = "High";
        }
        cell3.addEventListener('dblclick', ()=>{
            pasirinktasPrioritetas = cell3
            const myModal = new bootstrap.Modal('#exampleModal');
            myModal.show();
            // let select1 = document.querySelector('.form-select-1');
            // output1 = select1.value;
            // cell3.textContent = output1;
            // if (cell3.textContent == "Low"){
            //     cell3.classList = "Low";
            // }
            // else if (cell3.textContent == "Normal"){
            //     cell3.classList = "Normal";
            // }
            // else if (cell3.textContent == "High"){
            //     cell3.classList = "High";
            // }
        })
        ////////////////////////////
        item.priority = document.querySelector('.form-select').value;
        /////////////////////////////
        row.appendChild(cell3);

        //////////////////////////
        item.dueDate = inputBox3.value;
        //////////////////////////
        let cell4 = document.createElement('td');
        cell4.textContent = inputBox3.value;
        row.appendChild(cell4);

        
        let cell5 = document.createElement('td');
        cell5.ondblclick = insertStatus;
        cell5.textContent = `New`;
        let status1;
        function insertStatus(){
            status1 = parseInt(prompt("Progress of work in percents", "0"), 10);
            if (status1 >= 0 && status1 <= 100) {
                if (status1 == 0) {
                    
                    cell5.textContent = `New`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }
                else if (status1 ==100){
                    cell5.textContent = `Complete`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }
                else {
                    cell5.textContent = `In Progress`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }
                ////////////////////////////////////
                item.statusItem = cell5.textContent;
                //////////////////////////////////
                /////////////////////////////////////////
                item.percentage = progressBar.textContent;
                ////////////////////////////////////////
                row.appendChild(cell5);
            }
            else {
                alert('Progress value need to be between 0 and 100 %')
            }
        }
        ////////////////////////////////////
        item.statusItem = cell5.textContent;
        //////////////////////////////////
        row.appendChild(cell5);

        let cell6 = document.createElement('td');
        let progress = document.createElement('div');
        progress.classList = 'progress';
        progress.role = "progressbar";
        progress.setAttribute('aria-label', "Success example");
        progress.setAttribute('aria-valuenow', "25");
        progress.setAttribute('aria-valuemin', "0");
        progress.setAttribute('aria-valuemax', "100");
        let progressBar = document.createElement('div');
        progressBar.classList = "progress-bar bg-success";
        progressBar.style.width = `${0}%`;
        progressBar.textContent = `${0} %`;
        progress.appendChild(progressBar);
        cell6.appendChild(progress);
        /////////////////////////////////////////
        item.percentage = progressBar.textContent;
        ////////////////////////////////////////
        row.appendChild(cell6);

        let cell8 = document.createElement('td');
        cell3.addEventListener('dblclick', ()=>{
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minyte = date.getMinutes();
            cell8.textContent = `${day}/${month +1}/${year} ${hour}:${minyte}`;
        })
        cell5.addEventListener('dblclick', ()=>{
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minyte = date.getMinutes();
            cell8.textContent = `${day}/${month +1}/${year} ${hour}:${minyte}`;
        })
        //////////////////////////////////////
        item.modified = cell8.textContent;
        ////////////////////////////////////
        row.appendChild(cell8);

        let cell9 = document.createElement('td');
        let del = document.createElement('button');
        del.classList = "btn-close";
        del.type = "button";
        del.setAttribute('aria-label', "Close");
        cell9.appendChild(del);
        row.appendChild(cell9);
        cell9.addEventListener('click', ()=>{
            row.remove();
        })
        
        table.appendChild(row);
        ///////////////////
        items.push(item);
        /////////////////////

        ///////////////////////
        localStorage.setItem('items', JSON.stringify(items));
        ///////////////////////
        console.log(JSON.parse(localStorage.getItem('items')));
    }
    
})
