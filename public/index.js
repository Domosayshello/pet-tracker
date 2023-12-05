const petForm = document.querySelector('#petForm');
// const Pet = require('../src/models/pets')
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    console.log(obj);
}

petForm.addEventListener('submit', handleSubmit);