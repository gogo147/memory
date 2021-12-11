document.addEventListener('DOMContentLoaded', () => {
  const cardList = [
    
    {
      name: 'mario',
      img: 'images/mario.png'
    },
    {
      name: 'tunnel',
      img: 'images/tunnel.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
    {
      name: 'yoshi',
      img: 'images/yoshi.png'
    },
    {
      name: 'mario',
      img: 'images/mario.png'
    },
    {
      name: 'tunnel',
      img: 'images/tunnel.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
    {
      name: 'yoshi',
      img: 'images/yoshi.png'
    }
  ]

  cardList.sort(() => 0.5 - Math.random())

  const game_box = document.querySelector('.game_box')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardList.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/box.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      game_box.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/box.png')
      cards[optionTwoId].setAttribute('src', 'images/box.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/gray.png')
      cards[optionTwoId].setAttribute('src', 'images/gray.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/box.png')
      cards[optionTwoId].setAttribute('src', 'images/box.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardList.length/2) {
      alert('Congratulations! You found them all 🎉🎉')
      let audio = new Audio('sound/si.m4a');
        audio.play();
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardList[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardList[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
