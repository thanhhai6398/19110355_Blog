const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

//route get/post form thêm mới blog
router.get('/add', controller.getBlogCreate);
router.post('/add', controller.postBlogCreate);

//route get xem chi tiết blog
router.get('/detail/:id', controller.getBlogDetail);

//route get/post cập nhật bài blog
router.get('/update/:id', controller.getBlogUpdate);
router.post('/update/:id', controller.postBlogUpdate);

//route get/post xóa bài blog
router.get('/delete/:id', controller.getBlogDelete);
router.post('/delete/:id', controller.postBlogDelete);

module.exports = router;