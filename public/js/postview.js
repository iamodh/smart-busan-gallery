function submitComment() {
    var commentInput = document.getElementById('commentInput');
    var commentList = document.getElementById('commentList');
    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentInput.value; // 입력한 댓글의 내용을 새 댓글 요소의 텍스트로 설정합니다.
    commentList.appendChild(newComment); // 새 댓글을 댓글 리스트에 추가합니다.
    commentInput.value = ''; // 댓글 입력란을 비웁니다.
}

function updateCommentCount() {
    var commentList = document.getElementById('commentList');
    var comments = commentList.getElementsByClassName('comment');
    var commentCount = comments.length; // 댓글 개수 계산
    document.getElementById('commentCount').innerText = `[${commentCount}]`; // 댓글 수 업데이트
}
// 댓글을 추가하거나 불러올 때 updateCommentCount 함수를 호출합니다.
