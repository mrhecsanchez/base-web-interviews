import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export const EditNote = () => {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const [saving, setSaving] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    const [note, setNote] = useState({})

    const notes = useSelector(state=>state.notes);
    const noteState = notes.find(note=>note.id === params.note)

    useEffect(()=>{
        setNote(noteState)
    }, [noteState])

    const handleSubmit = () => {
        setSaving(true)
        dispatch({ type: 'UPDATE_NOTE', payload: note })
        setTimeout(()=>{
            setSaving(false)
            history.push('/')
        }, 1000)
    }

    const handleChange = (key, value) => {
        setNote((note)=>({
            ...note,
            [key]: value
        }))
    }

    const handleDelete = () => {
        setShowConfirmation(true)
    }

    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const handleConfirm = () => {
        dispatch({ type: 'DELETE_NOTE', payload: note.id })
        history.push('/')
    }

    return (
        <>
      <div className="form">
          <h1>Note ID: {note?.id}</h1>
          <div className="inputContainer">
              <label>Title</label>
              <input defaultValue={note?.title} onChange={(e)=>handleChange('title', e.target.value)}></input>
          </div>
          <div className="inputContainer">
              <label>Content</label>
              <textarea defaultValue={note?.content} onChange={(e)=>handleChange('content', e.target.value)}></textarea>
          </div>
          <button onClick={handleSubmit} disabled={saving}>{saving ? 'Saving...' : 'Update'}</button>
          <span className="delete" onClick={handleDelete} disabled={saving}>Delete</span>
      </div>
      {showConfirmation && (
          <div className="modal">
              <div className="modalContent">
                  <p>Are you sure you want to delete this note?</p>
                  <div className="buttons">
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                    <button className="confirm" onClick={handleConfirm}>Confirm</button>
                  </div>
              </div>
          </div>
      )}
      </>
    );
  }