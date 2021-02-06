import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const generateId = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

export const AddNote = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [saving, setSaving] = useState(false)
    const [note, setNote] = useState({id: generateId()})

    const handleSubmit = () => {
        console.log('submitting')
        setSaving(true)
        dispatch({ type: 'ADD_NOTE', payload: note })
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

    return (
      <div className="form">
          <h1>New note</h1>
          <div className="inputContainer">
              <label>Title</label>
              <input onChange={(e)=>handleChange('title', e.target.value)}></input>
          </div>
          <div className="inputContainer">
              <label>Content</label>
              <textarea onChange={(e)=>handleChange('content', e.target.value)}></textarea>
          </div>
          <button onClick={handleSubmit} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
      </div>
    );
  }