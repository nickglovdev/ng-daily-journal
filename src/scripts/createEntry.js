const entriesCreator = (date, concept, entry, mood) => {
    const newEntry = {
        date: date,
        conceptsCovered: concept,
        journalEntry: entry,
        mood: mood
    }
    return newEntry
}

export default entriesCreator