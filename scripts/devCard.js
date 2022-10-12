function createDevCard (obj) {
    let liDevCard = document.createElement('li')
    liDevCard.className = 'dev-card'

    liDevCard.insertAdjacentHTML(
        'beforeend', 
        `
            <div class="profile-img">
                <button class="favorite-button">
                    <img src=${obj.picture.large} alt="Imagem do Dev">
                </button>
            </div>
            <div class="info">
                <h2>${obj.name.first} ${obj.name.last}</h2>
                <p>${obj.location.street.name}, ${obj.location.street.number}</p>
                <p>${obj.dob.age} anos</p>
                <button>
                    <img src="./assets/envelope.svg" alt="">
                </button>
                <button>
                    <img src="./assets/phone.svg" alt="">
                </button>
            </div>
        `
    )
    
    let buttonFavorite = document.querySelector('#favorite-button')
    buttonFavorite.addEventListener('click', () => {
        buttonFavorite.classList.toggle('favorite')
        
    })
}