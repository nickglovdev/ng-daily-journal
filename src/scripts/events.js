import API from './data.js';
import renderJournalEntries from './entryList.js';
import updateEntryField from './updateEntryFields.js'


const entryContainer = document.querySelector("#entryLog");

export default {
	registerListeners() {
		entryContainer.addEventListener("click", event => {
			
			//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteEntry--")) {
				const entryToDelete = event.target.id.split("--")[1];
			

				API.deleteEntry(entryToDelete)
				// Calling this for delete so that it may render again
				.then(() => API.getJournalEntries().then
				((entriesResponse) => renderJournalEntries(entriesResponse)))
				
			} else if(event.target.id.startsWith("editEntry--")) {
				const entryToEdit = event.target.id.split("--")[1];
	
				API.getSingleEntry(entryToEdit)
				.then(entryObj => updateEntryField(entryObj));
			}
		})
	}
}