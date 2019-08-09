import React from 'react';
import Modal from 'react-modal';
import Loader from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';

import PostsTable from './posts_components/PostsTable';
import PostModalComment from './posts_components/PostsModalComment';
import UserModal from './posts_components/UserModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
  },
};

Modal.setAppElement('#root');

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postsLoad: false,
      postComments: [],
      postCommentsLoad: false,
      modalCommentsIsOpen: false,
      modalUserIsOpen: false,
      modalUserLoad: false,
      userInfo: [],
      pageCount: 0,
      page: 1,
    };

    this.baseURL = 'https://jsonplaceholder.typicode.com';

    this.openCommentModal = this.openCommentModal.bind(this);
    this.closeCommentModal = this.closeCommentModal.bind(this);
    this.openUserModal = this.openUserModal.bind(this);
    this.closeUserModal = this.closeUserModal.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    let postsStart = 0;
    let postsLimit = 10;

    fetch(`${this.baseURL}/posts?_start=${postsStart}&_limit=${postsLimit}`)
      .then(response => response.json())
      .then(post =>
        fetch(`${this.baseURL}/posts`)
          .then(response => response.json())
          .then(posts =>
            this.setState({
              postsLoad: true,
              posts: post,
              pageCount: posts.length / 10,
            })
          )
      );
  }

  componentDidUpdate(prevProps) {
    if (this.state.page !== prevProps.match.params.id) {
      this.setState({
        postsLoad: false,
        page: prevProps.match.params.id,
      });

      let postsStart = this.props.match.params.id - 1 + '0';
      let postsLimit = 10;

      fetch(`${this.baseURL}/posts?_start=${postsStart}&_limit=${postsLimit}`)
        .then(response => response.json())
        .then(posts =>
          this.setState({
            posts,
            postsLoad: true,
          })
        );
    }
  }

  openCommentModal(postId) {
    fetch(`${this.baseURL}/comments?postId=${postId}`)
      .then(response => response.json())
      .then(postComments =>
        this.setState({
          postComments,
          modalCommentsIsOpen: true,
          postCommentsLoad: true,
        })
      );
  }

  closeCommentModal() {
    this.setState({ modalCommentsIsOpen: false });
  }

  openUserModal(userId) {
    this.setState({
      userInfo: [],
    });

    fetch(`${this.baseURL}/users/${userId}`)
      .then(response => response.json())
      .then(user =>
        this.setState({
          modalUserIsOpen: true,
          modalUserLoad: true,
          userInfo: [...this.state.userInfo, user],
        })
      );
  }

  closeUserModal() {
    this.setState({
      modalUserIsOpen: false,
    });
  }

  handlePageClick(data) {
    let numberPage = data.selected + 1;
    this.props.history.push(`/posts&page=${numberPage}`);

    this.setState({
      page: numberPage,
    });
  }

  render() {
    const {
      posts,
      modalCommentsIsOpen,
      postComments,
      postsLoad,
      postCommentsLoad,
      userInfo,
      modalUserIsOpen,
      modalUserLoad,
    } = this.state;

    return (
      <div>
        <Modal
          isOpen={modalCommentsIsOpen}
          onRequestClose={this.closeCommentModal}
          style={customStyles}
        >
          {postCommentsLoad ? (
            <PostModalComment postComments={postComments} />
          ) : (
            <Loader type="Puff" color="#00BFFF" height="150" width="150" className="spinner" />
          )}
          <div className="comment-button">
            <button onClick={this.closeCommentModal} type="button" className="btn btn-danger">
              Close
            </button>
          </div>
        </Modal>

        <Modal isOpen={modalUserIsOpen} onRequestClose={this.closeUserModal} style={customStyles}>
          {modalUserLoad ? (
            <UserModal closeModal={this.closeUserModal} userInfo={userInfo} />
          ) : (
            <Loader type="Puff" color="#00BFFF" height="150" width="150" className="spinner" />
          )}
        </Modal>

        {postsLoad ? (
          <div>
            <PostsTable
              posts={posts}
              openCommentModal={this.openCommentModal}
              openUserModal={this.openUserModal}
            />

            <ReactPaginate
              previousLabel="<"
              nextLabel=">"
              forcePage={+this.state.page - 1}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeLinkClassName={'active-page'}
              pageLinkClassName={'page-links'}
              previousClassName={'previous-arrow'}
              nextClassName={'next-arrow'}
            />
          </div>
        ) : (
          <Loader type="Puff" color="#00BFFF" height={150} width={150} className="spinner" />
        )}
      </div>
    );
  }
}

export default withRouter(Posts);
