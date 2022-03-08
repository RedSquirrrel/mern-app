import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className='goal'>
      <div>
        {new Date(goal.createdAt).toLocaleString('en-GB', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <TiDelete className='delete-icon' />
      </button>
    </div>
  );
};

export default GoalItem;
