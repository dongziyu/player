webpackJsonp([0],{"3Q4o":function(t,s,e){"use strict";s.a=function(t,s){if(function(t,s){return new RegExp("(^|\\s)"+s+"(\\s|$)").test(t.className)}(t,s))return;var e=t.className.split(" ");e.push(s),t.className=e.join(" ")},s.b=function(t,s,e){return s="data-"+s,e?t.setAttribute(s,e):t.getAttribute(s)},s.c=function(t){if(!1===i)return!1;if("standard"===i)return t;return i+t.charAt(0).toUpperCase()+t.substring(1)};var a=document.createElement("div").style,i=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var s in t)if(void 0!==a[t[s]])return s;return!1}()},EkDm:function(t,s){},kvay:function(t,s,e){"use strict";var a=e("Dd8w"),i=e.n(a),n=e("qwAB"),r=e("ZV4u"),l=e("y/jF"),o=e("3Q4o"),c=e("NYxO"),g={mixins:[e("F4+m").a],data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.minTranslateY=40-this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},methods:i()({scroll:function(t){this.scrollY=t.y},click:function(){this.$router.back()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},handlePlayList:function(t){var s=t.length>0?"50px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()},random:function(){this.randomPlay({list:this.songs})}},Object(c.d)({setRandomMode:"SET_PLAY_MODE"}),Object(c.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=Math.max(this.minTranslateY,t),e=0;this.$refs.layer.style[Object(o.c)("transform")]="translate3d(0,"+s+"px,0)";var a=Math.abs(t/this.$refs.bgImage.clientHeight);if(t>0){e=10;var i=1+a;this.$refs.bgImage.style[Object(o.c)("transform")]="scale("+i+")"}t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=e}},components:{Scroll:n.a,SongList:r.a,Loading:l.a}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.click}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playBtn",staticClass:"play-wrapper",on:{click:t.random}},[t._m(0)]),t._v(" "),e("div",{staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"play"},[s("i",{staticClass:"icon-play"}),this._v(" "),s("span",{staticClass:"text"},[this._v("随机播放全部")])])}]};var h=e("VU/8")(g,f,!1,function(t){e("EkDm")},"data-v-2d93aff2",null);s.a=h.exports}});
//# sourceMappingURL=0.feeb14f55d7ef3172cd0.js.map