const petForm = document.querySelector('#petForm');
// const Pet = require('../src/models/pets')
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    obj.isFriendly = obj.isFriendly === 'on';
    console.log(obj);
    fetch('/api',{
        method : "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => console.log(data))

}

const createPetCard = (obj) => {
  fetch('/test')
  .then((res) => res.json())
  .then((data) => console.log(data));
}

petForm.addEventListener('submit', handleSubmit);