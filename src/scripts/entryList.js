import makeJournalEntryComponent from './entryComponent.js'

const renderJournalEntries = (entries) => {
    const journalArticleElement = document.querySelector(".entryLog")
    // Empties out the Inner HTML so that when you post your data you don't 
    journalArticleElement.innerHTML = ""

    for (const currentJournalObject of entries) {
        const journalHTML = makeJournalEntryComponent(currentJournalObject)
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries
