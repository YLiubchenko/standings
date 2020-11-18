const table = document.querySelector('table');

function createTitlesTable() {
    let date = new Date();
    const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    const titles = ['#', '', `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`, 'і', 'в', 'н', 'п', 'заб', 'про', 'різн', 'о'];

    addTableRow(titles, 'th');
}

createTitlesTable();

function tableData() {
    let n = 1;
    let inputs = document.querySelectorAll('.inp');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function () {
        let arr = [n];
        n++
        let different = 0;
        let sum = 0;
        inputs.forEach(function (elem, i, array) {

            switch (elem.dataset.atr) {
                case 'win':
                    sum = elem.value * 3;
                    break;
                case 'draw':
                    sum += +elem.value;
                    break;
                case 'scored':
                    different = elem.value;
                    break;
                case 'missed':
                    different -= elem.value;
                    break;
                default:
                    elem;
            }

            arr.push(elem.value);

            if (i === array.length - 1) {
                arr.push(different, sum);
            }
            elem.value = '';
        })

        addTableRow(arr, 'td');
    })
}

tableData();

function addTableRow(array, tag) {
    let tr = document.createElement('tr');
    console.log(array);
    array.forEach(function (elem, i, arr) {
        let t = document.createElement(tag);
        if (i === 1){
            let img = document.createElement('img');
            console.log(elem.lastIndexOf(`${92}`));
            img.src = elem.slice();
            console.log(elem);
            t.appendChild(img);
        } else {
            t.innerText = elem;
        }
        tr.appendChild(t);
    })
    table.appendChild(tr);
}
