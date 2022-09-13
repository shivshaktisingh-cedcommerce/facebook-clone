import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Mypost = (props) => {
  return (
    <>
      {props.loggedin === false && <Navigate to="/" replace="true" />}
      <div>
        {props.mypostData.length < 4 ? (
          <div className="postDiv">
            <h1>ooh, You have not posted yet!</h1>
            <div>
              <img
                src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
                alt="gif"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        ) : (
          props.mypostData.map((value, index) => {
            if (props.username === value.name) {
              var commenttxt = value.comment;
              return (
                <>
                  <div className="postDiv" id={index} key={index}>
                    <div>
                      <i
                        className="fa fa-user h5"
                        aria-hidden="true"
                        style={{ color: "#1877F2" }}
                      ></i>{" "}
                      <span className="h5">
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
                    <span className="likebtn">
                      <span>{value.like}</span>
                      <ThumbUpAltIcon
                        sx={{ mt: 2, mx: 1, color: value.likeColor }}
                        onClick={(event) => props.userlike(event, index)}
                      />
                    </span>

                    <span className="commentbtn">
                      <span>{value.comment.length}</span>
                      <CommentIcon
                        sx={{ mt: 2 }}
                        onClick={(event) => props.comment(event, index)}
                      />
                    </span>
                    <span className="editpost">
                      <Button
                        variant="primary"
                        onClick={(event) => props.handleShow(event, index)}
                      >
                        <i class="fas fa-edit"></i>
                      </Button>
                    </span>
                    <span className="deletepost">
                      {/* <button onClick={props.deletePost}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button> */}
                      <Button
                        variant="primary"
                        onClick={props.deletePost}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </Button>
                    </span>
                    <p style={{ display: value.commentDisplay }}>
                      {commenttxt.map((i) => {
                        return (
                          <p>
                            <b>{props.username} </b>
                            {i}
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
                    <Modal show={props.show} onHide={props.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Post</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          <input
                            type="text"
                            value={props.edittext}
                            onChange={props.callEditText}
                          />
                        </p>
                        <p>
                          <input type="file" onChange={props.callEditFile} />
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => props.editPost(index)}
                        >
                          Save Changes
                        </Button>
                        <Button variant="secondary" onClick={props.handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </>
              );
            }
          })
        )}
      </div>
    </>
  );
};
