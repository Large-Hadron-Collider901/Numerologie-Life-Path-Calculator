const express = require("express");
const router = express.Router();
const profileModel = require("../models/ProfileSchema");

router.post("/", async (_, res) => {
  const profiles = [
    new profileModel({
      name: "Skye",
      birthMonth: 05,
      birthDay: 25,
      birthYear: 1997,
      gender: "Female",
      lifePath: 11,
      zodiacSign: "Gemini",
      email: "skyemc608@gmail.com",
    }),
    
  ];

  for await (const profile of profiles) profile.save()
 .then(() => res.json({ 
   status: "ok" ,
  message: "Created Profile Successfully"
})) 
.catch(err => res.status(400).json({
  "error": err,
  "message": "Error creating account"
}))
  // profiles.forEach(profile => await profile.save());

  // await profileModel.create(profiles, (err, results) => {
  //   err ? res.send(err) : res.send(results);
  // });
});

module.exports = router;
