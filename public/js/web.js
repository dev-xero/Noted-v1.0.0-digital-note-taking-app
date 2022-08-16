const AVATAR_URL = "./public/assets/images/avatars/avatar-001.png"

const avatarImg = document.querySelector('.review-avatar')

document.addEventListener('DOMContentLoaded', () => {
	avatarImg.setAttribute('src', AVATAR_URL)
}, false)