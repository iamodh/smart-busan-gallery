//<버튼 클릭 url>
document.getElementById("my_page").addEventListener("click", function() {
    var destinationURL = "my_page.html";
    window.location.href = destinationURL;
});
//마이페이지 버튼 클릭시 이동

document.getElementById("logout").addEventListener("click", function() {
    var destinationURL = "login.html";
    window.location.href = destinationURL;
});
//로그아웃 버튼

document.getElementById("write_button").addEventListener("click", function() {
    var destinationURL = "write_page.html";
    window.location.href = destinationURL;
});
//글쓰기 버튼 클릭시 이동


//<메뉴 선택시 색 변경>
document.querySelectorAll('.menu_list').forEach(function(item) {
    item.addEventListener('click', function() {
      // 모든 메뉴 항목에서 active 클래스 제거
        document.querySelectorAll('.menu_list').forEach(function(menu) {
        menu.classList.remove('active');
    });
      // 클릭한 메뉴 항목에 active 클래스 추가
    this.classList.add('active');
    });
});
