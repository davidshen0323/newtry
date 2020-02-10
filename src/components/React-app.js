import React from 'react';
import MyMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginTop: 10,
      color: theme.palette.text.secondary,
    },
  }));

export default function ReactApp() {

    const classes = useStyles();
        
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={3}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            
          </React.Fragment>
        );
      }

  return (
    <div className={classes.root}>
      <MyMenu/>
      <Grid container item xs={12} spacing={2}>
          <FormRow />
      </Grid>
      <Grid container item xs={12} spacing={2}>
          <FormRow />
      </Grid>
    </div>
    
  )

}


// import React from 'react';
// import axios from 'axios';
// import EmployeeList from './employee-list'
// import EmployeeAdd from './employee-add'
 
// export default class ReactApp extends React.Component {
 
//     constructor(props) {
//         super(props);
//         this.state = {employees: []};
//         this.Axios = axios.create({
//             baseURL: "/employee",
//             headers: {'content-type': 'application/json'}
//         });
//     }
 
//     componentDidMount() {
//         let _this = this;
//         this.Axios.get('/')
//           .then(function (response) {
//              console.log(response);
//             _this.setState({employees: response.data});
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }
 
//     render() {
//         return (
//                 <div>
//                   <EmployeeAdd/>
//                   <EmployeeList employees={this.state.employees}/>
//                 </div>
//             )
//     }
// }