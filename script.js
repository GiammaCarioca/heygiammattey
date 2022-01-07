let pageNumber = 0

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
		copy: `está aprendiendo Español`,
		background: '#5f8b64',
		circle: '#ffbfcb'
	},
	{
		copy: 'is a late bloomer',
		background: '#67419e',
		circle: '#5f8b64'
	},
	{
		copy: 'is a fast learner',
		background: '#ffbfcb',
		circle: '#67419e'
	},
	{
		copy: `is a Spice millennial`,
		background: '#5f8b64',
		circle: '#ffbfcb'
	},
]

const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

const next = function() {
	pageNumber = pageNumber + 1

	if (pageNumber > pages.length - 1) {
		pageNumber = 0
	}

	updateSection()
}

const previous = function() {
	pageNumber = pageNumber - 1

	if (pageNumber < 0) {
		pageNumber = pages.length - 1
	}

	updateSection()
}

const random = function() {
	pageNumber = Math.floor(Math.random() * pages.length)

	updateSection()
}

const updateSection = function() {
	outputTag.innerHTML = pages[pageNumber].copy
	circleTag.style.backgroundColor = pages[pageNumber].circle
	bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener('click', function() {
	next()
})

previousTag.addEventListener('click', function() {
	previous()
})

randomTag.addEventListener('click', function() {
	random()
})

document.addEventListener('keyup', function(event) {
	if (event.key == 'ArrowRight') {
		next()
	}

	if (event.key == 'ArrowLeft') {
		previous()
	}
})
