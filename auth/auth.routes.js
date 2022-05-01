const User = require("../models/user.models");
const Address = require("../models/address.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Profile = require("../models/profile.models");
const Store = require("../models/store.models");
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
router.post(`/register`, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(422).json("Email already exist");
    }
  } catch (err) {
    return res.status(500).json(err);
  }

  try {
    const newAddress = new Address({
      street: req.body.street,
      city: req.body.city,
      country: req.body.country,
      zipCode: req.body.zipCode,
    });
    const savedAddress = await newAddress.save();
    // console.log(savedAddress)

    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //* creation Profile
    const newProfile = new Profile();
    const savedProfile = await newProfile.save();
    ///-----

    // const role =
    //   req.path.split("/")[2] === "customer" ? "customer" : "merchant";
    const role = req.query.role;
    if (role === "merchant") {
      //* creation Store
      const newStore = new Store();
      const savedStore = await newStore.save();
      ///------
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        number: req.body.number,
        role: role,
        password: hashedPassword,
        address: savedAddress._id,
        profile: savedProfile._id,
        store: savedStore._id,
      });
      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
    }
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: role,
      password: hashedPassword,
      address: savedAddress._id,
      profile: savedProfile._id,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json("wrong email or password ");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json("wrong password or email");
    }

    const token = jwt.sign(
      /* payload */ {
        _id: user._id,
        email: user.email,
        name: user.firstName,
        store: user.store,
        address: user.address,
        isAdmin: user.isAdmin,
        role: user.role,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "3 days" }
    );
    //console.log(user._id)

    return res.status(200).json({ user: user, token: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/allCustomer/me", verifyToken, async (req, res) => {
//   try {
//     const customer = await User.find({ role: "customer" });
//     return res.status(200).json(customer);
//   } catch (err) {
//     return res.status(404).json(err);
//   }
// });

router.get("/check", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser._id).populate("address");
    if (!user) {
      return res.status(404).json("not found admin");
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
