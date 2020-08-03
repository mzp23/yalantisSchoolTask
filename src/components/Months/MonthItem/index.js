import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    root: {
        backgroundColor: props => props.color, 
        width: 100,
        textAlign: 'center',
        borderRight: '1px solid #fff'

    }
});

const MonthItem = (props) => {
    const classes = useStyles(props);
    const { monthName } = props;

    return (
        <ListItem  className={classes.root} >
            <ListItemText>{monthName}</ListItemText>
        </ListItem>
    );
};


MonthItem.propTypes = {
    monthName: PropTypes.string,
    color: PropTypes.string
}

export default MonthItem;
