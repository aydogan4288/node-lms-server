var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query('select * from lms_node.author', function(err, result) {
        cb(err, result);
      });
};

exports.addAuthor = function(author, cb){
  db.beginTransaction(function(err){
    if(err) cb(err, null);

    db.query('insert into lms_node.author(author_name) values(?)',
    [author.author_name], function(err, res){
      if(err){
        db.rollback(function(err, res){
          cb(err, res);
        })
      }
      db.commit(function(err, res){
        cb(err, res);
      })
    })
  })
}

exports.removeAuthor = function(authorId, cb){
  db.beginTransaction(function(err){
    if(err) cb(err, null);

    db.query('delete from lms_node.author where id = ?',
    [authorId], function(err, res){
      if(err){
        db.rollback(function(err, res){
          cb(err, res);
        })
      }
      db.commit(function(err, res){
        cb(err, res);
      })
    })
  })
}

exports.updateAuthor = function(author, cb){
  db.beginTransaction(function(err){
    if(err) cb(err, null);

    db.query('UPDATE lms_node.author SET author_name = ? WHERE id =?',
    [author.author_name, author.id], function(err, res){
      if(err){
        db.rollback(function(err, res){
          cb(err, res);
        })
      }
      db.commit(function(err, res){
        cb(err, res);
      })
    })
  })
}
