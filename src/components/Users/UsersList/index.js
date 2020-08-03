import React from 'react'
import PropTypes from 'prop-types';     
import List from '@material-ui/core/List';

import UserItem from '../UserItem'


const UsersList = ({users}) => {
    return  <List>
                {users.map(({id, firstName, lastName}) => <UserItem key={id} firstName={firstName} lastName={lastName}/>)}
            </List>
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            secondName: PropTypes.string
        })
    )
}

export default UsersList;