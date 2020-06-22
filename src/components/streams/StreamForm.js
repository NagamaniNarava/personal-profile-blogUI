import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="firstName" component={this.renderInput} label="First Name" />
        <Field name="lastName" component={this.renderInput} label="Last Name" />
        <Field name="role" component={this.renderInput} label="Role/Headline" />
        <Field name="summary" component={this.renderInput} label="About" />
        <Field name="skills" component={this.renderInput} label="Skills"/>
        <Field name="education" component={this.renderInput} label="Education"/>
        <Field name="phoneNo" component={this.renderInput} label="Mobile number"/>
        <Field name="mailId" component={this.renderInput} label="Mail ID"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.firstName) {
    errors.firstName = 'Please enter your first name';
  }
  if (!formValues.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  // if (!formValues.lastname) {
  //   errors.title = 'You must enter a name';
  // }

  // if (!formValues.summary) {
  //   errors.description = 'You must enter a summary';
  // }

  // if (!formValues.skills) {
  //   errors.description = 'You must enter a skills';
  // }

  // if (!formValues.education) {
  //   errors.description = 'You must enter a education';
  // }

  // if (!formValues.contactInfo) {
  //   errors.description = 'You must enter a contactInfo';
  // }


  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
