import bcrypt from 'bcrypt';


export const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync()
}