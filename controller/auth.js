const express = require("express");
const Sort_User = require("../models/User");

const postuser = async (req, res) => {
  const data = await Sort_User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  const user_data = await data.save();
  //   res.status(200).send({ "User Stored : ": user_data });
  res.send(page);
};

const allusers = async (req, res) => {
    const filter_value ={}
  const { size, order, filter_name } = req.body;
  fitler_by = Object.keys(filter_name)[0]
  console.log(fitler_by);
  const page = parseInt(req.query.page) || 10;
  const pageSize = parseInt(req.query.limit) || 10;
  console.log(pageSize);
  const skip = (page - 1) * pageSize;
  const total = await Sort_User.countDocuments();
  const pages = Math.ceil(total / pageSize);
   filter_value[fitler_by] ={ $regex:filter_name[fitler_by], $options: "i" }
   user_data = await Sort_User.find(filter_value)
    .skip(skip)
    .limit(pageSize)
    .sort({"first_name":order});
    console.log(filter_value);
  res.send({
    pages,
    page,
    size,
    Info: user_data,
  });
};

module.exports = { postuser, allusers };
