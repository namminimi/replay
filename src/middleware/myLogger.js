const myLogger = store => next => action => {
    //액션 출력하기
    console.log(action); //리듀서 가기전에 먼저 출력
    //next는 다음미들웨어에게 액션 전달
    const result = next(action);
    console.log(store.getState())
    return result;
}
//역할은 콘솔에 뭐가 왔는지 출력하는 용도
export default myLogger;