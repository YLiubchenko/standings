const table = document.querySelector('table');

function createTitlesTable() {
    let date = new Date();
    const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    const titles = ['#', '', `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`, 'і', 'в', 'н', 'п', 'заб', 'про', 'різн', 'о'];

    let tr = document.createElement('tr');
    titles.forEach(function (elem) {
        let th = document.createElement('th');
        th.className = 'col';
        th.innerText = elem;
        tr.appendChild(th);
    })
    table.appendChild(tr);
}

createTitlesTable();

function tableData(){
    let n = 1;
    let inputs = document.querySelectorAll('.inp');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function (){
    let arr = [n];
        n++
        inputs.forEach(function (elem, i, array){
            if(i === array.length - 1){

            }
            arr.push(elem.value);
            elem.value = '';
        })
        let tr = document.createElement('tr');
        arr.forEach(function (elem){
            let td = document.createElement('td');
            td.className = 'col';
            td.innerText = elem;
            tr.appendChild(td);
        })
        table.appendChild(tr);
    })
}

tableData();


