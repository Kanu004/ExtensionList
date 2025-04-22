let body = document.querySelector('body');
let bar = document.querySelector('.bar');
let heading = document.querySelector('.heading');
let cards = document.querySelectorAll('.card');
let allBtn = document.getElementById('all');
let activeBtn = document.getElementById('active');
let inactiveBtn = document.getElementById('inactive');

body.classList.add('light');

function toggling() {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  heading.classList.toggle('lightt');
  heading.classList.toggle('darkk');

  bar.classList.toggle('darkMode');

  cards.forEach(card => {
    card.classList.toggle('darkMode');
  });

  let moon = document.querySelector('.moon');
  let sun = document.querySelector('.sun');

  if (moon.style.display !== 'none') {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
  } else {
    moon.style.display = 'inline-block';
    sun.style.display = 'none';
  }
}

// Set initial data-status for each card based on toggle icon
function setCardStatus() {
  cards.forEach(card => {
    let icon = card.querySelector('.fa-solid');
    if (icon.classList.contains('fa-toggle-on')) {
      card.setAttribute('data-status', 'active');
    } else {
      card.setAttribute('data-status', 'inactive');
    }
  });
}

// Filter functions
function showAll() {
  cards.forEach(card => {
    card.style.display = 'flex';
  });
}

function showActive() {
  cards.forEach(card => {
    if (card.getAttribute('data-status') === 'active') {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function showInactive() {
  cards.forEach(card => {
    if (card.getAttribute('data-status') === 'inactive') {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}



// Event Listeners
allBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAll();
});

activeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showActive();
});

inactiveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showInactive();
});

// Initial status assignment
setCardStatus();
document.querySelector('.moon').style.display = 'inline-block';
document.querySelector('.sun').style.display = 'none';
