
function updateCommentCount() {
    var commentList = document.getElementById('commentList');
    var comments = commentList.getElementsByClassName('comment');
    var commentCount = comments.length; // 댓글 개수 계산
    document.getElementById('commentCount').innerText = `[${commentCount}]`; // 댓글 수 업데이트
}
// 댓글을 추가하거나 불러올 때 updateCommentCount 함수를 호출합니다.
