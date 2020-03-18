// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummydata from "../../dummy-data";


const CommentSection = props => {
  // Add state for the comments
  const [data] = useState(dummydata);
  const comms = [];
  data.forEach(elem => {elem.comments.forEach(comm =>{comms.push(comm)})});
  console.log(comms);

  return (
    <div>
      {comms.map(item => (<Comment comment={item} />))
      /* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
