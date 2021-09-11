import React from 'react';

// import Test from './index';

const validate_email = RegExp(
  /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email_id: '',
      gender: '',
      roll_applied_for: 'mern',
      cover_letter: '',
      terms_conditions: true,
      errors: {
        full_name: '',
        email_id: '',
        cover_letter: '',
        terms_conditions: '',
      },
    };
  }

  handle_change = ({ target: { name, value, type, checked } }) => {
    if (type === 'checkbox') value = checked;

    // console.log(name, value, errors);
    // this.setState({ [name]: value, errors });

    const errors = this.state.errors;

    switch (name) {
      case 'full_name': {
        if (value.length < 5) {
          errors.full_name = 'fullname is required';
        } else {
          errors.full_name = '';
        }
        break;
      }
      case 'email_id': {
        if (value.length < 6) {
          errors.email_id = 'email should be atlease 6 characters';
        } else if (!validate_email.test(value)) {
          errors.email_id = 'email is invalid';
        } else {
          errors.email_id = '';
        }
        break;
      }
      case 'cover_letter': {
        if (value.length < 12) {
          errors.cover_letter = 'coverletter should be atlease 12 characters';
        } else {
          errors.cover_letter = '';
        }
        break;
      }
      case 'terms_conditions': {
        if (!value) {
          errors.terms_conditions = 'T&C should be checked';
        } else {
          errors.terms_conditions = '';
        }
        break;
      }
    }
    console.log(name, value, errors);
    this.setState({ [name]: value, errors });
  };

  handle_submit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <p>Job Application Form</p>
        <form onSubmit={this.handle_submit} action="/saveForm">
          <div>
            <label>Full Name: </label>
            <input
              name="full_name"
              type="text"
              value={this.state.full_name}
              onChange={this.handle_change}
              // onChange={(event) => {this.setState({full_name: event.target.value})}}
            />
            <span>{this.state.errors.full_name}</span>
          </div>
          <br></br>
          <div>
            <label>Email: </label>
            <input
              name="email_id"
              type="email"
              value={this.state.email_id}
              onChange={this.handle_change}
            />
            <span>{this.state.errors.email_id}</span>
          </div>
          <br></br>
          <div>
            <label>Gender: </label>
            <input
              name="gender"
              type="radio"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handle_change}
            />
            <label>Male</label>
            <input
              name="gender"
              type="radio"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handle_change}
            />
            <label>Female</label>
            <input
              name="gender"
              type="radio"
              value="other"
              checked={this.state.gender === 'other'}
              onChange={this.handle_change}
            />
            <label>Other</label>
            {/* <span>{this.state.errors.email_id}</span> */}
          </div>
          <br></br>
          <div>
            <label>Roll Applied For: </label>
            <select
              name="roll_applied_for"
              value={this.state.roll_applied_for}
              onChange={this.handle_change}
            >
              <option value="react">React</option>
              <option value="mango">Mango DB</option>
              <option value="mern">MERN</option>
            </select>
          </div>
          <br></br>
          <div>
            <label>Cover Letter: </label>
            <textarea
              name="cover_letter"
              value={this.state.cover_letter}
              onChange={this.handle_change}
            ></textarea>
            <span>{this.state.errors.cover_letter}</span>
          </div>
          <br></br>
          <div>
            <input
              name="terms_conditions"
              type="checkbox"
              checked={this.state.terms_conditions}
              onChange={this.handle_change}
            />
            <label>Agree to T&C</label>
            <span>{this.state.errors.terms_conditions}</span>
          </div>
          <br />
          <button type={'submit'}>Submit</button>
        </form>
      </>
    );
  }
}

export default App;
