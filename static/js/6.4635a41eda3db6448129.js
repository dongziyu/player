webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=s()({},a.a,{uin:0,needNewCode:1,platform:"h5",format:"jsonp"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,a.b)},n.a=function(t){var n=s()({},a.a,{topid:t,page:"detail",type:"top",tpl:3,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,a.b)};var i=e("woOf"),s=e.n(i),o=e("Gak4"),a=e("T452")},IuEc:function(t,n){},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),a=e("BRgg"),c=e("NYxO"),r=e("PvFA"),u={data:function(){return{songs:[],rank:!0}},computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(c.c)(["topList"])),created:function(){this._getTopList()},methods:{_getTopList:function(){var t=this;this.topList.id?Object(a.a)(this.topList.id).then(function(n){0===n.code&&(t.songs=t.normalizeSong(n.songlist))}):this.$router.push("/rank")},normalizeSong:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albumid&&n.push(Object(r.a)(e))}),n}},components:{MusicList:o.a}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,rank:this.rank,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var f=e("VU/8")(u,g,!1,function(t){e("IuEc")},"data-v-3b632e31",null);n.default=f.exports}});
//# sourceMappingURL=6.4635a41eda3db6448129.js.map