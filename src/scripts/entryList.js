import makeJournalEntryComponent from './entryComponent.js'

const renderJournalEntries = (entries) => {
    for (const currentJournalObject of entries) {
        const journalHTML = makeJournalEntryComponent(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries
