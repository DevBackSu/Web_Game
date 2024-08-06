# catching bugs
공부용 웹 게임 "벌레 잡기"

- **Phaser 3**: HTML5 기반 게임 개발 프레임워크
- **HTML/CSS/JavaScript**: 웹 기반 애플리케이션 개발
- **Node.js/npm**: 패키지 관리 및 개발 환경 구성
- **Git**: 버전 관리

## 화면

현재 실행 시 화면

![image](https://github.com/DevBackSu/Web_Game/assets/88326586/94700957-0393-4cb1-9042-b2cdce963bbd)

## 명령어

```cmd
//webpack 서버 실행
npm run serve
npm start

//개발 모드 빌드 (디버그용)
npm run build:dev
npm run dev

//프로덕션 모드 빌드 (배포용)
npm run build
npm run build:prod

//파일 변경 감시
npm run watch
```

# 진행 상황
- 인트로 화면과 메인 화면 구분
- 벌레 이미지를 무작위 크기로 무작위 위치에서 생성
- 벌레 이미지 클릭 시 이미지 삭제 (클릭하지 않으면 1초 뒤 destroy)
- 시간 설정 (30초)
- 벌레 클릭 시 이미지 변경
- 벌레 잡을 때마다 + 1점
- 점수별 엔딩 구분

# 목표
- 음악 설정
- 배포
- 새 씬 (게임) 추가
  - 새 게임 목록
    - 퀴즈


## 참고

phaser 홈페이지 : https://phaser.io/download/stable<br/>
무료 게임 에셋 사이트 : https://opengameart.org

<!-- ## 목표
- 상단 버튼 클릭 시 구현 or 출력 화면 <-> 코드 화면
- 물음표 버튼 클릭 시 게임 방법 설명
- 뒤로 가기 버튼 클릭 시 이전 페이지로 이동
- 오류 문장 클릭 or 입력 시
  - 정답이면 성공 -> 다음 문제
  - 오답이면 실패 -> 현재 문제 진행
    - 3번 실패 시 '공부하세요' 하고 관련 공식 사이트로 이동시킴

### 문제 목록
- HTML 문제
- CSS 문제
- JS 문제
- JAVA 문제 -->