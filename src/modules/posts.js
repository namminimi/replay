import * as postApi from '../api/posts'
//액션타입, 액션생성함수, 리듀서 
//1.액션타입
//포스터 여러개 조회하기
const GET_POSTS = "GET_POSTS"; //요청시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS" //요청성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR" // 요청 실패

//포스터 하나 조회하기
const GET_POST = "GET_POST"; //요청시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS" //요청성공
const GET_POST_ERROR = "GET_POST_ERROR" // 요청 실패

//thunk사용하기
export const getPosts = () => async dispatch => {
    dispatch({type: GET_POSTS}); //요청시작
    //에러핸들링
    //에러발생확률이 있는 코드를 try문안에 작성
    //try 문안에서 에러가 발생되면 자바스크립트가 중지되지 않고
    //그 에러처리를 catch문에게 맞김
    try{
        const posts = await postApi.getPosts() 
        console.log(posts)
        dispatch({type: GET_POSTS_SUCCESS , payload: posts}); //성공
    }
    catch(e){
        dispatch({
            type: GET_POSTS_ERROR, payload: e
        })//실패
    }
}

//초기상태
const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
}
//리듀서 생성
export default function posts(state=initialState, action){
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
            case GET_POSTS_SUCCESS:
                return {
                    ...state,
                    posts: {
                        loading: false,
                        data: action.payload,
                        error: null
                    }
                }
                case GET_POSTS_ERROR:
                    return {
                        ...state,
                        posts: {
                            loading: false,
                            data: null,
                            error: action.payload
                        }
                    }        
        default: 
            return state    
    }
}