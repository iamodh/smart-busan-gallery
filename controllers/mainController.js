const showMain = (req, res) => {
  res.send("Main");
};

// 게시글 표시하기
const getPost = async(req, res) => {
  const {id} = req.params;
  res.send(`Post ID: ${id}`);
};

// 댓글 표시하기
// const getComments = async(req, res) => {
//   const post = await Comments.findById(req.params.id);
//   res.send(`Comments ID: ${req.params.id}`);
// };

module.exports = { showMain, getPost };