const API = {
    getJournalEntries: function () {
        return fetch("http://localhost:8080/entries")
            .then(response => response.json())
    }
}
