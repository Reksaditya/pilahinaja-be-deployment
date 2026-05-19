import jwt from "jsonwebtoken"

const jwtsecret = process.env.JWT_SECRET || "secret";

export const generateToken = (payload:object) => {
  jwt.sign(payload, jwtsecret, {
    expiresIn: '24h'
  })
}

export const verifyToken = (token:string) => {
  jwt.verify(token, jwtsecret);
}