import API from '../api/entries.json';
import renderJournalEntries from './entryList';
import updateEntryField from './updateEntryFields.js'


const entryContainer = document.querySelector("#entryLog");

export default {
	registerListeners() {
		entryContainer.addEventListener("click", event => {
			console.log("what the heck is the event", event.target.id);
			//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteEntry--")) {
				const entryToDelete = event.target.id.split("--")[1];
				console.log(entryToDelete);

				API.deleteSweet(entryToDelete)
				.then(renderJournalEntries)
			}else if(event.target.id.startsWith("editEntry--")) {
				const entryToEdit = event.target.id.split("--")[1];
				console.log(entryToEdit);

				API.getSingleSweet(entryToEdit)
				.then(sweetObj => updateEntryField(sweetObj));
			}
		})
	}
}