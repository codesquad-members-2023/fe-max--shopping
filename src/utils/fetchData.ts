export const fetchData = async (url: string, options?: RequestInit): Promise<any> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
    );
  }

  return await response.json();
};
