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
    },
    getSingleEntry: (id) => {
		return fetch(`${url}/entries/${id}`)
		.then(response => response.json());
	},
	updateEntry: (id, updatedEntryObj) => {
		return fetch(`${url}/entries/${id}`, {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(updatedEntryObj)
		})
    },
	deleteEntry: (id) => {
		return fetch(`${url}/entries/${id}`, {
			method: "DELETE"
		}).then(response => response.json());
	}
}

export default API