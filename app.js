console.log('Comprames')

const itemsList = [];
console.log(itemsList);
console.log(itemsList.length);


function addItem() {
    // console.log('open input form')
    // creacion del modal

    // creacion del input form    
    const inputItemModal = document.getElementById('input__item');
    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    inputForm.placeholder = 'Agregar item';
    inputForm.id = 'input__form';
    
    inputItemModal.appendChild(inputForm);

    // creacion boton agregar
    const addButtom = document.createElement('button');
    addButtom.innerText = 'Agregar';
    addButtom.id = 'add__button';

    // funcion onclick boton agregar
    addButtom.onclick = () => {
        const inputItemModal = document.getElementById('input__item');
        const inputForm = document.getElementById('input__form');
        const addButton = document.getElementById('add__button');

        // valida entrada
        if (inputForm.value.trim() !== '') {
            const item = inputForm.value.trim();
            console.log(item);
            inputForm.value = '';
            itemsList.push(item);
            

            renderList();

        }
        // cierra modal
        inputItemModal.removeChild(inputForm);
        inputItemModal.removeChild(addButtom);
    }

    // crea boton
    inputItemModal.appendChild(addButtom);
}

function renderList() {
    console.log('itemsList', itemsList);

    console.log(itemsList.length);
    if (itemsList.length > 0) {
        const listContainer = document.getElementById('list__container');
        listContainer.replaceChildren();

        // for (let i = 0; i < itemsList.length; i++) {
        //     const item = document.createElement('h2');
        //     item.innerText = itemsList[i];
        //     listContainer.appendChild(item);
        // }

        itemsList.forEach(item => {
            const itemContainer = document.createElement('div');
            const itemElement = document.createElement('h2');
            itemElement.innerText = item;
            itemContainer.appendChild(itemElement);
            
            const okButton = document.createElement('button');
            okButton.innerText = 'OK';   
            okButton.onclick = () => {}
            itemContainer.appendChild(okButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'X';   
            deleteButton.onclick = () => {}
            itemContainer.appendChild(deleteButton);


            listContainer.appendChild(itemContainer);
        })

    }
}
