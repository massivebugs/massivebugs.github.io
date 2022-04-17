document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('note-toggler-init') !== null)
        toggleNotes()
})

function toggleNotes() {
    console.debug('toggleNotes - Partially hiding all li elements with a separator ":>"')
    const separator = ':>'

    // First, select all ul elements
    document.querySelectorAll('ul > li').forEach(function (li) {
        const text = li.textContent.split('\n')[0]
        if (text.includes(separator)) {
            [question, answer] = text.split(':>')
            li.textContent = question
            const answerEl = document.createElement('span')
            answerEl.textContent = answer
            li.classList.add('note-toggler')
            li.classList.add('hidden')
            li.appendChild(answerEl)
        }
    })

    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('note-toggler')) {
            e.target.classList.toggle('hidden')
        }
    })
}