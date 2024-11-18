# catching bugs
공부용 웹 게임 "벌레 잡기"

- **Phaser 3**: HTML5 기반 게임 개발 프레임워크
- **HTML/CSS/JavaScript**: 웹 기반 애플리케이션 개발
- **Node.js/npm**: 패키지 관리 및 개발 환경 구성
- **Git**: 버전 관리

## 화면

현재 실행 시 화면

![image](/asset/image/image.png)

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
