import React from "react"
import { makeStyles, Avatar } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx'
import FormControl from "@material-ui/core/FormControl"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import image from '../images/icons8-eggplant-48.png'
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  '@global': {
    body : {
      backgroundColor : "#f5f5f5"
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
  fab: {
  },
}));

const group = [
  {
    value: 'GROUP1',
    label: 'GROUP1',
  },
  {
    value: 'GROUP2',
    label: 'GROUP2',
  },
  {
    value: 'GROUP3',
    label: 'GROUP3',
  },
];

const penalty = [
  {
    value: 'penalty1',
    label: 'penalty1',
  },
  {
    value: 'penalty2',
    label: 'penalty2',
  },
  {
    value: 'penalty3',
    label: 'penalty3',
  },
];

export default function CreateEgg() {

  const classes = useStyles();

  const [value_1, setValue_1] = React.useState('month');
  const handleChange_1 = event => {
    setValue_1(event.target.value);
  };

  const [currency, setCurrency] = React.useState('GROUP1');
  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = React.useState('penalty1');
  const handleChange_2 = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.div1}>
        <Avatar alt="Remy Sharp" src={image} />
        <h3>Create Egg</h3>

        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup aria-label="position" name="position" value={value_1} onChange={handleChange_1} row>
              <FormControlLabel
                value="month"
                control={<Radio color="primary"/>}
                label="monthly"
                labelPlacement="start"
              />
              <FormControlLabel
                value="week"
                control={<Radio color="primary"/>}
                label="weekly"
                labelPlacement="start"
              />
              <FormControlLabel
                value="day"
                control={<Radio color="primary"/>}
                label="daily"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="eggTitle"
              label="egg title"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </div>
          <div>
            <TextField
              id="planDesc"
              label="세부 계획 내용"
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
            <TextField
              id="standard-select-currency"
              select
              label="Select Group"
              className={classes.textField}
              value={currency}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your group"
              margin="normal"
            >
              {group.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="selectPenalty"
              select
              label="select penalty"
              className={classes.textField}
              value={value}
              onChange={handleChange_2}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {penalty.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Tooltip title="Add" aria-label="add">
            <Link to="/createPenalty">
            <Fab color="primary" className={classes.fab}>
              <AddIcon />
            </Fab>
            </Link>
          </Tooltip>
          <div>
            <div>
            <Link to="/success">
            <Button variant="outlined" color="inherit" className={classes.button}>
              SAVE
            </Button>
            </Link>
            </div>
          </div>
        </form>
    </div>

  )
}