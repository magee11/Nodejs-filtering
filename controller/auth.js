const express = require("express");
const Sort_User = require("../models/User");


// post user data
const postuser = async (req, res) => {
  const data = await Sort_User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  const user_data = await data.save();
  res.send(page);
};



// get user data filtered panigated 
const allusers = async (req, res) => {

  const filter_value = {};
  const { size, order, filter_name } = req.body;
  fitler_by = Object.keys(filter_name)[0];
  const page = parseInt(req.query.page) || 10;
  const pageSize = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * pageSize;
  const total = await Sort_User.countDocuments();
  const pages = Math.ceil(total / pageSize);

  
  filter_value[fitler_by] = { $regex: filter_name[fitler_by], $options: "i" };
  user_data = await Sort_User.find(filter_value)
    .skip(skip)
    .limit(pageSize)
    .sort({ fitler_by: order });
  console.log(filter_value);
  res.send({
    pages,
    page,
    size,
    Info: user_data,
  });
};

module.exports = { postuser, allusers };
