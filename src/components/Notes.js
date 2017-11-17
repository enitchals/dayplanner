import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import NoteList from './NoteList';
import { store } from '../';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {noteTitle: '', noteText: ''};
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

  titleChangeHandler = (event) => {
      this.setState({ noteTitle: event.target.value });
  }

  textChangeHandler = (event) => {
    this.setState({ noteText: event.target.value });
  }

  submitHandler = () => {
      this.props.addNote([{title: this.state.noteTitle, text: this.state.noteText}]);
      this.setState({noteTitle: '', noteText:''});
  }

  render() {
    return (
        <div className="Notes">
        <h1>Notepad</h1>
        <NoteList notes ={this.props.notes} />
        <div>
        <textarea name="noteTitle" rows="2" cols="50" onChange={this.titleChangeHandler} placeholder="note title" value={this.state.noteTitle}/>
        </div>
        <div>
        <textarea resize="none" name="noteText" rows="20" cols="50" onChange={this.textChangeHandler} placeholder="write a note" value={this.state.noteText}/>
        </div>
        <button onClick={this.submitHandler}>Save</button>
        </div>
    );
  };
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, { addNote })(Notes);
