import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser, writeMessage, getMessages } from "../../redux/chat/actions";
import ChatList from "./ChatList";
import { Button } from "@material-ui/core";

function Chat(props) {
  const getOrCreateUser = () => {
    if (!props.user.name) {
      props.addUser({
        name: "vasa",
        address: "0x0b5E74f4cD6c78C1963D02db25a68e4f3d2CDe0E",
      });
    }
    //console.log(props.user);
  };

  getOrCreateUser();
  if (!props.ready) {
    props.getMessages();
  } else {
    //Add event Listner
    document
      .getElementById("draft_msg")
      .addEventListener("keydown", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("sendMsg").click();
        }
      });
  }

  return (
    <div>
      <span>Logged In As: {props.user.name}</span>
      <ChatList msgList={props.msgs} />
      <input type="text" id="draft_msg" />
      <Button
        id="sendMsg"
        onClick={() => {
          props.writeMessage({
            name: props.user.name,
            message: document.getElementById("draft_msg").value,
            timestamp: new Date(),
          });
        }}
      >
        Send
      </Button>
    </div>
  );
}

const mapStateToConfig = (state) => ({
  user: state.chat.user,
  msgs: state.chat.msgs,
  ready: state.chat.ready,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (payload) => dispatch(addUser(payload)),
  writeMessage: (payload) => dispatch(writeMessage(payload)),
  getMessages: (payload) => dispatch(getMessages(payload)),
});

export default connect(mapStateToConfig, mapDispatchToProps)(Chat);
