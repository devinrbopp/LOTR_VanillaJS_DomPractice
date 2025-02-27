console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = 'middle-earth'
	// a log to see if the section was made properly (it was!)
	console.log(section)

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article')
		//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
		//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.textContent = lands[i]
		landArticle.appendChild(landName)
		//   2d. appends each land to the middle-earth section
		section.appendChild(landArticle)
	}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(section)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// hint: get 'The-Shire' by using its id
	const theShire = document.getElementById('The-Shire')
	// hint: create a 'ul' outside the loop into which to append the 'li's
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'	
    for (let i = 0; i < hobbits.length; i++) {
		const liHobbit = document.createElement('li')
		liHobbit.textContent = hobbits[i]
		// give each hobbit a class of `hobbit`
		liHobbit.className = 'hobbit'
		ulHobbits.appendChild(liHobbit)
	}
	// display an `unordered list` of hobbits in the shire
	theShire.appendChild(ulHobbits)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div')
	oneRingDiv.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	// find the ul where frodo lives
	// figure out which li frodo is
	// attach the ring as a child of frodo
	const ulHobbits = document.querySelector('ul')
	const frodo = ulHobbits.children[0]
	frodo.appendChild(oneRingDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	
	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById('Mordor')
	const ulBaddies = document.createElement('ul')
	for (let i = 0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li')
		liBaddy.textContent = baddies[i]
		liBaddy.className = 'baddy'
		ulBaddies.appendChild(liBaddy)
	}
	// give each of the baddies a class of "baddy"
	console.log(ulBaddies)
	mordor.appendChild(ulBaddies)
	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideBuddies = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	const ulBuddies = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		const liBuddy = document.createElement('li')
		liBuddy.textContent = buddies[i]
		liBuddy.className = 'buddy'
		ulBuddies.appendChild(liBuddy)
	}
	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById('Rivendell')
	console.log(ulBuddies)
	rivendell.appendChild(ulBuddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const ulHobbits = document.getElementById('hobbits')
	const rivendell = document.getElementById('Rivendell')
	document.getElementById('The-Shire').removeChild(document.getElementById('hobbits'))
	rivendell.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const aragorn = document.getElementById('Rivendell').childNodes[1].childNodes[3]
	aragorn.innerText = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	const theFellowshipDiv = document.createElement('div')
	theFellowshipDiv.setAttribute('id','the-fellowship')
	const theFellowshipUl = document.createElement('ul')
	theFellowshipUl.setAttribute('id','the-fellowship-ul')
	const rivendell = document.getElementById('Rivendell')
	console.log(rivendell.childNodes[1].childNodes[0])
	let i = 0
	while (i < 5) {
		alert(`${rivendell.childNodes[1].childNodes[0].innerText} has joined the fellowship`)
		theFellowshipUl.appendChild(rivendell.childNodes[1].childNodes[0])
		i++
	}
	let j = 0
	while (j < 4) {
		alert(`${rivendell.childNodes[2].childNodes[0].innerText} has joined the fellowship`)
		theFellowshipUl.appendChild(rivendell.childNodes[2].childNodes[0])
		j++
	}
	// for (let i = 1; i < 3; i++) {
	// 	for (let j = 0; j < rivendell.childNodes[i].childNodes.length; j++) {
	// 		// theFellowshipUl.appendChild(rivendell.childNodes[i].childNodes[j])
	// 		document.getElementById('the-fellowship-ul').appendChild(rivendell.childNodes[i].childNodes[j])
	// 	}
	// }
	rivendell.appendChild(theFellowshipDiv)
	theFellowshipDiv.appendChild(theFellowshipUl)


		// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementById('the-fellowship-ul').firstChild
	gandalf.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.background = 'white'
	gandalf.style.border = '1px gray solid'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been Blown! Boromir\'s been killed by the Uruk-hai!')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	const theFellowshipUl = document.getElementById('the-fellowship-ul')
	const boromir = theFellowshipUl.childNodes[4]
	theFellowshipUl.removeChild(boromir)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const mordor = document.getElementById('Mordor')
	for (let i = 0; i < 2; i++) {
	mordor.appendChild(document.getElementById('the-fellowship-ul').childNodes[4])
	}
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id','mount-doom')
	mordor.appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.setAttribute('id','gollum')
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const ring = document.querySelector('.magic-imbued-jewelry')
	gollum.appendChild(ring)
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const gollum = document.getElementById('gollum')
	gollum.remove()
	// Move all the `hobbits` back to `the shire`
	const hobbits = document.querySelectorAll('.hobbit')
	console.log(hobbits)
	const theShire = document.getElementById('The-Shire')
	hobbits.forEach( (hob) => {
		theShire.appendChild(hob)
	})
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
