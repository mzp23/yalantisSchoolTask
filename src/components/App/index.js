import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import MonthsList from '../Months/MonthsList';
import UsersList from '../Users/UsersList';

import { httpGet } from '../../helpers/http-api';

import { users as usersURL } from '../../services/endpoints';
import { monthsMap } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        padding: 25
    },
}));

const App = () => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [currentMonth, setCurrentMonth] = useState(null);

    useEffect(() => {
        setIsLoaded(false);

        httpGet(usersURL)
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                setIsLoaded(true);
            });
    }, []);

    const getCurrentMonth = (month) => {
        setCurrentMonth(month);
    };

    const usersInMonthByDob = users.reduce((acc, user) => {
        const userMonth = new Date(user.dob).getMonth();
        if (acc[monthsMap[userMonth]]) {
            acc[monthsMap[userMonth]].push(user);
        } else {
            acc[monthsMap[userMonth]] = [user];
        }

        return acc;
    }, {});

    return isLoaded ? (
        <div className={classes.content}>
            <MonthsList
                getCurrentMonth={getCurrentMonth}
                usersInMonthByDob={usersInMonthByDob}
            />
            {currentMonth && (
                <UsersList users={usersInMonthByDob[currentMonth]} />
            )}
        </div>
    ) : (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
};

export default App;