import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExits = await User.findOne({ where: { email: req.body.email } });

    if (userExits) {
      return res.status(400).json({ error: 'User already exits' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    console.log(req.UserId);

    return res.json({ Ok: true });
  }
}

export default new UserController();
