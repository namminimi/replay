import { combineReducers } from "redux";
import posts from "./posts";
import todos from "./todos";


//한푸로젝트에 여러개의 리듀서가 있을 경우
//하나의 리듀서로 합쳐서 사용
//합쳐진 리듀서를 루트리듀서
//combineReducers({key: value})
//모듈과 모듈 합치는 파일 rootreducer 만들면 스토어 만들 준비 완료
const rootReducer = combineReducers({todos, posts})
export default rootReducer;