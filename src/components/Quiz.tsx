import { Container, Box, Typography, Button } from '@mui/material';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';
import Q4 from './questions/Q4';
import Q5 from './questions/Q5';
import { useState } from 'react';
import { answer } from '../context/user';
import { style } from '@mui/system';
type Props = {
  que: any;
  navigate: any;
};
const Quiz: React.FC<Props> = ({ ...props }) => {
  const [quenumber, setquenumber] = useState(1);
  const [ans1, setans1] = useState('');
  const [ans2, setans2] = useState('');
  const [ans3, setans3] = useState([]);
  const [ans4, setans4] = useState({ a: '', b: '', c: '', d: '' });
  const [ans5, setans5] = useState('');
  return (
    <>
      <Box>
        <Button
          onClick={() => {
            setquenumber(1);
          }}
          style={{ background: ans1 !== '' ? 'red' : 'grey' }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            setquenumber(2);
          }}
          style={{ background: ans2 !== '' ? 'red' : 'grey' }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            setquenumber(3);
          }}
          style={{ background: ans3.length !== 0 ? 'red' : 'grey' }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            setquenumber(4);
          }}
          style={{ background: ans4.a !== '' ? 'red' : 'grey' }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            setquenumber(5);
          }}
          style={{ background: ans5 !== '' ? 'red' : 'grey' }}
        >
          5
        </Button>
      </Box>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
        }}
      >
        <answer.Provider
          value={{
            ans1,
            ans2,
            ans3,
            ans4,
            ans5,
            setans1,
            setans2,
            setans3,
            setans4,
            setans5,
          }}
        >
          <Container
            maxWidth='sm'
            style={{
              background: '#e5e5e5',
              padding: '20px',
              borderRadius: '14px',
            }}
          >
            {quenumber === 1 && (
              <Q1 que={props.que} setquenumber={setquenumber} />
            )}
            {quenumber === 2 && (
              <Q2 que={props.que} setquenumber={setquenumber} />
            )}
            {quenumber === 3 && (
              <Q3 que={props.que} setquenumber={setquenumber} />
            )}
            {quenumber === 4 && (
              <Q4 que={props.que} setquenumber={setquenumber} />
            )}
            {quenumber === 5 && (
              <Q5
                que={props.que}
                setquenumber={setquenumber}
                navigate={props.navigate}
              />
            )}
          </Container>
        </answer.Provider>
      </div>
    </>
  );
};
export default Quiz;
