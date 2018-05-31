import './style.css';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkBtn = document.querySelector('.check-all');
const uncheckBtn = document.querySelector('.uncheck-all');
const remoevBtn = document.querySelector('.remove-all');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const idx = el.dataset.index;
    items[idx].done = !items[idx].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function setAll(value) {
    items.forEach(item => {
        item.done = value;
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function removeAll() {
    items = [];
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkBtn.addEventListener('click', () => setAll(true));
uncheckBtn.addEventListener('click', () => setAll(false));
remoevBtn.addEventListener('click', removeAll);
populateList(items, itemsList);