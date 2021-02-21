const db = require('../database');

const course = {
  get: function(callback) {
    return db.query('select * from course order by id_course desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book where id_book=?', [id], callback);
  },
  add: function(course, callback) {
    return db.query(
      'insert into book (id_course,name,credits) values(?,?,?)',
      [course.id_course, course.name, course.credits],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from course where id_course=?', [id], callback);
  },
  update: function(id, course, callback) {
    return db.query(
      'update book set id_course=?,name=?, credits=? where id_course=?',
      [course.id_course, course.name, course.credits, id],
      callback
    );
  }
};
module.exports = course;