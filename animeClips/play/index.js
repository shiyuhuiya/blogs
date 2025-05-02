const urlParams = new URLSearchParams(location.search)
document.addEventListener('DOMContentLoaded',()=>{
 const video = document.querySelector('#article-container video')
 video.src = `/animeClips/video/${urlParams.get('video')}.mp4`
})
