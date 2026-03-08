const colors=[
"black",
"white",
"gray",
"blue",
"purple",
"green",
"red",
"pink",
"yellow"
]

function random(arr){
return arr[Math.floor(Math.random()*arr.length)]
}

function drawFortune(){

const today=new Date().toDateString()

if(localStorage.getItem("fortuneDate")==today){
alert("今天已经抽过了")
return
}

const color=random(colors)

const video=random(videos[color])

const number=Math.floor(Math.random()*99)+1

document.getElementById("result").innerHTML=

`
🎨 今日幸运色：${color}

🔢 幸运数字：${number}

🚶 今日宜：看啾舞台

⚠ 今日忌：不看直拍
`

document.getElementById("video").innerHTML=

`
<h3>今日舞台 #JJYU${number}</h3>

<iframe src="https://player.bilibili.com/player.html?bvid=${video}&page=1"></iframe>

<br>

<a href="https://www.bilibili.com/video/${video}" target="_blank">
<button>去Bilibili观看</button>
</a>
`

localStorage.setItem("fortuneDate",today)

}

function toggleBGM(){

const bgm=document.getElementById("bgm")

if(bgm.paused){

bgm.play()

}else{

bgm.pause()

}

}
