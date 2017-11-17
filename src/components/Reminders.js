import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/reminderActions';
import ReminderList from './ReminderList';
import { store } from '../';

class Reminders extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', note: '', date: null};
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

  titleChangeHandler = (event) => {
      this.setState({ title: event.target.value });
  }

  textChangeHandler = (event) => {
    this.setState({ note: event.target.value });
  }

  submitHandler = () => {
      this.props.addReminder([{title: this.state.title, note: this.state.note, date: this.state.date}]);
      this.setState({noteTitle: '', noteText:''});
  }

  render() {
    return (
        <div className="Reminders">
        <h1>Notepad</h1>
        <ReminderList reminders ={this.props.reminders} />
        <div>
        <textarea name="reminderTitle" rows="1" cols="25" onChange={this.titleChangeHandler} placeholder="Reminder" value={this.state.title}/>
        </div>
        <div>
        <textarea name="noteText" rows="10" cols="25" onChange={this.textChangeHandler} placeholder="add a note" value={this.state.note}/>
        </div>
        <button onClick={this.submitHandler}>Save</button>
        </div>
    );
  };
};

const mapStateToProps = (state) => {
    return {
        reminders: state.reminders,
    };
};

export default connect(mapStateToProps, { addReminder })(Reminders);
