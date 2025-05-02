if (/\/animeClips\/play/.test(location.pathname)) {
  //使用URLSearchParams,能很快的从查询参数中取值，前提是你知道有哪些参数
  const urlParams = new URLSearchParams(location.search)
  const title = urlParams.get('title')
  const video = urlParams.get('video')

  document.addEventListener('DOMContentLoaded', () => {
    const v = document.querySelector('#article-container video')
    v.src = `/animeClips/video/${video}.mp4`
    //支持自定义标题
    document.querySelector('.page-title').innerHTML = `<i class="fa-solid fa-arrow-left" onclick="history.go(-1)"></i>${title ? title : video}`
  })
}else{
  //给标题部分添加返回按钮，使用于所有不使用top_img的页面
  const title =  document.querySelector('.page-title')
  if(title){
    let a = title.innerHTML
    title.innerHTML = `<i class="fa-solid fa-arrow-left" onclick="history.go(-1)"></i>`+a
  }
}
