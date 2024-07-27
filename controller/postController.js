const express = require("express");
const postModel = require('../model/postModel');

// create post
const createPost = async (req, res)=>{
    try{
        const {title, content} = req.body;
        console.log(req.body)
        const post = new postModel({
            title, content
        });
        console.log(req.body)

        await post.save();
        res.status(201).json({
            status: "Successful",
            data: post,
            
        })
    
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// get all
const getPosts = async (req, res)=>{
    try{
        const post = await postModel.find();
        res.status(201).json({
            status: "Successful",
            data: post
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// get a post
const getPost = async (req, res)=>{
    try{
        const postId = req.params.postId
        const post = await postModel.findById(postId);
        res.status(201).json({
            status: "Successful",
            data: post
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// update post
const updatePost = async (req, res)=>{
    try{
        const postId = req.params.postId
        const post = await postModel.findByIdAndUpdate(postId, req.body, {new: true});
        res.status(201).json({
            status: "Successful",
            data: post
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

// delete post
const deletePost = async (req, res)=>{
    try{
        const postId = req.params.postId
        await postModel.findByIdAndDelete(postId);
        res.status(201).json({
            status: "Successful",
        })
    }catch(error){
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}


module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}