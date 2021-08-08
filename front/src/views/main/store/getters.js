import state from "./state"

// 플랫폼 관련 정보 가져오기
export function getIsDesktopPlatform(state) {
  return state.isDesktopPlatform
}

// 로그인 여부 반환
export function isLoggedIn(state) {
  return state.accessToken ? true : false
}

export function email(state) {
  return state.email
}

export function mypageMenu(state) {
  return state.mypageSeletedMenu
}

export function username (state) {
  return state.username
}

export function profileImageURL (state) {
  if (state.profileImageURL === undefined || state.profileImageURL === '' || state.profileImageURL === null) {
    return ''
  }
  console.log('바껴땅')
  return `https://0.0.0.0:8080/${state.profileImageURL}`
}

export function myRoom (state) {
  return state.myRoom
}

export function publisher (state) {
  return state.publisher
}

export function onVideo (state) {
  return state.onVideo
}

export function onAudio (state) {
  return state.onAudio
}
