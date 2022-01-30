import React, { Component } from 'react';
import './ContactsForm.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    console.log(evt.currentTarget.value);
    this.setState({ [name]: value });
  };

  render() {
    // console.log(this.state);
    const { name, number } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Form__lable">
          Name
          <input
            className="Form__input"
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="Form__lable">
          Number
          <input
            className="Form__input"
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className="Form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;
