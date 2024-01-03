const petForm = document.querySelector('#petForm');
const petList = document.querySelector('#pet-list');

const createPetCard = (obj) => {
  console.log(obj.id)
  const liEl = document.createElement('li');

  const h3 = document.createElement('h3');
  h3.textContent = `${obj.pet_name}`

  const img = document.createElement('img');
  img.src = `${obj.picture_url}`

  const isFriendly = document.createElement('p');
  obj.isFriendly ? isFriendly.textContent = `Friendly!` : isFriendly.textContent = `Not so friendly...`

  const species = document.createElement('p');
  species.textContent = `${obj.species}`

  const button = document.createElement('button');
    button.textContent = 'Remove'
    button.addEventListener('click', ()=>{
      fetch(`/deletepet${obj.id}`, {
        method : "DELETE"
      })
        liEl.remove()
    } )

  liEl.append(h3, img, isFriendly,species, button)
  return liEl;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    obj.isFriendly = obj.isFriendly === 'on';
    // console.log(obj);

    fetch('/api',{
        method : "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => petList.append(createPetCard(data)))

    e.target.reset();
}

const main = () => {
  fetch('/test')
  .then((res) => res.json())
  .then((data) => data.forEach(pet => petList.append(createPetCard(pet))));
  
  petForm.addEventListener('submit', handleSubmit);
}

main();
