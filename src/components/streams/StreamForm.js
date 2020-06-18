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
        <Field name="name" component={this.renderInput} label="Enter Name" />
        <Field name="summary" component={this.renderInput} label="Enter Summary" />
        <Field name="skills" component={this.renderInput} label="Enter Skills"/>
        <Field name="education" component={this.renderInput} label="Enter Education"/>
        <Field name="contactInfo" component={this.renderInput} label="Enter ContactInfo"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.title = 'You must enter a name';
  }

  if (!formValues.summary) {
    errors.description = 'You must enter a summary';
  }

  if (!formValues.skills) {
    errors.description = 'You must enter a skills';
  }

  if (!formValues.education) {
    errors.description = 'You must enter a education';
  }

  if (!formValues.contactInfo) {
    errors.description = 'You must enter a contactInfo';
  }


  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
