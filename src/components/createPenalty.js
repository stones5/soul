import React from "react"
import { makeStyles } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx'
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  '@global': {
    body : {
      backgroundColor : "#f5f5f5",
      alignItems: "center"
    },
  },
  div1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'inline',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  button: {
    color: "#A003FA",
  },
}));


export default function CreatePenalty() {

  const classes = useStyles();

  return (
    <div className={classes.div1}>
      <h3>Create Penalty</h3>

      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="penaltyTitle"
            label="penalty title"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
          />
        </div>
        <div>
          <TextField
            id="planDesc"
            label="세부 내용"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="contxt"
            label="기타 메모"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
          />
        </div>
          <div>
            <Link to="/register">
            <Button variant="outlined" color="inherit" className={classes.button}>
              SAVE
            </Button>
            </Link>
          </div>
      </form>
    </div>

  )
}