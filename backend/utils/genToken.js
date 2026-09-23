import jwt from "jsonwebtoken";

export const genToken = async (id, email, name) => {
  return jwt.sign(
    {
      _id: id,
      email,
      name,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    },
  );
};
