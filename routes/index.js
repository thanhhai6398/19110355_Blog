const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  // truy vấn db lấy ra tất cả các id của bài viết
  const data = Blog.blogGetListID();
  
  // sau khi có được mảng id các bài viết, ta sẽ lấy chi tiết từng bài viết một theo từng id 
  // và lưu vào mảng result
  const result = data.map((id) => {
    return Blog.blogGetDetail(id)
  });

  // render  và truyền mảng result sang file index.hbs
  res.render('index', {result: result});
});

module.exports = router;