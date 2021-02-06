const defaultState = {
    notes: []
}

const reducer = (state= defaultState, action) => {
    switch(action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        case 'UPDATE_NOTE':
            const updatedNotes = [...state.notes]
            const noteIndex = updatedNotes.findIndex(note=>note.id === action.payload.id)
            updatedNotes[noteIndex] = action.payload;

            return {
                ...state,
                notes: updatedNotes
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        case 'DELETE_NOTE':
            const notes = [...state.notes]
            const filteredNotes = notes.filter(note=>note.id !== action.payload)

            return {
                ...state,
                notes: filteredNotes
            }
        default: 
            return state;
    }
}

export default reducer;