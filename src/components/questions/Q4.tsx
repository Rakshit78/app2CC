import { Box, Typography, Button, TextField } from '@mui/material';
import { user, answer } from '../../context/user';
import { useContext, useState } from 'react';
type Props = {
  que: any;
  setquenumber: any;
};
const Q4: React.FC<Props> = ({ ...props }) => {
  const { ans4, setans4 }: any = useContext(answer);
  const { score, setscore }: any = useContext(user);
  const getanswer = (e: { target: { value: string } }) => {
    setans4([...ans4, e.target.value]);
  };
  return (
    <>
      <Box mt={1}>
        <Typography variant='h3'>{props.que.q3}</Typography>
      </Box>
      <Box mt={2}>
        <TextField
          placeholder='A'
          value={ans4.a}
          onChange={(e) => {
            setans4({ a: e.target.value });
          }}
        />
        <TextField
          placeholder='B'
          value={ans4.b}
          onChange={(e) => {
            setans4({ a: ans4.a, b: e.target.value });
          }}
        />
        <TextField
          placeholder='C'
          value={ans4.c}
          onChange={(e) => {
            setans4({ a: ans4.a, b: ans4.b, c: e.target.value });
          }}
        />
        <TextField
          placeholder='D'
          value={ans4.d}
          onChange={(e) => {
            setans4({
              a: ans4.a,
              b: ans4.b,
              c: ans4.c,
              d: e.target.value,
            });
          }}
        />
      </Box>
      <Box mt={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant='contained' onClick={() => props.setquenumber(3)}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (
              props.que.a4.a1 === ans4.a ||
              props.que.a4.a2 === ans4.b ||
              props.que.a4.a3 === ans4.c ||
              props.que.a4.a4 === ans4.d
            ) {
              setscore(score + 1);
            }

            props.setquenumber(5);
          }}
        >
          next
        </Button>
      </Box>
    </>
  );
};

export default Q4;
