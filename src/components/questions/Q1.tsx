import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useContext } from 'react';
import { user, answer } from '../../context/user';
type Props = {
  que: any;
  setquenumber: any;
};
const Q1: React.FC<Props> = ({ ...props }) => {
  const { score, setscore }: any = useContext(user);
  const { ans1, setans1 }: any = useContext(answer);

  const getanswer = (e: { target: { value: string } }) => {
    setans1(e.target.value);
  };
  const handleclick = () => {
    if (props.que.a1 === ans1) {
      setscore(score + 1);
    }
    props.setquenumber(2);
  };
  return (
    <>
      <Box mt={1}>
        <Typography variant='h3'>{props.que.q1}</Typography>
      </Box>
      <Box mt={2}>
        <TextField placeholder='Your answer' onChange={getanswer} />
      </Box>
      <Box mt={2}>
        <Button variant='contained' onClick={handleclick}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Q1;
