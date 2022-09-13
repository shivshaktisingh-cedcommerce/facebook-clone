import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Feeds = (props) => {
  return (
    <>
      {props.loggedin === false && <Navigate to="/" replace="true" />}
      <div>
        {props.userpostData.map((value, index) => {
          var commenttxt = value.comment;
          return (
            <>
              <div className="postDiv" data-id={index} key={index}>
                <div>
                  <i
                    className="fa fa-user h5"
                    aria-hidden="true"
                    style={{ color: "#1877F2" }}
                  ></i>{" "}
                  <span className="h5">
                    {" "}
                    <b>{value.name}</b>
                  </span>
                  <span className="date">{value.curr_date}</span>
                  <p className="mt-2">{value.text}</p>
                </div>
                <div>
                  {value.image === undefined ? (
                    ""
                  ) : (
                    <img src={value.image} alt="img" className="postImg" />
                  )}
                </div>
                {/* Like Span */}
                <span className="likebtn">
                  {value.like}
                  <ThumbUpAltIcon
                    sx={{ mt: 2, mx: 1, color: value.likeColor }}
                    onClick={(event) => props.userlike(event, index)}
                  />
                </span>
                {/* Comment Span */}
                <span className="commentbtn">
                  {value.comment.length}{" "}
                  <CommentIcon
                    sx={{ mt: 2 }}
                    onClick={(event) => props.comment(event, index)}
                  />
                </span>
                {/* Share Post Span */}
                <span className="sharepost">
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={(event) => props.sharePost(event, index)}
                  >
                    <i className="fas fa-share"></i>
                  </Button>
                </span>
                <p style={{ display: value.commentDisplay }}>
                  {commenttxt.map((i) => {
                    return (
                      <p className="commentPara">
                        <b>{props.username}</b>
                        <span className="commentSpan">{i}</span>
                      </p>
                    );
                  })}
                  <TextField
                    id="comment"
                    variant="standard"
                    value={props.commentText}
                    onChange={props.commentValue}
                  />
                  <AddCircleOutlineIcon
                    onClick={(event) => props.hidecomment(event, index)}
                    className="addCircle"
                  />{" "}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
