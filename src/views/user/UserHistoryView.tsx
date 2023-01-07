import { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import dummyData from '../../../dummyData.json';

const useStyles:any = makeStyles(()=> ({
  container: {
    "margin": "auto auto",
    "width": "50rem",
  },
  header: {
    "margin": "2rem 0",
    "text-align": "left",
  },
  subHeader: {
    margin: "1rem 0",
  },
  table: {
    "margin-bottom": "2rem",
    "border-radius": "0.5rem",
    "box-sizing": "border-box",
  },
  thead: {
    "display": "grid",
    "grid-template-columns": "0.5fr 1.5fr 1.5fr 1.5fr 1.5fr",
    "height": "2.5rem",
    "color": "white",
    "background-color": "#282c34",
    "border-radius": "1.25rem",
  },
  row: {
    "display": "grid",
    "grid-template-columns": "0.5fr 1.5fr 1.5fr 1.5fr 1.5fr",
    "height": "2.5rem",
    "color": "black",
    "background-color": "#E9EBF2",
    "border-radius": "1.25rem",
  },
  oddRow: {
    "display": "grid",
    "grid-template-columns": "0.5fr 1.5fr 1.5fr 1.5fr 1.5fr",
    "height": "2.5rem",
    "color": "white",
    "background-color": "grey",
    "border-radius": "1.25rem",
  },
  col: {
    "display": "grid",
    "align-items": "center",
    "padding-right": "1.5rem",
    "text-align": "right",
    "border-right": "3px solid #c3bdbd",
  },
  lastCol: {
    "display": "grid",
    "align-items": "center",
    "padding-right": "1.5rem",
    "text-align": "right",
  }
}));



export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>History</h1>
      <h5 className={classes.subHeader}>Your past, your present, your future - all in one place!</h5>
      <div className={classes.table}>
        <div className={classes.thead}>
          <div className={classes.col}><b>SN</b></div>
          <div className={classes.col}><b>Year</b></div>
          <div className={classes.col}><b>Month</b></div>
          <div className={classes.col}><b>Co2 saved</b></div>
          <div className={classes.lastCol}><b>Reward</b></div>
        </div>
        { dummyData.HISTORY_DATA.map((rowData, index) => {
          const rowStyle = index % 2 !== 0 ? classes.row : classes.oddRow;
          const rowNumber = index + 1;
          return (
            <div className={rowStyle} key={rowNumber}>
              <div className={classes.col}>{rowNumber}</div>
              <div className={classes.col}>{rowData["year"]}</div>
              <div className={classes.col}>{rowData["month"]}</div>
              <div className={classes.col}>{rowData["co2_saved"]}</div>
              <div className={classes.lastCol}>{rowData["reward"]}</div>
            </div>
          )
        }) }

      </div>
    </div>
  );
}
