var User=require('../register/register-model')

const user = new User({
  
    CreatedAt: '2002-12-09'
  });
  user.CreatedAt instanceof Date; // true
  user.validateSync()