"use client"; // 이 파일이 클라이언트 측에서 실행된다는 것을 나타냅니다.

// 리액트 쿼리 클라이언트를 사용할 때는 "use client"를 꼭 사용해야 합니다.

import {
  isServer, // 현재 환경이 서버인지 클라이언트인지 확인하는 변수
  QueryClient, // 쿼리 클라이언트를 생성하는 클래스
  QueryClientProvider, // 쿼리 클라이언트를 React 컴포넌트에 제공하는 컴포넌트
} from "@tanstack/react-query"; // @tanstack/react-query 라이브러리에서 필요한 모듈을 가져옵니다.

// 쿼리 클라이언트를 생성하는 함수
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 쿼리의 기본 옵션을 설정합니다.
        staleTime: 60 * 1000, // 쿼리가 신선하다고 간주되는 시간을 60초로 설정합니다.
        gcTime: 60 * 1000, //
      },
    },
  });
}

// 브라우저에서 사용할 쿼리 클라이언트를 저장할 변수
let browserQueryClient: QueryClient | undefined = undefined;

// 쿼리 클라이언트를 가져오는 함수
function getQueryClient() {
  if (isServer) {
    // 현재 환경이 서버인 경우
    return makeQueryClient(); // 새로운 쿼리 클라이언트를 생성하여 반환합니다.
  } else {
    // 현재 환경이 클라이언트인 경우
    if (!browserQueryClient)
      // 브라우저 쿼리 클라이언트가 아직 생성되지 않았다면
      browserQueryClient = makeQueryClient(); // 새로운 쿼리 클라이언트를 생성하여 저장합니다.
    return browserQueryClient; // 이미 생성된 쿼리 클라이언트를 반환합니다.
  }
}

// Providers 컴포넌트 정의
export default function Providers({ children }: { children: React.ReactNode }) {
  // 쿼리 클라이언트를 가져옵니다.
  const queryClient = getQueryClient();

  // QueryClientProvider로 children을 감싸서 쿼리 클라이언트를 제공하는 컴포넌트를 반환합니다.
  return (
    <QueryClientProvider client={queryClient}>
      {children} {/* 자식 컴포넌트를 렌더링합니다. */}
    </QueryClientProvider>
  );
}

