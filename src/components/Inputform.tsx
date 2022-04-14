import {
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { user, score } from '../context/user';
import { Box } from '@mui/system';
type Props = {
  navigate: any;
  handleclick: any;
};

const Inputform: React.FC<Props> = ({ ...props }) => {
  const { setUsername, username, gender, setGender, subject, setSubject }: any =
    useContext(user);

  const getgender = (e: { target: { value: string } }) => {
    setGender(e.target.value);
  };
  const getsubject = (e: { target: { value: string } }) => {
    setSubject(e.target.value);
  };
  const handleclick = () => {
    props.navigate('/quiz');
  };
  const getusername = (e: any): any => {
    setUsername(e.target.value);
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container
        maxWidth='sm'
        style={{ background: '#e5e5e5', padding: '20px', borderRadius: '14px' }}
      >
        <Typography
          variant='h3'
          style={{ textAlign: 'center' }}
          data-testid='heading'
        >
          Quiz
        </Typography>
        <Box>
          <TextField
            placeholder='Enter your name'
            fullWidth
            label='Your name'
            onChange={getusername}
          />
        </Box>
        <Box mt={1}>
          <Typography variant='h6'>Gender:</Typography>
          <RadioGroup row>
            <FormControlLabel
              control={<Radio onChange={getgender} />}
              label='Male'
              value='male'
            />
            <FormControlLabel
              control={<Radio onChange={getgender} />}
              label='Female'
              value='female'
            />
            <FormControlLabel
              control={<Radio onChange={getgender} />}
              label='Other'
              value='other'
            />
          </RadioGroup>
        </Box>

        <Box mt={1}>
          <Typography variant='h6'>Subject:</Typography>
          <RadioGroup row>
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='JavaScript'
              value='js'
            />
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='Java'
              value='java'
            />
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='Python'
              value='python'
            />
          </RadioGroup>
        </Box>
        <Box mt={1}>
          <Button
            variant='contained'
            fullWidth
            role='button'
            disabled={username === '' || subject === '' ? true : false}
            onClick={handleclick}
          >
            Start Test
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Inputform;
