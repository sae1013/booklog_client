export const openCenteredPopup = (
    url: string,
    title: string,
    w: number,
    h: number
  ) => {
    // 화면 해상도를 기준으로 팝업 창의 시작 위치 계산
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;
  
    // 팝업 창 옵션 설정
    const options = `width=${w},height=${h},top=${top},left=${left}`;
  
    // 팝업 창 열기
    window.open(url, title, options);
  };
  