const bcrypt = require('bcrypt')



const crypto = async(pwd)=>{
   const salt = await bcrypt.genSalt()



   const cryptoPass = await bcrypt.hash(pwd, salt)


  return cryptoPass
}

module.exports = {
    crypto,
}