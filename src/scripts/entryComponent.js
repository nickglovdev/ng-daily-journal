const makeJournalEntryComponent = (journalObject) => {
    // Create your own HTML structure for a journal entry
    return `
    <div>We covered ${journalObject.conceptsCovered}. I felt ${journalObject.mood}. 
    I learned ${journalObject.journalEntry}. I learned all of this on the date of ${journalObject.date} </div>
    <button id="editEntry--${journalObject.id}">Edit</button>
    <button id="deleteEntry--${journalObject.id}">Delete</button>
    `
}

export default makeJournalEntryComponent