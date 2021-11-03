import User from "../models/user.model.js";

export const createUser = (req, res) => {
  const { username, name, password } = req.body;
  try {
    const newUser = new User({ username, name, password });
    newUser.save((err) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json("user created");
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(user);
  });
};

export const deleteUser=(req, res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("user deleted");
  });
}

export const updateUser = (req, res) => {
  const { username, name } = req.body;
  try {
    User.findByIdAndUpdate(
      req.params.id,
      { username, name },
      { new: true },
      (err, user) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("user updated");
      }
    );
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

