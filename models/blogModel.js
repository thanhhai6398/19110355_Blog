// Khởi tạo mảng blog - lưu các instance blog
const blog = [];
// Tạo biến đếm ids - hỗ trợ việc auto increase primary key (id)
var ids = 1;
// thêm mới bài nhất ký
function blogAdd(title, content) {
    id = ids;
    blog[id] = {id: ids, title: title, content: content};
    ids ++;
}
// cập nhật bài nhật ký
function blogUpdate(id, title, content) {
    blog[id] = {id: id, title: title, content: content}
}
// xóa bài nhật ký
function blogDelete(id) {
    delete blog[id];
}
// lấy danh sách các id trong mảng bài nhật ký
function blogGetListID() {
    return Object.keys(blog);
}
// lấy chi tiết bài nhật ký bằng id
function blogGetDetail(id) {
    return blog[id];
}
module.exports = {
    blogAdd,
    blogUpdate,
    blogDelete,
    blogGetListID,
    blogGetDetail
}