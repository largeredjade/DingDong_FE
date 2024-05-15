// 사용자 정보를 로컬 스토리지에 저장하는 함수
export const saveUserInfoToLocalStorage = (userInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

// 로컬 스토리지에서 사용자 정보를 가져오는 함수
export const getUserInfoFromLocalStorage = () => {
    const userInfoString = localStorage.getItem('userInfo');
    return userInfoString ? JSON.parse(userInfoString) : null;
};

export const removeUserInfo = ()=>{
    localStorage.removeItem('userInfo')

}