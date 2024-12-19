
# Project Title
: LOL INFO 웹페이지

1.# 사용한 라이브러리
🛠 Skills
Next.js,Typescript,React,Tailwind CSS

2. ## **메인페이지, 레이아웃 구성 및 네비게이션 추가**
   ### **페이지 설정 및 메인 페이지 구현**
- 경로: `/`
- 기능: 앱의 홈 페이지로, 주요 링크와 간단한 소개를 제공합니다.
- 렌더링 방식: **Static Site Generation (SSG)**
    - 빌드 시점에 페이지를 정적으로 생성합니다.
- 글로벌 레이아웃을 설정하고 네비게이션 메뉴를 추가하여 페이지 간 이동이 가능하도록 합니다.
- 챔피언 목록, 아이템 목록, 로테이션 정보 페이지로 이동할 수 있는 링크를 제공합니다.


3. ## 챔피언 목록 페이지 구현

### **페이지 설정**

 경로: `/champions`
 기능: 모든 챔피언의 목록을 표시합니다.
 렌더링 방식: **Incremental Static Regeneration (ISR)**
재검증 시간(`revalidate`): **하루(86400초)**
챔피언 데이터는 자주 변경되지 않으므로 ISR을 사용하여 성능을 최적화합니다.
  
각 챔피언의 이름과 썸네일 이미지를 표시합니다.
각 챔피언을 클릭하면 해당 챔피언의 상세 페이지로 이동합니다.

4. ## 챔피언 상세 페이지 구현

### **페이지 설정**

 경로: `/champions/[id]`
기능: 특정 챔피언의 상세 정보를 표시합니다.

- 서버 컴포넌트로 작성하여 서버 사이드에서 데이터를 가져옵니다.
- 챔피언의 이름, 타이틀, 이미지, 설명 등을 표시합니다.
- 메타데이터를 설정하여 SEO를 향상시킵니다.


5. 챔피언 로테이션 페이지 구현

### **페이지 설정**

- 경로: `/rotation`
- 기능: 현재 무료로 플레이 가능한 챔피언들을 표시합니다.
- 렌더링 방식: **클라이언트 사이드 렌더링 (CSR)**
- 클라이언트에서 데이터를 가져와 렌더링합니다.

- **클라이언트 컴포넌트**로 작성하여 클라이언트 사이드에서    데이터를 가져옵니다.
- 챔피언 목록과 동일한 방식으로 챔피언들을 표시합니다.


6. 레이아웃 및 네비게이션 구성
글로벌 레이아웃을 설정하고, 네비게이션 메뉴를 추가하여 페이지 간 이동이 가능하도록 합니다. 




7. 메인 화면 슬라이드 기능
사용자의 UX향상및 흥미를 위해 3초마다 메인화면이 바뀌는 슬라이드
기능 구현




8. 배경음악 재생기능 
사용자의 UX 부분의 향상을 위해서 웹페이지 분위기에 맞는 배경음악을
재생 및 정지 다음곡으로 넘길수 있는 기능을 합니다
