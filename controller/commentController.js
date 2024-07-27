const express = require("express");
const postModel = require("../model/postModel");
const commentModel = require("../model/commentModel");

// create comment
const createComment = async (req, res)=>{
    try{
        const postId = req.params.postId;
        const post = await postModel.findById(postId);

        const comm = new commentModel(req.body);
        comm.blogPost = post;
        await comm.save();

        post.comments.push(comm);
        await post.save();

        res.status(201).json({
            status: "Successful",
            data: comm
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// get all comments of a post
const getComments = async (req, res)=>{
    try{
        const postId = req.params.postId;
        const comments  = await postModel.findById(postId).populate({path: "comments"});
        // const commentLength = comments.length;

        res.status(201).json({
            status: "Successful",
            // commentLength,
            data: comments
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// get one comment same way you get one post
 const getOneComment = async (req,res)=>{
    try {
        const comId = req.params.comId
        const comm = await commentModel.findById(comId);
        res.status(200).json({
            status: "Successful",
            data: comm
        })
    } catch (error) {
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        }) 
    }
 }
// update same as update post
const updateComment = async (req,res)=>{
    try {
        const comId = req.params.comId
        const comm = await commentModel.findByIdAndUpdate(comId, req.body,{new:true})
        res.status(201).json({
            status:'updated successful',
            data:comm
        })
    } catch (error) {
        res.status(500).json({
            status:'server error',
            errorMessage:error.message
        })
    }
}

// delete comment
const deleteComment = async (req, res)=>{
    try{
        const comId = req.params.comId;
        await commentModel.findByIdAndDelete(comId);

        const postId = req.params.postId;
        const post = await postModel.findById(postId);

        post.comments.pull(comId);
        await post.save();


        res.status(200).json({
            status: "Successful",
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

module.exports ={
    createComment,
    getComments,
    getOneComment,
    updateComment,
    deleteComment,
}