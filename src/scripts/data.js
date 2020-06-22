const url = "http://localhost:3000"

const API = {
    getJournalEntries: function () {
        return fetch(`${url}/entries`)
            .then(response => response.json())
    },
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}

export default API