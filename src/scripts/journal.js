import API from './data.js';
import renderJournalEntries from './entryList.js';
import entriesCreator from './createEntry.js'

API.getJournalEntries().then
    ((entriesResponse) => renderJournalEntries(entriesResponse))

const buttonSelectionSubmit = document.querySelector(".record-entry")

buttonSelectionSubmit.addEventListener("click", clickEvent => {
    const dateSelection = document.querySelector("#journalDate").value
    const conceptSelection = document.querySelector("#journalConcept").value
    const entrySelection = document.querySelector("#journalEntry").value
    const moodSelection = document.querySelector("#journalMood").value

    if (dateSelection === "" || conceptSelection === "" || entrySelection === "" || moodSelection === "") {
        alert("Missing Input")
    } else {
        // Grab all the data the was entered.
        const newEntryJournal = entriesCreator(dateSelection, conceptSelection, entrySelection, moodSelection)

        // go get all the data
        const allEntries = () => {
            API.getJournalEntries()
                .then((entries) => {
                    // From entryList
                    renderJournalEntries(entries)
                })
        }
        // Save journal entry
        API.saveJournalEntry(newEntryJournal)
            .then(() => {
                //Once the new journal has been added to the DB, go get all the data again.
                allEntries();
            });
    }
})

