const User = require('./user')
const Pet = require('./pet')

/* Associations */
User.hasMany(Pet, {as: 'Adoptee'})
Pet.hasMany(User, {as: 'Referer'})
Pet.hasMany(User, {as: 'Referee'})

/* Export models */
module.exports = {
  User,
  Pet
}
