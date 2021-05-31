import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BudgetList from './budget-list';
import BudgetManageModal from './budget-manage-modal';
import { setSelectedModal } from './budgets-slice';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  topContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainContainer: {
    maxWidth: 800,
    margin: '0 auto',
  },
});

const BudgetPage = () => {
  const classes = useStyles();

  const { selectedModal } = useAppSelector((state) => state.budgets);

  const dispatch = useAppDispatch();

  const handleOpenBudgetModal = () => {
    dispatch(setSelectedModal('manageBudgetModal'));
  };

  return (
    <>
      <div className={classes.topContainer}>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          onClick={handleOpenBudgetModal}
        >
          Add Budget
        </Button>
      </div>
      <div className={classes.mainContainer}>
        <BudgetList />
      </div>
      {selectedModal === 'manageBudgetModal' && <BudgetManageModal />}
    </>
  );
};

export default BudgetPage;
