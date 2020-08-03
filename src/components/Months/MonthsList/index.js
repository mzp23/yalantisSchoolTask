import React from 'react'
import PropTypes from 'prop-types';     
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import MonthItem from '../MonthItem'

import { monthsMap } from '../../../constants';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});


const MonthsList = ({users}) => {
    const classes = useStyles();

    const usersInMonthByDob = users.reduce((acc, user) => {
        const userMonth = new Date(user.dob).getMonth(); 
        if (acc[monthsMap[userMonth]]) {
            acc[monthsMap[userMonth]].push(user);
        } else {
            acc[monthsMap[userMonth]] = [user];
        }
    
        return acc;
    }, {})


    const getMonthColor = (usersCount) => {
        if (usersCount <= 2) {
          return 'gray';
        } else if (usersCount >= 2 && usersCount <= 6) {
          return 'blue';
        } else if (usersCount >= 7 && usersCount <= 10) {
          return 'green';
        } else if (usersCount >= 11) {
          return 'red';
        }
    }

    const isDataExists = Object.keys(usersInMonthByDob).length > 0;
   
    return (isDataExists && <List className={classes.root}>
                {monthsMap.map(month => {
                    const color = getMonthColor(usersInMonthByDob[month].length);

                    return <MonthItem key={month} monthName={month} color={color}/>
                })}
            </List>)
}

MonthsList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            dob: PropTypes.string,
      })
        
    ),
  };

export default MonthsList;