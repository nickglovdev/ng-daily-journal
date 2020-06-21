import API from './data.js';
import renderJournalEntries from './entryList.js';

API.getJournalEntries().then
((entriesResponse) => renderJournalEntries(entriesResponse))

const buttonSelectionSubmit = document.querySelector(".record-entry")

buttonSelectionSubmit.addEventListener("click", clickEvent => {
    const dateSelection = document.querySelector("#journalDate").value
    const conceptSelection = document.querySelector("#journalConcept").value
    const entrySelection = document.querySelector("#journalEntry").value
    const moodSelection = document.querySelector("#journalMood").vaue

    if (dateSelection === "" || conceptSelection === "" || entrySelection === "" || moodSelection === "") {
        alert("Missing Input")
    }

    
})