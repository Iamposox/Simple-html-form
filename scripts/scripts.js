const defaultCount = 2;
const phoneMask = /^[+]7 [(]{1}\d{3}[)]{1} \d{3}-\d{2}-\d{2}$/;
// Задание 1
tel.addEventListener('focus', () => {
    if(!tel.value.match(phoneMask)) {
        tel.value = '+7 ';
    }
})

tel.addEventListener('blur', (e) => {
    if(!tel.value.match(phoneMask)){
        alert('Номер не подходит маске +7 (123) 123-12-12');
        tel.focus();
    }
})

// Задание 2
const appendChild = (inputElem) => {
    let elementDiv = document.getElementById('part2');
    for(let i = 0; i< defaultCount; i++){
        let btnNew = inputElem.cloneNode(true);
        elementDiv.append(btnNew);
    }
}

const updateBtn = (input) => {
    let inputElem = input.parentNode.cloneNode(true);
    input.parentNode.remove();
    appendChild(inputElem);
}

// Задание 3
const addPart3 = elem => {
    let newElem = elem.parentNode.parentNode.cloneNode(true);
    newElem.querySelector('input').value = null;
    elem.parentNode.parentNode.parentNode.appendChild(newElem);
}

const deletePart3 = elem => elem.parentNode.parentNode.remove();

// Задание 4
form.addEventListener('submit', (event) => {
    var parts = document.getElementById('part3');
    if(parts.children.length < defaultCount) {
        event.preventDefault();
        alert('Прикрепленных фотографий должно быть не меньше ' + defaultCount)
        return false;
    }
})