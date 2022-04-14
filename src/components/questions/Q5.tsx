import {
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { user, answer } from '../../context/user';
import { useContext } from 'react';
type Props = {
  que: any;
  setquenumber: any;
  navigate: any;
};
const Q5: React.FC<Props> = ({ ...props }) => {
  const { ans5, setans5 }: any = useContext(answer);
  const { score, setscore }: any = useContext(user);
  const getinput = (e: { target: { value: string } }) => {
    setans5(e.target.value);
  };
  return (
    <>
      <Box mt={1}>
        <Typography variant='h3'>{props.que.q3}</Typography>
      </Box>
      <Box mt={2}>
        <RadioGroup>
          <FormControlLabel
            control={<Radio onChange={getinput} />}
            value='yes'
            label='Delhi'
          />
          <FormControlLabel
            control={<Radio onChange={getinput} />}
            value='no'
            label='Goa'
          />
          <FormControlLabel
            control={<Radio onChange={getinput} />}
            value='no'
            label='Haryana'
          />
          <FormControlLabel
            control={<Radio onChange={getinput} />}
            value='no'
            label='up'
          />
        </RadioGroup>
      </Box>
      <Box mt={5} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant='contained' onClick={() => props.setquenumber(4)}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (ans5 === props.que.a5) {
              setscore(score + 1);
            }
            props.navigate('/result');
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Q5;
