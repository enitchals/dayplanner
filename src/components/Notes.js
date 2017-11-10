import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import NoteList from './NoteList';
import { store } from '../';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {newNote: ''}
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

  changeHandler = (event) => {
      this.setState({ newNote: event.target.value });
  }

  submitHandler = () => {
      this.props.addNote(this.state.newNote);
      this.setState({newNote: ''});
  }


  render() {
    return (
        <div className="Notes">
        <NoteList notes ={this.props.notes} />
        <input type="text" onChange={this.changeHandler} placeholder="write a note" value={this.state.newNote}/>
        <button onClick={this.submitHandler}>Add</button>
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
