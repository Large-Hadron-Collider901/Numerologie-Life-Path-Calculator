const express = require("express");
const router = express.Router();
const profileModel = require("../models/ProfileSchema");

router.post("/", async (_, res) => {
  const profiles = [
  
    new profileModel({
      name: "Skye",
      birthMonth: 5,
      birthDay: 25,
      birthYear: 1997,
      gender: "Female",
      lifePath: 11,
      zodiacSign: "Gemini",
      email: "skyemc608@gmail.com",
    }),
  ];

  for await (const profile of profiles) profile.save();
  res.json({ status: "ok" });

});

module.exports = router;
