import React from "react";

/* {
    "user": "vasa",
    "address": ""
    "message": ""       
} */

export default function ChatList(props) {
  return (
    <div>
      {props.msgList.map((msg, index) => {
        return (
          <p key={index}>
            <b>{msg.name}: </b>
            <span>{msg.message}</span>
          </p>
        );
      })}
    </div>
  );
}
