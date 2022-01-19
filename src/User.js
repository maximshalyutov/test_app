import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { fetchUser } from './actions/user'

import styles from './styles/user.module.scss'

function User({dofetchUser, user}) {
  let { userid } = useParams();

  useEffect(() => {
      dofetchUser(userid)
  }, [userid])
  
  return (
    <>
      {user.fetching && `loading...`}
      {!user.fetching && user.data && (
        <>
          <div className={styles.userCard}>
            <div className={styles.avatar}>
              <img src={user.data.avatar_url} />
            </div>
            <div className={styles.userInfo}>
              <div className={styles.name}>{user.data.name ? user.data.name : 'Anonymous'}</div>
              <div className={styles.email}>{user.data.email ? `Email: ${user.data.email}`: null}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = () => {
  return (state => {
    console.log(9, state)
    return {
    fetching: state.fetching,
    user: state.user
  }})
}

const mapDispatchToProps = dispatch => {
  return {
    dofetchUser: (userid) => {
      dispatch(fetchUser(userid));
    }
  };
};

const UserComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default UserComponent;
