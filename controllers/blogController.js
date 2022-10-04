const Blog = require('../models/blogModel');

/*Get và post tạo bài viết nhật ký mới*/
const getBlogCreate = (req, res, next) => {
    res.render('./blog/blogAdd');
}

const postBlogCreate = (req, res, next) => {
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;
    //insert vào db
    Blog.blogAdd(data.title, data.content);
    res.redirect('/');
}

// xem chi tiết bài nhật ký
const getBlogDetail = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu bài viết theo id
    const data = Blog.blogGetDetail(ID);
    res.render('./blog/blogDetail', {data: data});
}

/*Get và post cập nhật bài viết nhật ký*/
const getBlogUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu bài viết theo id
    const data = Blog.blogGetDetail(ID);
    res.render('./blog/blogUpdate', {data: data});
}

const postBlogUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;

    //update lại db dữ liệu đã nhận theo id bài viết
    Blog.blogUpdate(ID, data.title, data.content);
    res.redirect('/');
}

/*Get và post xóa bài viết nhật ký*/
const getBlogDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    ////truy vấn db để dữ liệu bài viết theo id
    const data = Blog.blogGetDetail(ID);
    res.render('./blog/blogDelete', {data: data});
}

const postBlogDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //delete bài viết khỏi db theo id bài viết
    Blog.blogDelete(ID);
    res.redirect('/');
}
module.exports = {
    getBlogCreate,
    postBlogCreate,
    getBlogDetail,
    getBlogUpdate,
    postBlogUpdate,
    getBlogDelete,
    postBlogDelete
}