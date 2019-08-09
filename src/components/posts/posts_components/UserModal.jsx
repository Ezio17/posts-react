import React from 'react';

class UserModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressVisibility: false,
      companyVisibility: false,
    };

    this.companyVisibilityInfo = this.companyVisibilityInfo.bind(this);
    this.addressVisibilityInfo = this.addressVisibilityInfo.bind(this);
  }

  companyVisibilityInfo() {
    this.setState(prevState => ({
      companyVisibility: !prevState.companyVisibility,
    }));
  }

  addressVisibilityInfo() {
    this.setState(prevState => ({
      addressVisibility: !prevState.addressVisibility,
    }));
  }

  render() {
    const { addressVisibility, companyVisibility } = this.state;

    const addressInfoStyle = addressVisibility ? 'list-group-item' : 'list-group-item hidden';
    const companyInfoStyle = companyVisibility ? 'list-group-item' : 'list-group-item hidden';

    return (
      <div>
        <div>
          {this.props.userInfo.map(user => (
            <div className="offset-md-3 col-md-6 user-block" key={user.name}>
              <ul className="list-group  text-center">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">User name: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
                <li className="list-group-item pointer" onClick={this.addressVisibilityInfo}>
                  Address info
                </li>
                <li className={addressInfoStyle}>City: {user.address.city}</li>
                <li className={addressInfoStyle}>
                  Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}{' '}
                </li>
                <li className={addressInfoStyle}>Street: {user.address.street}</li>
                <li className={addressInfoStyle}>Suite: {user.address.suite}</li>
                <li className={addressInfoStyle}>Zipcode: {user.address.zipcode}</li>
                <li className="list-group-item pointer" onClick={this.companyVisibilityInfo}>
                  Company info
                </li>
                <li className={companyInfoStyle}>Name: {user.company.name}</li>
                <li className={companyInfoStyle}>Catch Phrase: {user.company.name}</li>
                <li className={companyInfoStyle}>Bs: {user.company.name}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="comment-button">
          <button onClick={this.props.closeModal} type="button" className="btn btn-danger">
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default UserModal;
