import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Dropdown, Button } from 'semantic-ui-react';
import { times } from 'lodash';


const options = [
  { key: 'angular', text: 'Angular', value: 'Angular' },
  { key: 'css', text: 'CSS', value: 'CSS' },
  { key: 'html', text: 'HTML', value: 'HTML' },
  { key: 'java', text: 'Java', value: 'Java' },
  { key: 'javascript', text: 'Javascript', value: 'Javascript' },
  { key: 'node', text: 'NodeJS', value: 'NodeJS' },
  { key: 'python', text: 'Python', value: 'Python' },
  { key: 'react', text: 'React', value: 'React' },
  { key: 'ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'spring', text: 'Spring', value: 'Spring' },
  { key: 'ui', text: 'UI Design', value: 'UI Design' },
  { key: 'ux', text: 'UX', value: 'UX' }
] 

class StreamForm extends React.Component {
  state = {applicantSkills:null};

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

  
  handleChange = (e,{value})=>{
    this.setState({applicantSkills:value})
  }

  onSubmit = formValues => {
    var applicantSkills =this.state.applicantSkills.toString();
    this.props.onSubmit({ ...formValues, applicantSkills });
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
        {/* <Field name="applicantSkills" component={this.renderInput} label="Skills"/> */}
        <Dropdown name="applicantSkills" onChange={this.handleChange} component={this.renderInput} placeholder='Skills' fluid multiple selection options={options} /> 
        <Field name="education" component={this.renderInput} label="Education"/>
        <Field name="phoneNo" component={this.renderInput} label="Mobile number"/>
        <Field name="mailId" component={this.renderInput} label="Mail ID"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.firstName) {
    errors.firstName = 'Please enter your first name';
  }
  // if (formValues.firstName == initialValues.firstName) {
  //   //errors.firstName = 'Please enter your first name';
  //   errors.firstName = "No Changes in form";
  // }
  if (!formValues.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  if (!formValues.role) {
    errors.role = 'Please enter your role';
  }

  if (!formValues.summary) {
    errors.summary = 'Please enter your summary';
  }

  if (!formValues.applicantSkills) {
    errors.applicantSkills = 'Please enter your Skills';
  }

  if (!formValues.education) {
    errors.education = 'Please enter your education';
  }

  if (!formValues.phoneNo) {
    errors.phoneNo = 'Please enter your phoneNo';
  }

  if (!formValues.mailId) {
    errors.mailId = 'Please enter your mailId';
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
