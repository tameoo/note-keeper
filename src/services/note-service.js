export default class NoteService {

    getFetchData = async() => {
        return await fetch('https://note-keeper-29879-default-rtdb.europe-west1.firebasedatabase.app/notes.json');
    }

    setfetchData =  async (card) => {
        await fetch('https://note-keeper-29879-default-rtdb.europe-west1.firebasedatabase.app/notes.json', 
            {
                method: 'POST',
                body: JSON.stringify(card)
            }
        );
    }

    deleteFetchData = async (id) => {
        await fetch(`https://note-keeper-29879-default-rtdb.europe-west1.firebasedatabase.app/notes/${id}.json`, 
            {
                method: 'DELETE'
            }
        );
    }

    updateFetchData = async (id, obj) => {
        await fetch(`https://note-keeper-29879-default-rtdb.europe-west1.firebasedatabase.app/notes/${id}.json`, 
            {
                method: 'PATCH',
                body: JSON.stringify(obj)
            }
        );
    }
}

