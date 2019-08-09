import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      textarea: '',
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangetextarea = this.onChangetextarea.bind(this);
    this.validationForm = this.validationForm.bind(this);
  }

  onChangeInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  onChangetextarea(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  validationForm(event) {
    const { input, textarea } = this.state;

    event.preventDefault();

    if (input.length < 3 || textarea < 3) {
      MySwal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You need to write more text or title',
      });
    } else {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Your post has been added',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => this.props.history.push(`/`));
    }
  }

  render() {
    return (
      <div className="create">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Create Post</h1>
        <form className="create__form">
          <div className="form-group col-auto">
            <div className="create__title-block">
              <label htmlFor="title">Title:</label>
              <input
                onChange={this.onChangeInput}
                value={this.state.input}
                id="title"
                className="create__input"
              />
            </div>
            <div className="create__text-block">
              <label htmlFor="Comment">Comment:</label>
              <textarea
                onChange={this.onChangetextarea}
                value={this.state.textarea}
                className="form-control create__textarea"
                id="Comment"
                rows="3"
              />
            </div>
          </div>
          <div className="create__buttons">
            <button className="btn btn-success create__buttons-save" onClick={this.validationForm}>
              Save
            </button>
            <Link to="/">
              <button className="btn btn-danger create__buttons-cancel">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
