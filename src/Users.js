import {useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchUsers} from './actions/users'

function Users({dofetchUsers, users}) {
  useEffect(() => {
    dofetchUsers()
  }, [])
  
  return (
    <>
      {users.fetching && `loading...`}
      {!users.fetching && users.data && users.data.map(user => (
        <div key={`user-${user.login}`} to={`/${user.id}`}>
          <Link to={`/${user.id}`}>{user.login}</Link>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = () => {
  return (state => ({
    fetching: state.fetching,
    users: state.users
  }))
}

const mapDispatchToProps = dispatch => {
  return {
    dofetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

const UsersComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersComponent