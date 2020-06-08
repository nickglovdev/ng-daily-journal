console.log(API)
API.getJournalEntries().then((entriesResponse) => renderJournalEntries(entriesResponse))