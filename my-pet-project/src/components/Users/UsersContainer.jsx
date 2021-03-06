import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleFollowInProgress,
    requestUsers,
    unfollow,
    follow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = pageNumber => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followInProgress={this.props.followInProgress}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

export const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowInProgress, getUsers: requestUsers})(UsersContainer);