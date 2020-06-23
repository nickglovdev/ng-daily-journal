const updateEntryField = (entryObj) => {
    // Gets referencee to input fields in the form
    const hiddenEntryId = document.querySelector("#journalId")
    const journalDateInput = document.querySelector("#journalDate")
    const journalConceptInput = document.querySelector("#journalConcept")
    const journalEntryInput = document.querySelector("#journalEntry")
    const journalMoodInput = document.querySelector("#journalMood")
}

hiddenEntryId.value = entryObj.id
journalDateInput.value = entryObj.date
journalConceptInput = entryObj.conceptsCovered
journalEntryInput = entryObj.journalEntry
journalMoodInput = entryObj.mood


export default updateEntryField