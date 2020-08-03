import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
});


const UserItem = ({firstName, lastName}) => {
    const classes = useStyles();

    return (
        <ListItem className={classes.root}>
            <ListItemText>{firstName} {lastName}</ListItemText>
        </ListItem>
    );
};


UserItem.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default UserItem;
