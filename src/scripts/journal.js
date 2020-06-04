let journalEntries = []

const getEntriesData = () => {
    return fetch("http://localhost:8088/journalEntries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfEntries) => {
                // 100 percent sure the data is back
                journalEntries = arrayOfEntries
            }
        )
}

const makeJournalEntryComponent = (journalObject) => {
    // Create your own HTML structure for a journal entry
    return `
    <div>We covered ${journalObject.conceptsCovered}. I felt ${journalObject.mood}. 
    I learned ${journalObject.journalEntry}. I learned all of this on the date of ${journalObject.date} </div>
    `
}

const renderJournalEntries = (entries) => {
    for (const currentJournalObject of entries) {
        const journalHTML = makeJournalEntryComponent(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}
getEntriesData().then( () => {
    renderJournalEntries(journalEntries)
})
// Invoke the render function
