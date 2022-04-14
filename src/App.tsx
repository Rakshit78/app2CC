import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Inputform from './components/Inputform';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { user } from './context/user';
import { useState, useEffect } from 'react';
import { java, js, python } from './components/data';

function App() {
  const [username, setUsername] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [que, setque] = useState(java);
  const [score, setscore] = useState(0);
  const navigate = useNavigate();
  const getsubjectchoice = () => {
    if (subject === 'js') {
      setque(js);
    } else if (subject === 'java') {
      setque(java);
    } else if (subject === 'python') {
      setque(python);
    }
  };
  const handleclick = () => {
    navigate('/quiz');
  };
  useEffect(() => {
    getsubjectchoice();
    console.log(score);
  }, [subject, score]);
  return (
    <div className='App'>
      <user.Provider
        value={{
          username,
          setUsername,
          gender,
          setGender,
          subject,
          setSubject,
          score,
          setscore,
        }}
      >
        <Routes>
          <Route
            path='/'
            element={
              <Inputform navigate={navigate} handleclick={handleclick} />
            }
          />
          <Route
            path='/quiz'
            element={<Quiz que={que} navigate={navigate} />}
          />
          <Route
            path='/result'
            element={<Result que={que} navigate={navigate} />}
          />
        </Routes>
      </user.Provider>
    </div>
  );
}

export default App;
