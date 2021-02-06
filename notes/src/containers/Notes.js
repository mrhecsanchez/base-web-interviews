import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export const Notes = () => {
    const history = useHistory();

    const notes = useSelector(state=>state.notes);

    const handleClick = (noteId) => {
        history.push(`/edit/${noteId}`);
    }

  return (
    <div className="container">
        <div className="table">
            {notes.map(note=>(
                <div className="row" onClick={()=>handleClick(note.id)}>
                    <div className="col"><strong>{note.id}</strong></div>
                    <div className="col">{note.title}</div>
                    <div className="col">{note.content}</div>
                </div>
            ))}
        </div>
    </div>
  );
}