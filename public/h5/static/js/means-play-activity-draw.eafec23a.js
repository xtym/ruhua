(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["means-play-activity-draw"],{"01d6":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACG0lEQVRYR+2WPWgUQRTHf+9uwZwhxkAQFEVTKGpE/EJtlFhZCAoGRMFCO1NpIbIqucue6G1hYSrtFCwUUYQUgpVyYiH4hRCRqBBQwepMQEw87+7J3mKS3dsPE4uLsNPMzpv/m/ef/8x7O0KTmzQ5PvObgNoXHoJuRuQTqm8QnpE2inL63Nsg5fTypfVUK7tRdiCyEdUVIK/E7N8bpnSkAmrnrwPHfM7DGMYhP4l68ErlDtDtw98QM3t8bgQK1gAiuUZnfSlmbutMu9rWC5AtDVhVS87mBuZGwN3VcLCznhIzN+jMqW2dBLkSiDOM7rAjc/Cxl1Dt/F2gN2Dx92Jm17gE8iPA6gDMfTGzB6MyLZ5AwexAWh+A7myUl766TbgaEKRESrbLmf6PsyKgY8U+ahMFauXJKcdvkwYfSi2MlDJM/ErV7UZKSYvWv6sqVGrTm1nX+YPli8qsbP/pCW60DcrinsJMW4MCOl78grIstkBde+yFnOiJdUGkLO27FiQE/k6Bodcubv8mt/ePw44gym9WR/DoHbS1wLZVLoHno27/ZxxGwI9z1nHanrUkd+A/UWDsSQfjTz+DLIxM7FveGsMRT3oHu2Y2LJUl+75GZoEzqaMXvwOtkQRuV73Th9PxhUjLGemypits2M8oIZAokCgwHxS4CRx13jqhyX2v6k383nQ4FtIoQ9J1/oB/vdg3YXx1+TdEQqDpCvwGZ/YVML9it0QAAAAASUVORK5CYII="},2885:function(t,i,a){"use strict";a.r(i);var e=a("31b6"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"31b6":function(t,i,a){"use strict";a("d3b7"),a("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("cab5"),n={data:function(){return{web_url:e.Api_url,list:[{name:"A",value:"5",icon:"icondazhe text-danger",img:a("8ce3")},{name:"B",value:"6",icon:"icondazhe text-danger",img:a("b7bf")},{name:"7折",value:"7",icon:"icondazhe text-danger",img:a("fca7")},{name:"8折",value:"8",icon:"icondazhe text-danger",img:a("f8a5")},{name:"9折",value:"9",icon:"icondazhe text-danger",img:a("01d6")},{name:"感谢参与",value:"10",icon:"iconfangqi1 text-master",isNoPrize:!0,img:a("9383")}],width:0,animationData:{},btnDisabled:"",is_play:!1}},onLoad:function(){this.guess()},methods:{guess:function(){this.is_play=!0,this.width=360/this.list.length},play:function(){var t=this;uni.request({url:"http://authorization.ruhuashop.com/saas",data:{domain:e.Api_url},method:"POST",header:{"content-type":"application/json"},success:function(i){var a=i.statusCode.toString();console.log(i),200==a&&"ok"==i.data.data&&(t.is_play=!0),uni.hideLoading()}})},animation:function(t,i){var a=this.list,e=4;this.runDeg=this.runDeg||0,this.runDeg=this.runDeg+(360-this.runDeg%360)+(360*e-t*(360/a.length))+1;var n=uni.createAnimation({duration:i,timingFunction:"ease"});n.rotate(this.runDeg).step(),this.animationData=n.export(),this.btnDisabled="disabled"},playReward:function(){var t=this;if(!this.is_play)return this.$api.msg("非授权站点"),void setTimeout((function(){uni.navigateBack({})}),2e3);var i=5,a=4e3;this.animation(i,a),setTimeout((function(){uni.showModal({content:t.list[i].isNoPrize?"抱歉，您未中奖":"恭喜，中奖"}),t.btnDisabled=""}),a+1e3)}}};i.default=n},54917:function(t,i,a){t.exports=a.p+"static/img/circle.2fd04c3a.png"},6977:function(t,i,a){"use strict";var e=a("958a"),n=a.n(e);n.a},"888c":function(t,i,a){"use strict";a.r(i);var e=a("d367"),n=a("2885");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("6977");var s,r=a("f0c5"),d=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"2f54470a",null,!1,e["a"],s);i["default"]=d.exports},"8ce3":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACq0lEQVRYR+2Vz0tUURTHP8dRSbA0wzJkZpxXRhhMRVTQok1RQW0qWoWW+Qe0SShMKMpFP1ZBy36gtIoySKECFyYkFFFKRBi+yTeBGvS7nHJ0bjxHx3njm584M5sOvMV7557z/bxzz7lXyLNJnvVJCqA+v1/GhKNGnNpgOrBqdKSO4smPsqL2R6K45ACG/hzYCnJbXJ7GVCCUoZ8CrgAvxKVtyxhAGbqZxEwWNqXOi3vNuUQJ1Yhej9AeteaquLTmeDFxK2CTaBaCY+LWogXm+Qx9J9C7QEzRIG6tww4iPoChPwb22JIL28WpmVszL+73VxMKvkRYZRPzRFza3vQAzCYKhlpAHQRKYoI/ULLUK5WVPyO7Y+gDgDdmXQCkk6KCNlntfpsWQCTx2NhKJgP7EXUIxYFIEqFHnNrumdbw6w9jfF0ouU9xSbdUVX1KuQmVUomnwudzUagOgzQAG4HriEyh1ElgAFQ7U3IPj8dIKCqi5vwWQXXjwlegPJVR48RZ67LeBzD8JqVQaWqN6C4ewKM7sO8odFyG4GRCkOwA3LwYFjUr8+pp+Ilj2QUwRXcdgZ67eQQwpddtgqHX9sdIkh4om4mSJNdEY4t1wa22SGfPxHt3wOCzqJNq3i1NrQW2UxCZ/eHhMorkW8JOcnqsbr/P+l7ggNB0FICjQtxuc8osZvubajEAYpVUrgD8Q/BlFEqXQ2k5jI9ARRVUr89BBaaD0N8Ngd8Ld694yWmpb76U3S349R36u1Iav+w1oQlggsSao/CaHD9j3hlZbsJxAwb7rCo1G2Dtlhz0QLRsXyf8mYCaOqjdDDmbgjmIvwEw3oXFTcs5QN7OgXgz8L8CGVYg6jaJqa3T47B88fvirwVHWk2Y8BacdSqlIleq+UlEQqnEpXQQZZIo05h/6HE1MOlgXqEAAAAASUVORK5CYII="},9383:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADj0lEQVRYR+2WbWxTZRTH/+f2trdsa9cxYG9GectYMDEmhuhCRGOw7QfXBgkLKJFuiR8UHBKTqUFxn4whEhCjftGtmviFIdI2xJYYFUIyIjGamY1BmLiJbDBetvV1t733mF5T3XVdbzNN5oc+yf3y3PPye85zznkOYZEXLbJ//KcAOx4PLZMs6p7soYjoWk/E87HRAYsGaHeFPlJJtZEqjMbk5Nu937XGZhvf9WRgo1XiT6ptcr3FrCrXb1sllemCquJQd9gbnA/EEMDn/nIlselqraBMrTdlKn/KmKdToKsxUrd++tWW4azhNufJh0HCefdD42jd9Jvma3SiDF+ca0gNjtoT8ozpgc++afk9H4QhwPOuwNmNovzoLimh6SeY8E6qQo2x6efDYe+D2b29Tx8/VeOQna+3XhT/6eTdE403B0cc/p5Iy6sLAmhzBfmNJVGsFjI6/T0Jx0ySTfvB6qAkqccPPDNQVluVmuMjcL4ewb6Gk90Rz5YFAbzoDkwdsE7bawRVp/9tWsKxdNk4RPX75vW3Nj/3xEhZPgfthzeAgX3+iOfIggDa3MF9qyjT+ayUrJ0dhSQTOhOVqTjIun/7Rayp0+Ukhq7ZcLC3SfPZE/HMe9WGOaAlmSv0IcAvPCLKeMqcQr2gaIZfS9pla/UMunYOWHKn+3HYgTP9K+72/1pZxcSf+8PenYVK8S8AnzP0FhFvJ3BdPgVmWIjIygCZibUGks0KotzHYCbOKERgToNIJrA+cQAwaIyJf8iBaQA+Z6DLdK9jr/n+GodR48j+nwlfhrdZX1WBvgZI7sZi1JEeuDGpjE6+5z/t7dIBlL+yqSiA6MshdG4bQtM9Uc1h7r5tR1qKAogfOlsC+J9FoN0ZfIka7G8S0XILqxCYC95lfCyG1bVxncwv4+Uor6soqKcSQSYBzDyhjE3t9oe9vX+XoTuwjZiObUhOY2lmTvXoDEdsS7Fm+S3d3vDEMriidwoC3BFFXFhiBzE6uk973s8K6xpRtu93xG5gbWZuT59tucNxH3Zv7sPaFbe17Ss3q/HB1804OjlSEOCKaMXRihpdZ5wD0GmNoslUOALt8aq8ZdhdfrcgwJAi4mDKVgIoRaAUgVIECkdgndaECr8FlxQzGuv/nAVy6/J1G9aZ0gbzAOGSIs4P4HMHfVB5pdFUQUSP5R/b+IyRLgT0+8PeEzm5ooZSQ6P/QmDRAf4A8GM1Pw8HJW8AAAAASUVORK5CYII="},"958a":function(t,i,a){var e=a("d80a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("15a44d55",e,!0,{sourceMap:!1,shadowMode:!1})},b7bf:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3ElEQVRYR+2XP0wTcRTHv79rLRTaCgIC/WMCSIxRcUBjHdSy6aZGTHSROCjnxKK9TdwOHWRrdVA3jZjgZIwLbNb4B1TQRAZNhFZbsW0KXFvbe+Z3pJVCw9VA0qVvunfvft/3uff7/e7ej6HMxsqcHyUDzIneW4xwkTE2oxKeO/zy4Er4uX5pUGA4TkSdxHDP4Ru6WsrLlQQwJ0qPqxubemtdLmQUBUoohEw8Nt3qk/fyJCFRmjLatu6pcTohGI1QQkEokciIwyef1YMoCSAoSmOWtnaPdWenpkfZLGIfPyAZCb/lfnVTU3fdvi4wg1GLJ8NhRN9PjNt9cs+mAISuSPdtu3b31bh25PXS0d+Yf/Na8xsOHISpfls+Fp18ByUceejwy+c3B0D0niCwZ83HeiCYTHlNDkDZDBoPHc7fS0Yi4ABEdM7hH3q0KQBcJCh6bwNsoL5rP6qbWzTdX69eQk2lsP2oR/NT8/OIf55GVlHu2n3yZb3kPF6wBkKi1KsCvQKDk4jMADMDMANU8+8agtFiAVQVmaUlLYfmEyGzuMhdFYACkAIw/oB2zRhTVMKsAIy0+uSRHFwe4Hu/5DG7MGasIxgs+uyZb/blxAD+xOPY0vFTd1B2AViaYsgSelx+ebygAkFRulPbTZdsR0hXaCHAwAH4yucWnZzQACxu/bGxFwzKJ5afonwF+FazuslTishGAPjYRIDlt+gKgGsnDTZh1OomGGzrv0l6tngFTE79cYkAT6mesvtuPi2Ygq8DA3VVabMXRH0Alpf5OmZuaS2YgmQkrDeEx3+AsQcpkzLUNjwcW7MLcgpBUaKGMypMzuKa/zsF6Vlg/olQ9MtY9FNcAahUoFKBSgUqFahUoOwV4KecKheuW928vVtruX7A0t6hBRMzX7SOaO3fc7k/SAQEpL/jtN0vj65WK/o35P2hUcAFIvDeYMNGhBurj3I50ZJORhsmWEeg7AB/AQZGIT/h4hyUAAAAAElFTkSuQmCC"},d367:function(t,i,a){"use strict";var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"conbox"},[a("v-uni-view",{staticClass:"container"},[a("v-uni-image",{staticClass:"cont",attrs:{src:t.web_url+"/static/web/dzp/bg.png",mode:""}}),a("v-uni-image",{staticClass:"caidai",attrs:{src:t.web_url+"/static/web/dzp/caidai.png",mode:""}}),a("v-uni-view",{staticClass:"main",staticStyle:{"padding-top":"50upx"}},[a("v-uni-view",{staticClass:"canvas-container"},[a("v-uni-view",{staticClass:"canvas-content",attrs:{animation:t.animationData,id:"zhuanpano"}},[a("v-uni-view",{staticClass:"canvas-line"},t._l(t.list,(function(i,e){return a("v-uni-view",{key:e,staticClass:"canvas-litem",style:{transform:"rotate("+(e*t.width+t.width/2)+"deg)"}})})),1),a("v-uni-view",{staticClass:"canvas-list"},t._l(t.list,(function(i,e){return a("v-uni-view",{key:e,staticClass:"canvas-item",style:{transform:"rotate("+e*t.width+"deg)",zIndex:e}},[a("v-uni-view",{staticClass:"canvas-item-text",style:"transform:rotate("+e+")"},[a("v-uni-text",{staticClass:"b",staticStyle:{"font-size":"32upx"}},[t._v(t._s(i.name))]),a("v-uni-text",{staticClass:"icon-awrad iconfont ",class:i.icon}),a("img",{staticClass:"jp-img",attrs:{src:i.img}})],1)],1)})),1)],1),a("v-uni-view",{staticClass:"canvas-btn",class:t.btnDisabled,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.playReward.apply(void 0,arguments)}}},[t._v("开始")])],1)],1),a("v-uni-view",{staticClass:"guize",staticStyle:{"margin-top":"100upx"}},[a("v-uni-view",{staticClass:"title"},[t._v("规则说明")]),a("v-uni-view",{staticClass:"g_item"},[t._v("1.用户每天登录即送1次抽奖机会，分享好友则多赠1次机会")]),a("v-uni-view",{staticClass:"g_item"},[t._v("2.用户点击大转盘抽奖按钮，有积分和现金两种方式可参与抽奖，没抽一次消耗1次抽奖机会")]),a("v-uni-view",{staticClass:"g_item"},[t._v("3.用户获得的奖品，可在我的道具里查看")])],1)],1)],1)},o=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}))},d80a:function(t,i,a){var e=a("24fb"),n=a("1de5"),o=a("54917");i=e(!1);var s=n(o);i.push([t.i,".jp-img[data-v-2f54470a]{width:30px;height:30px;padding-top:0;margin-top:20px}.icon-awrad[data-v-2f54470a]{font-size:%?50?%!important}.conbox[data-v-2f54470a]{width:%?750?%;height:100vh;overflow-x:hidden;overflow-y:scroll}.container[data-v-2f54470a],\n\tuni-image.cont[data-v-2f54470a]{width:%?750?%;min-height:100vh;height:auto;position:relative}uni-image.cont[data-v-2f54470a]{height:100%;position:absolute;z-index:0}uni-image.caidai[data-v-2f54470a]{position:absolute;top:0;left:0;width:%?750?%;height:%?1024?%}.header-title>uni-view[data-v-2f54470a]{padding:%?8?% %?16?%;border:1px solid #d89720;color:#d89720;font-size:%?28?%;border-radius:%?26?%}\n\n\t/* 转盘 */.canvas-container[data-v-2f54470a]{margin:0 auto;position:relative;width:%?600?%;height:%?600?%;background:url("+s+') no-repeat;background-size:cover;border-radius:50%}.canvas-content[data-v-2f54470a]{position:absolute;left:0;top:0;z-index:1;display:block;width:%?600?%;height:%?600?%;border-radius:inherit\n\t\t/* background-clip: padding-box; */\n\t\t/* background-color: #ffcb3f; */}.canvas-list[data-v-2f54470a]{position:absolute;left:0;top:0;width:inherit;height:inherit;z-index:9999}.canvas-item[data-v-2f54470a]{position:absolute;left:0;top:0;width:100%;height:100%;color:#e4370e\n\t\t/* text-shadow: 0 1upx 1upx rgba(255, 255, 255, 0.6); */}.canvas-item-text[data-v-2f54470a]{position:relative;display:block;padding-top:%?46?%;margin:0 auto;text-align:center;-webkit-transform-origin:50% %?300?%;transform-origin:50% %?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fb778b}.canvas-item-text uni-text[data-v-2f54470a]{font-size:%?30?%}\n\n\t/* 分隔线 */.canvas-line[data-v-2f54470a]{position:absolute;left:0;top:0;width:inherit;height:inherit;z-index:99}.canvas-litem[data-v-2f54470a]{position:absolute;left:%?300?%;top:0;width:%?3?%;height:%?300?%;background-color:rgba(228,55,14,.4);overflow:hidden;-webkit-transform-origin:50% %?300?%;transform-origin:50% %?300?%}\n\n\t/**\n* 抽奖按钮\n*/.canvas-btn[data-v-2f54470a]{position:absolute;left:%?260?%;top:%?260?%;z-index:400;width:%?80?%;height:%?80?%;border-radius:50%;color:#f4e9cc;background-color:#e44025;line-height:%?80?%;text-align:center;font-size:%?26?%;text-shadow:0 -1px 1px rgba(0,0,0,.6);box-shadow:0 3px 5px rgba(0,0,0,.6);text-decoration:none}.canvas-btn[data-v-2f54470a]::after{position:absolute;display:block;content:" ";left:%?12?%;top:%?-44?%;width:0;height:0;overflow:hidden;border-width:%?30?%;border-style:solid;border-color:transparent;border-bottom-color:#e44025}.canvas-btn.disabled[data-v-2f54470a]{pointer-events:none;background:#b07a7b;color:#ccc}.canvas-btn.disabled[data-v-2f54470a]::after{border-bottom-color:#b07a7b}.typecheckbox uni-view[data-v-2f54470a]{border:1px solid #ff3637;background:transparent;color:#ff3637;display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;width:%?140?%;border-radius:%?50?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:flex;margin-left:%?20?%}.guize[data-v-2f54470a]{width:%?502?%;min-height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;z-index:3;background-image:-webkit-linear-gradient(top,#f48549,#f2642e);background-image:linear-gradient(-180deg,#f48549,#f2642e);border:%?18?% solid #e4431a;border-radius:16px;margin:0 auto;margin-top:%?-104?%;padding:%?48?%;\n\t\t/* box-sizing: border-box; */color:#fff}.guize .title[data-v-2f54470a]{text-align:center;margin-bottom:%?28?%}.guize .g_item[data-v-2f54470a]{font-family:PingFang-SC-Medium;font-size:%?24?%;color:#fff;letter-spacing:.5px;text-align:justify;line-height:20px}.myrewards .title[data-v-2f54470a]{font-family:PingFang-SC-Bold;font-size:16px;color:#e4431a;letter-spacing:.57px;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?36?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}',""]),t.exports=i},f8a5:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR2NkGGDAOMD2M4w6gOQQuO3rEqa6ec8qXFF319elQHnzngnERi1JDngT47f3w6fvTv///w/H5og7fq5NDAwMteLC/Ot5568JIsYRRDvgS3LoTW4ONrWXbz8yfPn2kwHdETDLhfi5GQT5uEFqiHIEUQ646+c6R1yEP5mbkx3sKXRHoFsOUvP+01eG9x++FBKKDqIccMfXZT0DI2OAhAg/AxZHrGVkZAyG+Rxm+buPXxkYGP63qGzaU4svKjAckHH/ugLDv7/G6JpSmlvKGBkZ/qmwM6n9+/uX6fevPyz///5l/vvvHyMHGxvDn////7Bzsv/6+Z/h2+Nf/5585ed/siw3dwW6OTOUddYii2F1ANO///fxuZrnwweGtMZ6BliIvP3wheEBOxfDvGq8ngUVOo+mKmvJjzpgCITA338hi+7fyf3P+J8JW1qQ+vSZefuCRZLIaeAaA/Mfz8S4F7jSjhgn91VPcak901S0e/CGAFxy+9rjDL9/WWAzUOLrV4Yjy1eiJMJLjMwMTmGhuNMuB1sdg1twM7oC3OXA3k0rGZgYw7A64MsXhiOz56E6gImVwSkpHrcD/vwuYnAN6ifeAUd2tjMw/K/A6oDPnxmOTJ+F6gBmNgantGQ8ufefF4ON1/ZRB4yGwGgIjIbAEAsBRgYZbEWb8tt3XPW79xra//8lCpJ/x8D06zIjy8e4iNCjOIvC/3+XkVYSEtOmpoIaohqlVLAHpxGjDgAAxMOgMFOc6oQAAAAASUVORK5CYII="},fca7:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACB0lEQVRYR2NkGGDAOMD2M4w6gKgQUFFR0WJgYPh5586du8REmZKSkhoTE9NfYtTjdUB2drbanj17LkdFRT3j4OD4N3fuXJlbt26x43OEmprar4CAgBciIiKf5syZo3br1i02fOrxOkBZWfn/nTt34Prv3r3L4Ofn9/3atWtc2AzV0tL6tmnTJk5lZWWY9AcnJ6el+/fvz8HlCLwOMDQ0fH/u3DkBZM0vXrxgcHR0/M7MzMzy48cPVpAcBwfHLyYmpt+7d+/mFhcXR7HL2Nj4w7lz5wTJcoCamtrnmzdv8qBrtre3Zzh48CCKMDYxkAJVVdUvd+7c4SXaAQrWngtgihn//eNk/fsjxM/PjwnZgB07djJY6Oow/Pj8GSzMLSLCcPTMWQYPD3cUezZs2vT3LzPH2v9MTN9hEg+Obk9AVoQRBUo6Rp++Z6/G6WKYZq4eN4Zriy6CuVa79jI8k9AhmEE4J/j8uHfzOueoA0ZDAG8IgAofgqkJTYG8uBzDw5ePiNJ29+5dlISPsyBSUVFx+B7atfufnD4LNpOJzQUgdeiW4g0BmOSoA0ZDYDQERkNg0IQAAyMj1pKQY2UJw8KqueByq/DCZYZnvDJYi2KQOrJKQpBpCnqmHjgL+D8/5PnZuUVB8h+/ff7FwM51CZfaB5dO7yC6SUZUjUJFRUR1TKhoH4ZRow4AAH36XzDbISs/AAAAAElFTkSuQmCC"}}]);