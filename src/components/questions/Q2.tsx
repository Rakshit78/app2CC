import {
  Box,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';
import { user, answer } from '../../context/user';
import { useContext } from 'react';

type Props = {
  que: any;
  setquenumber: any;
};

const Q2: React.FC<Props> = ({ ...props }) => {
  const { ans2, setans2 }: any = useContext(answer);
  const { score, setscore }: any = useContext(user);
  const getanswer = (e: { target: { value: string } }) => {
    setans2(e.target.value);
  };
  return (
    <>
      <Box mt={1}>
        <Typography variant='h3'>{props.que.q2}</Typography>
      </Box>
      <Box mt={2}>
        <RadioGroup>
          <FormControlLabel
            control={<Radio onChange={getanswer} />}
            value='yes'
            label='True'
          />
          <FormControlLabel
            control={<Radio onChange={getanswer} />}
            value='no'
            label='False'
          />
        </RadioGroup>
      </Box>
      <Box mt={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant='contained' onClick={() => props.setquenumber(1)}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (props.que.a2 === ans2) {
              setscore(score + 1);
            }
            props.setquenumber(3);
          }}
        >
          next
        </Button>
      </Box>
    </>
  );
};

export default Q2;
