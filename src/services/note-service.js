export default class NoteService {

    setfetchData =  async (card) => {
        await fetch('https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes.json', 
        {
            method: 'POST',
            body: JSON.stringify(card)
        });
    }

    getFetchData = async() => {
        return await fetch('https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes.json');
    }

    deleteFetchData = async (id) => {
        await fetch(`https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes/${id}.json`, 
        {
            method: 'DELETE'
        });
    }

    updateFetchData = async (id, obj) => {
        await fetch(`https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes/${id}.json`, 
        {
            method: 'PATCH',
            body: JSON.stringify(obj)
        });
    }
}

