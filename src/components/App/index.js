import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { httpGet } from '../../helpers/http-api';

import MonthsList from '../Months/MonthsList';

import { users as usersURL } from '../../services/endpoints';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
  }));

const App = () => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true)
    
    useEffect(() => {
        setIsLoaded(false)

        httpGet(usersURL).then(res => res.json()).then(res => {
            setUsers(res);
            setIsLoaded(true);
        })
    }, [])
    return  isLoaded 
            ? <MonthsList users={users}/> 
            : <div className={classes.root}>
                 <CircularProgress />
              </div>;
};

export default App;