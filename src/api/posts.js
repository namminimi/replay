//가짜 서버 만들기
const sleep = n => new Promise(resolve => setTimeout(resolve, n))
//프로미스는 성공하면 resolve , 실패하면 reject
const posts = [
    {
        id:1,
        title: "리덕스",
        desc: "상태관리는 리덕스"
    },
    {
        id:2,
        title: "리덕스 미들웨어 redux-thunk",
        desc: "상태관리는 리덕스"
    },
    {
        id:3,
        title: "리덕스 미들웨어 redux-saga",
        desc: "상태관리는 리덕스"
    },
]

//가짜 비동기 함수
export const getPosts =  async () => {
    await sleep(500);  //0.t초 쉬고
    return posts   //배열 리턴
}

export const getPostbyId = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id) //id
}