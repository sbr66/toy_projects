// 1. 요소 선택

const accHeader = document.querySelectorAll(".acc-header");
const body = document.querySelector("body");
const accordion = document.querySelector("#accordion");

// 2. 헤더 요소를 각각 클릭하기 위한 반복문
// toggle() 참조 : https://goddino.tistory.com/129
accHeader.forEach((header) => {
  header.addEventListener("click", () => {
    closeAll(header);
    header.classList.toggle("active");
  });
});

// 3. 클릭한 요소만 아코디언 기능 실행
const closeAll = (item) => {
  accHeader.forEach((header) => {
    if (item !== header) {
      // closeAll 함수로 가져온 요소와 새롭게 작성한 헤더 배열 요소와 비교하여 다를경우 아코 디언 기능 취소
      header.classList.remove("active");
    }
  });
  //console.log(item);
};

// 4. 아코디언 이외 영역 클릭시 아코디언 기능 취소
body.addEventListener("click", (e) => {
  // element.contains(e.target) : element 요소 안에 e.targe 요소를 체크하여 boolean 으로 리턴
  if (!accordion.contains(e.target)) {
    accHeader.forEach((header) => {
      header.classList.remove("active");
    });
  }
});
