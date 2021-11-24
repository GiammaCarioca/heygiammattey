// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
	{
		copy: 'parla Italiano',
		background: '#ffbfcb',
		circle: '#67419e'
	},
	{
		copy: 'speaks English',
		background: '#67419e',
		circle: '#5f8b64'
	},
	{
		copy: `está estudiando Español`,
		background: '#5f8b64',
		circle: '#67419e'
	},
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// make a next function to increase the pageNumber
const next = function() {
	pageNumber = pageNumber + 1

	if (pageNumber > pages.length - 1) {
		pageNumber = 0
	}

	updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
	pageNumber = pageNumber - 1

	if (pageNumber < 0) {
		pageNumber = pages.length - 1
	}

	updateSection()
}

// pick a random slide
const random = function() {
	pageNumber = Math.floor(Math.random() * pages.length)

	updateSection()
}

// this will update the section's content and style
const updateSection = function() {
	outputTag.innerHTML = pages[pageNumber].copy
	circleTag.style.backgroundColor = pages[pageNumber].circle
	bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
	next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
	previous()
})

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
	random()
})

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
	//   console.log(event)

	// if the key being pressed is ArrowRight
	if (event.key == 'ArrowRight') {
		next()
	}

	// if the key being pressed is ArrowLeft
	if (event.key == 'ArrowLeft') {
		previous()
	}
})
