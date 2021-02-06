import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Notes, EditNote, AddNote} from './containers';
import './App.css';
import { useEffect } from 'react';
import { getNotes } from './api';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const handleGetNotes = async() => {
        const res = await getNotes()
        dispatch({ type: 'SET_NOTES', payload: res.data })
    }
    handleGetNotes();
}, [dispatch]);

  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Notes</Link>
            </li>
            <li>
              <Link to="/new">New Note+</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/new">
            <AddNote />
          </Route>
          <Route exact path="/edit/:note">
            <EditNote />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
