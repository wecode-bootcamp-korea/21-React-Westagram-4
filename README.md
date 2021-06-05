<h1>21기 React 4팀

## 프로젝트 내용

---

- 자바스크립트로 클론한 Westagram 리액트로 적용하기
- 프로젝트 초기 셋팅(CRA)
- GIT을 활용한 협업 연습

## 공통 Mission

---

### Mission 1) Login | 사용자 입력 데이터 저장

- 다음의 순서에 맞게 코드를 작성하여 ID, PW `<input>`에 입력된 값을 state 에 저장해주세요.

1. ID `<input>` 에서 `onChange` event 발생
2. event 발생 시 `handleIdInput` 함수 실행
3. `handleIdInput` 는 이벤트를 인자로 받음
4. event가 일어난 요소에 담긴 value 값 (`event.target.value`)을 state에 저장
5. 위의 과정을 PW `<input>` 에도 동일하게 적용
6. 위 순서대로 완료 후 `Add : Mission 1 - 사용자 입력 데이터 저장 기능 구현` commit message를 남긴 후 push 해주세요.

### Mission 2) Login | 로그인 버튼 활성화 (validation)

- 입력한 아이디와 비밀번호가 기준에 맞는 경우에만 로그인 버튼 색상이 활성화될 수 있도록 해주세요.
- ex. ID - `@` 포함 / PW - 5글자 이상
- [삼항 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 적용해서 조건에 따라 버튼 색상에 변화를 주시기 바랍니다.
- 위 순서대로 완료 후 `Add : Mission 2 - 로그인 버튼 활성화 기능 구현` commit message를 남긴 후 push 해주세요.

### Mission 3) Main | 댓글 기능

- 사용자가 댓글 입력 후 enter 를 누르거나 왼쪽의 버튼 클릭 시 댓글이 추가되도록 구현해주세요.
- 댓글 기능을 구현하기 위해서는 배열 데이터 타입을 활용해야 합니다.
- [Array.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 참고해서 시도해주세요.
- 위 순서대로 완료 후 `Add : Mission 3 - 댓글 기능 구현` commit message를 남긴 후 push 해주세요.

### Mission 4) Main | 댓글 컴포넌트화 + props로 데이터 전달

- **map 함수를 활용해 댓글 목록을 구현해주세요.**
- 댓글 하나를 컴포넌트화 시켜주세요.
- 부모의 `state` 에 저장된 댓글 데이터에 `Array.map()` 메소드를 적용해 댓글의 개수만큼 댓글 컴포넌트가 나타나게 해주세요.
- 필요한 데이터를 `props` 로 넘겨주세요.
- 기존에 보였던 대로 댓글이 화면에 나타나면 과제 완료입니다.
- 위 순서대로 완료 후 `Add : Mission 4 - 댓글 컴포넌트화, props로 데이터 전달 구현` commit message를 남긴 후 push 해주세요.

### Mission 5) map 함수 적용시 key props를 부여하는 이유

- 위 공식문서를 참고하여 `map 함수 적용시 key props를 부여하는 이유`에 대해 블로그를 작성해주세요.
- 본인이 작성한 map 함수 사용 코드를 예시로 활용하여 설명해주세요.
  
# 💻 프로젝트
![1-1](https://user-images.githubusercontent.com/73716178/120894163-fdf0cf00-c651-11eb-8021-679e9811f730.gif)
![1-2](https://user-images.githubusercontent.com/73716178/120894170-03e6b000-c652-11eb-9c83-004b0d97a85a.gif)

## 📢 주제: React를 사용한 Instagram Clone

- CRA를 사용한 초기 세팅
- 3명의 팀원들이 공통 Common.scss, Reset.scss, Variables.scss 사용 및 관리
- git을 사용한 첫 번째 협업

## 📆 프로젝트 기간

- 2021.5.26 ~ 6/4

## ⛳️ 팀원 별 작업 현황

Git을 활용한 Westagram React 팀 프로젝트

- 바닐라 자바스크립트로 클론한 인스타그램 프로젝트 리액트로 옮기기
- 로그인 페이지 레이아웃
- id, pw 입력 시 로그인 버튼 활성화 기능
- 메인 페이지 레이아웃
- 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능
- 문자 입력 시 게시 버튼 활성화 기능
- Mockdata를 활용한 여러 줄의 댓글 및 피드 구현

## 🛠 기술 스택

- HTML,CSS
- JavaScript(ES6+)
- React
- SCSS
- JSON

## 👥 팀원 깃허브

- [전건우](https://github.com/fghjjkl32)
- [이상훈](https://github.com/simoniful)
- [박현찬](https://github.com/Eyes0n)
