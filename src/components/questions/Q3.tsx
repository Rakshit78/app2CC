import {
  Box,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
  Button,
  Checkbox,
} from '@mui/material';
import { user, answer } from '../../context/user';
import { useContext } from 'react';
type Props = {
  que: any;
  setquenumber: any;
};
const Q3: React.FC<Props> = ({ ...props }) => {
  const { ans3, setans3 }: any = useContext(answer);
  const { score, setscore }: any = useContext(user);
  const getanswer = (e: { target: { value: string } }) => {
    setans3([...ans3, e.target.value]);
  };
  return (
    <>
      <Box mt={1}>
        <Typography variant='h3'>{props.que.q3}</Typography>
      </Box>
      <Box mt={2}>
        <RadioGroup>
          <FormControlLabel
            control={<Checkbox onChange={getanswer} />}
            value='yes'
            label='True'
          />
          <FormControlLabel
            control={<Checkbox onChange={getanswer} />}
            value='yes'
            label='False'
          />
          <FormControlLabel
            control={<Checkbox onChange={getanswer} />}
            value='no'
            label='None'
          />
          <FormControlLabel
            control={<Checkbox onChange={getanswer} />}
            value='no'
            label='All'
          />
        </RadioGroup>
      </Box>
      <Box mt={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant='contained' onClick={() => props.setquenumber(2)}>
          prev
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (props.que.a3.a1 === ans3[0] || props.que.a3.a2 === ans3[1]) {
              setscore(score + 1);
            }
            props.setquenumber(4);
          }}
        >
          next
        </Button>
      </Box>
    </>
  );
};

export default Q3;
