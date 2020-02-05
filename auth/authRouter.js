//Jordan and coin reg
//colin and jordand login

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { newToken } = require("./authMid");
const Staff = require("../data/Models/Staff-Model");
const Prisoners = require("../data/Models/Prisoners-Model");
const Prisons = require("../data/Models/Prisons-Model");

//Login //Register
router.post("/register", (req, res) => {
  let staff = req.body;
  const hash = bcrypt.hashSync(staff.password, 10);
  staff.password = hash;

  Staff.add(staff)
    .then(newStaff => {
      res.status(201).json(newStaff);
    })
    .catch(err => {
      console.log("register endpoint", err);
      res.status(500).json({
        message: "unable to register"
      });
    });
});

router.post("/login", (req, res) => {
  let { UserName, Password } = req.body;

  Staff.findBy({ UserName })
    .first()
    .then(staff => {
      console.log(Staff.Password);
      if (staff && bcrypt.compareSync(Password, staff.Password)) {
        const token = newToken(Staff);
        res.status(200).json({
          message: `Welcome Back ${staff.UserName}.`,
          token
        });
      } else {
        res.status(400).json({ message: "Wrong username or password" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "failed to login" });
    });
});

//Prisoner End Points

router.post("/prisoners", async (req, res) => {
  const prisoners = req.body;
  console.log(prisoners);
  if (!prisoners.name || !prisoners.skills) {
    return res
      .status(401)
      .json({ message: "Please provide all required fields" });
  }
  try {
    const newPrisoner = await Prisoners.add(prisoners);
    res.status(200).json({ message: "Prisoner was added to the DB" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "unable to add Priosner to the DB"
    });
  }
});

// Post PUT Get Delete prisons

router.post("/prisons", async (req, res) => {
  const prisons = req.body;
  console.log(prisons);
  if (!prisons.Prison_Name || !prisons.Location) {

    return res
      .status(400)
      .json({ message: "Please give required prison info" });
  }
  try {
    const newPrison = await Prisons.add(prisons);
    res.status(200).json({ message: "Prison was added to DB" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "unable to add Prison to the DB"
    });
  }
});

router
  .get('/prisons/:id', (req, res) => {
    Prisons.findByID(req.params.id)
      .then(prisoner => {
        console.log(prisoner)
        if (req.params.id) {
          res.status(201).json(prisoner);
        } else {
          res
            .status(404).json({
              message: "no prison with that ID exists"
            });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "could not get prison from the db"
        })
      })
  })

  router.put('/prisons/:id', async (req, res)=> {
     try {
       const change = await Prisons.update(req.params.id, req.body);
       if (change) {
        res.status(200).json({ message: "updated!" });
       } else {
        res
        .status(404)
        .json({ message: "this Prison id could not be found" });
       }
     }catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "failed to update the  Prisons database" });
    }
    
  })

  router.delete('/prisons/:id', async (req, res)=> {
        try {
          const ID = await Prisons.remove(req.params.id);
          if (ID > 0) {
            res.status(201).json({
              message: 'Success the prison has been deleted'
            })
          } else {
            res.status(404).json({
              message: 'the prison with that id doesnt exist'
            })
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: 'unable to delete the prison'
          })
        }

  });
  //delete prisoners and edit prisoner

  router.delete('/prisoners/:id', async (req, res)=> {
    try {
      console.log(Prisoners)
      const ID = await Prisoners.remove(req.params.id);
      
      if (ID > 0) {
      
        res
          .status(200)
          .json({ message: "prisoner has been deleted" });
      } else {
        res
          .status(404)
          .json({ message: "this prisoner can not be found" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "unable to delete prisoner from db" });
    }
  })




  
module.exports = router;
