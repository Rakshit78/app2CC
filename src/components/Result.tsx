import { user, answer } from '../context/user';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
type Props = {
  que: any;
  navigate: any;
};
const Result: React.FC<Props> = ({ ...props }) => {
  const { score, username }: any = useContext(user);
  return (
    <>
      <h1>
        Hey!! {username} You got {(score / 5) * 100}%
      </h1>
      <Button
        onClick={() => {
          props.navigate('/');
          window.location.reload();
        }}
      >
        Retake
      </Button>

      <ul>
        <li>
          {props.que.q1} <b>Correct answer:</b>
          {props.que.a1}
        </li>
        <li>
          {props.que.q2} <b>Correct answer:</b>
          {props.que.a2}
        </li>
        <li>
          {props.que.q3} <b>Correct answer:</b>
          {props.que.a3.a1}
        </li>
        <li>
          {props.que.q4} <b>Correct answer:</b>
          {props.que.a4.a1}
        </li>
        <li>
          {props.que.q5} <b>Correct answer:</b>
          {props.que.a5}
        </li>
      </ul>
      <PieChart
        data={[
          { title: 'your score', value: 4, color: 'green' },
          { title: 'total score', value: 5 - score, color: 'red' },
        ]}
        style={{ width: '200px' }}
      />
    </>
  );
};

export default Result;
