//libraries
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

//MODIFIES: request object
//EFFECTS: authenticates user and adds payload as a request variable
const validateToken = async (req, res, next) => {
  const token = req.header("token");

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });

    //storing payload as a request variable for later use
    req.payload = ticket.getPayload();

    if (ticket) {
      return next();
    }
    //if user is not authenticated, returns error to client
  } catch (err) {
    return res.json({ error: "user not authenticated...please login" });
  }
};

module.exports = validateToken;
