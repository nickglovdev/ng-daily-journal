const journalEntries = [
    {
        date: "5/20/20",
        conceptsCovered: "HTML",
        journalEntry: "It's fun to relearn more HTML",
        mood: "Happy"
    },

    {
        date: "5/22/20",
        conceptsCovered: "CSS",
        journalEntry: "I love to play around with CSS",
        mood: "Happy"
    },

    {
        date: "5/29/20",
        conceptsCovered: "Objects",
        journalEntry: "It was good to look over Objects again",
        mood: "Happy"
    }
]

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

// Invoke the render function
renderJournalEntries(journalEntries)