"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[451],{4334:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-header d-flex align-item-center"},[e("div",{staticClass:"link-icon",on:{click:function(e){return t.$router.back()}}}),e("div",{staticClass:"user-title d-flex justify-content-center"},[e("h5",{staticClass:"user-name"},[t._v(t._s(t.user.name))]),e("div",{staticClass:"user-tweetCounts number-wrap"},[t._v(t._s(t._f("quantifier")(t.user.tweetsLength)))])])])},a=[],r={props:{user:{name:"",tweetsLength:""}},filters:{quantifier(t){return t+" 推文"}}},n=r,o=s(1001),c=(0,o.Z)(n,i,a,!1,null,"92be4e54",null),l=c.exports},9451:function(t,e,s){s.r(e),s.d(e,{default:function(){return $}});s(7658);var i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"main-view mx-auto"},[e("NavbarLeft"),t.isLoading?e("LoadingSpinner"):[e("div",{staticClass:"user-page"},[e("UserEdit",{attrs:{"is-show":t.isShow,initUser:t.user},on:{"close-modal":t.closeModal,"refresh-user":t.refreshUser}}),e("UserHeader",{attrs:{user:t.user}}),e("div",{staticClass:"user-profile"},[e("div",{staticClass:"user-banner"},[e("img",{attrs:{src:t._f("emptyBanner")(t.user.coverPhoto),alt:""}})]),e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t._f("emptyImage")(t.user.avatar),alt:""}})]),e("div",{staticClass:"d-flex justify-content-end btn-wrap"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.user.id!==t.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"btn email"},[e("a",{attrs:{href:`mailto:${t.user.email}`}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.user.id!==t.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"btn notify"}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.user.id===t.currentUser.id,expression:"user.id === currentUser.id"}],staticClass:"user-setting",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openModal.apply(null,arguments)}}},[t._v("編輯個人資料")]),t.user.id===t.currentUser.id||t.user.isFollowed?t._e():e("div",{staticClass:"btn unfollow",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFollow(t.user.id)}}},[t._v("追蹤")]),t.user.id!==t.currentUser.id&&t.user.isFollowed?e("div",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFollow(t.user.id)}}},[t._v("正在追蹤")]):t._e()]),e("div",{staticClass:"user-info"},[e("h5",[t._v(t._s(t.user.name))]),e("div",{staticClass:"user-account number-wrap"},[t._v(t._s(t._f("account")(t.user.account)))]),e("div",{staticClass:"user-decription number-wrap"},[t._v(t._s(t.user.introduction))]),e("div",{staticClass:"user-follow d-flex number-wrap"},[e("div",{staticClass:"user-info-following",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$router.push({path:`/user/follow/followings/${t.user.id}`})}}},[e("span",[t._v(t._s(t.user.followingCount))]),t._v(" 個跟隨中")]),e("div",{staticClass:"user-info-follower",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$router.push({path:`/user/follow/followers/${t.user.id}`})}}},[e("span",[t._v(t._s(t.user.followerCount))]),t._v(" 位跟隨者")])])]),e("div",{staticClass:"togglePage d-flex"},[e("div",{staticClass:"userTweets",class:{active:"userTweets"===t.currentContent},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.togglePage("userTweets")}}},[t._v("推文")]),e("div",{staticClass:"userTweets",class:{active:"userReplies"===t.currentContent},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.togglePage("userReplies")}}},[t._v("回覆")]),e("div",{staticClass:"userTweets",class:{active:"userLikes"===t.currentContent},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.togglePage("userLikes")}}},[t._v("喜歡的內容")])])]),"userTweets"===t.currentContent?e("UserTweets",{attrs:{initUser:t.user}}):t._e(),"userReplies"===t.currentContent?e("UserReplies",{attrs:{initUser:t.user}}):t._e(),"userLikes"===t.currentContent?e("UserLikes",{attrs:{initUser:t.user}}):t._e()],1)],e("SuggestUser")],2)},a=[],r=s(5272),n=s(2433),o=function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("LoadingSpinner"):t._l(t.replyTweets,(function(s){return e("div",{key:s.id,staticClass:"comment_wrap d-flex"},[e("div",{staticClass:"avatar_image"},[e("img",{attrs:{src:t._f("emptyImage")(t.initUser.avatar)}})]),e("div",{staticClass:"comment_wrap_body"},[e("div",{staticClass:"d-flex comment_wrap_body--title"},[e("h5",{staticClass:"size-16"},[t._v(t._s(t.initUser.name))]),e("p",{staticClass:"size-14 ml-1"},[t._v(t._s(t._f("account")(t.initUser.account)))]),t._v(" ・ "),e("span",{staticClass:"size-14"},[t._v(t._s(t._f("fromNow")(s.createdAt)))])]),e("div",{staticClass:"replyAccount size-14"},[t._v("回覆 "),e("span",[e("router-link",{attrs:{to:{name:"userpage",params:{id:s.userData.id}}}},[t._v(t._s(t._f("account")(s.userData.account)))])],1)]),e("div",{staticClass:"comment_wrap_body--content mb-3"},[e("router-link",{attrs:{to:{name:"tweet",params:{id:s.TweetId}}}},[t._v(t._s(s.comment))])],1)])])}))],2)},c=[],l=s(3507),u=s(3822),d=s(8390),p=s(4409),m={data(){return{isShow:!1,replyTweets:[],isLoading:!1}},props:{initUser:{type:Object,required:!0}},mixins:[l.qk,l.Lf,l.$2],computed:{...(0,u.rn)(["currentUser","isAuthenticated"])},created(){this.fetchReplies(this.initUser.id)},methods:{async fetchReplies(t){try{this.isLoading=!0;const{data:e}=await d.Z.getReplies(t);this.replyTweets=e,this.isLoading=!1}catch(e){console.log(e)}}},components:{LoadingSpinner:p.Z}},f=m,v=s(1001),h=(0,v.Z)(f,o,c,!1,null,"e097cdbc",null),w=h.exports,g=function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("LoadingSpinner"):t._l(t.favoriteTweets,(function(s){return e("div",{key:s.TweetId,staticClass:"comment_wrap d-flex"},[e("div",{staticClass:"avatar_image"},[e("img",{attrs:{src:t._f("emptyImage")(s.userData.avatar)}})]),e("div",{staticClass:"comment_wrap_body"},[e("div",{staticClass:"d-flex comment_wrap_body--title"},[e("h5",{staticClass:"size-16"},[e("router-link",{attrs:{to:{name:"userpage",params:{id:s.userData.id}}}},[t._v(t._s(s.userData.name))])],1),e("p",{staticClass:"size-14"},[t._v(t._s(t._f("account")(s.userData.account)))]),t._v(" ・ "),e("span",{staticClass:"size-14"},[t._v(t._s(t._f("fromNow")(s.createdAt)))])]),e("div",{staticClass:"comment_wrap_body--content mb-3"},[e("router-link",{attrs:{to:{name:"tweet",params:{id:s.TweetId}}}},[t._v(t._s(s.description))])],1),e("div",{staticClass:"comment_wrap_footer d-flex"},[e("div",{staticClass:"comment_wrap_footer--comments-num d-flex mr-10"},[e("div",{staticClass:"icon comment my-auto",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openModal.apply(null,arguments)}}}),e("span",{staticClass:"number-wrap"},[t._v(t._s(s.repliedCount))])]),e("div",{staticClass:"comment_wrap_footer--liked-num d-flex"},[e("div",{staticClass:"icon liked my-auto",class:{isliked:s.isLiked},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteLike(s)}}}),e("span",{staticClass:"number-wrap"},[t._v(t._s(s.likedCount))])])])])])}))],2)},_=[],C=s(8431),k=s(6163),U={data(){return{isShow:!1,favoriteTweets:[],isLoading:!1,LikesLength:0}},props:{initUser:{type:Object,required:!0}},mixins:[l.qk,l.Lf,l.$2],components:{LoadingSpinner:p.Z},created(){this.fetchLikes(this.initUser.id)},methods:{async fetchLikes(t){try{this.isLoading=!0;const{data:e}=await d.Z.getLikes(t);this.favoriteTweets=e,this.LikesLength=e.length,this.isLoading=!1}catch(e){console.log(e)}},async deleteLike(t){try{const e=t.TweetId,{data:s}=await C.Z.deleteLike({tweetId:e});if("error"===s.status)throw new Error(s.message);k.F.fire({icon:"success",title:"收回愛心"}),this.favoriteTweets=this.favoriteTweets.filter((t=>t.TweetId!==e))}catch(e){console.log(e),k.F.fire({icon:"error",title:"收回讚失敗，請稍後再試"})}},openModal(){return this.isShow=!0},closeModal(t){return this.isShow=t}},watch:{LikesLength(){this.fetchLikes(this.initUser.id)}}},L=U,y=(0,v.Z)(L,g,_,!1,null,"5883f675",null),A=y.exports,b=function(){var t=this,e=t._self._c;return e("div",[t._l(t.tweets,(function(s){return e("div",{key:s.id,staticClass:"comment_wrap d-flex"},[e("div",{staticClass:"avatar_image"},[e("img",{attrs:{src:t._f("emptyImage")(t.initUser.avatar)}})]),e("div",{staticClass:"comment_wrap_body"},[e("div",{staticClass:"d-flex comment_wrap_body--title"},[e("h5",{staticClass:"size-16"},[t._v(t._s(t.initUser.name))]),e("p",{staticClass:"size-14 ml-1"},[t._v(t._s(t._f("account")(t.initUser.account)))]),t._v(" ・ "),e("span",{staticClass:"size-14"},[t._v(t._s(t._f("fromNow")(s.createdAt)))])]),e("div",{staticClass:"comment_wrap_body--content mb-3"},[e("router-link",{attrs:{to:{name:"tweet",params:{id:s.id}}}},[t._v(t._s(s.description))])],1),e("div",{staticClass:"comment_wrap_footer d-flex"},[e("div",{staticClass:"comment_wrap_footer--comments-num d-flex mr-10"},[e("div",{staticClass:"icon comment my-auto",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openModal(s)}}}),e("span",{staticClass:"number-wrap"},[t._v(t._s(s.repliedCount))])]),e("div",{staticClass:"comment_wrap_footer--liked-num d-flex"},[e("div",{staticClass:"icon liked my-auto",class:{isliked:s.isLiked},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleLike(s)}}}),e("span",{staticClass:"number-wrap"},[t._v(t._s(s.likedCount))])])])])])})),e("TweetReply",{attrs:{"is-show":t.isShow,tweet:t.targetTweet},on:{"close-modal":t.closeModal}})],2)},x=[],P=s(5054),T={data(){return{isShow:!1,tweets:[],targetTweet:{}}},props:{initUser:{type:Object,required:!0}},components:{TweetReply:P.Z},computed:{...(0,u.rn)(["currentUser","isAuthenticated"])},mixins:[l.qk,l.Lf,l.$2],created(){this.fetchTweets(this.initUser.id)},methods:{async fetchTweets(t){const{data:e}=await d.Z.getTweets(t);this.tweets=e},openModal(t){const{createdAt:e,description:s,id:i,userData:a}=t;return this.targetTweet.createdAt=e,this.targetTweet.description=s,this.targetTweet.id=i,this.targetTweet.User=a,this.isShow=!0},closeModal(t){return this.isShow=t},async toggleLike(t){if(!1===t.isLiked)try{const e=t.id,{data:s}=await C.Z.addLike({tweetId:e});if("error"===s.status)throw new Error(s.message);k.F.fire({icon:"success",title:"成功"}),t.likedCount+=1,t.isLiked=!t.isLiked}catch(e){console.log(e),k.F.fire({icon:"error",title:"收回讚失敗，請稍後再試"})}else if(!0===t.isLiked)try{const e=t.id,{data:s}=await C.Z.deleteLike({tweetId:e});if("error"===s.status)throw new Error(s.message);k.F.fire({icon:"success",title:"收回愛心"}),t.isLiked=!t.isLiked,t.likedCount-=1}catch(e){console.log(e),k.F.fire({icon:"error",title:"收回讚失敗，請稍後再試"})}}}},F=T,S=(0,v.Z)(F,b,x,!1,null,"06372cd6",null),Z=S.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",class:{show:t.isShow}},[e("div",{staticClass:"modal_container mx-auto"},[e("div",{staticClass:"modal_container-header d-flex"},[e("div",{staticClass:"cancel-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.closeModal.apply(null,arguments)}}},[e("i",{staticClass:"fa-solid fa-xmark size-32"})]),e("h5",[t._v("編輯個人資訊")]),e("button",{staticClass:"btn",attrs:{type:"submit",form:"profile-box",disabled:t.isProcessing}},[t._v("儲存")])]),e("form",{staticClass:"profile-box",attrs:{id:"profile-box"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"user-banner"},[e("div",{staticClass:"filter"}),e("div",{staticClass:"icons"},[t._m(0),e("input",{staticClass:"banner-edit",attrs:{type:"file",id:"coverPhoto",accept:"image/*",name:"coverPhoto"},on:{change:t.handleFileChange}}),e("i",{staticClass:"icon-edit-done",on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.user.coverPhoto=t.initUser.banner}}})]),e("img",{attrs:{src:t._f("emptyBanner")(t.user.coverPhoto),alt:""}})]),e("div",{staticClass:"avatar"},[e("div",{staticClass:"filter"}),t._m(1),e("input",{staticClass:"avatar-edit",attrs:{type:"file",id:"avatar",accept:"image/*",name:"avatar"},on:{change:t.handleFileChange}}),e("img",{attrs:{src:t._f("emptyImage")(t.user.avatar),alt:""}})]),e("div",{staticClass:"user-name"},[e("label",{attrs:{for:""}},[t._v("名稱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name",name:"name",maxlength:"50"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),e("p",{staticClass:"input-length"},[t._v(t._s(t.user.name.length)+"/50")]),e("div",{staticClass:"user-description"},[e("label",{attrs:{for:"description"}},[t._v("自我介紹")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.description,expression:"user.description"}],attrs:{id:"description",name:"description",cols:"30",rows:"10",maxlength:"170"},domProps:{value:t.user.description},on:{input:function(e){e.target.composing||t.$set(t.user,"description",e.target.value)}}})]),e("p",{staticClass:"input-length"},[t._v(t._s(t.user.description.length)+"/170")])])])])},I=[function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"coverPhoto"}},[e("img",{staticClass:"icon-photo",attrs:{src:s(951),alt:""}})])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"avatar"}},[e("img",{staticClass:"icon-photo",attrs:{src:s(951),alt:""}})])}],R={props:{isShow:{type:Boolean},initUser:{type:Object,required:!0}},mixins:[l.Lf],data(){return{user:{},description:"",isProcessing:!1}},computed:{...(0,u.rn)(["currentUser","isAuthenticated"])},created(){this.fetchUser()},methods:{fetchUser(){this.user=this.initUser,this.description=this.currentUser.introduction,this.user={...this.user,description:this.description}},closeModal(){this.$emit("close-modal",!this.isShow)},handleFileChange(t){const{files:e}=t.target;if(0!==e.length){const s=window.URL.createObjectURL(e[0]);"coverPhoto"===t.target.name?this.user.coverPhoto=s:"avatar"===t.target.name&&(this.user.avatar=s)}else this.image=""},async handleSubmit(t){try{this.isProcessing=!0;const e=t.target,s=new FormData(e),{data:i}=await d.Z.updateProfile(this.initUser.id,s);if("error"===i.status)throw new Error(i.message);this.closeModal(),this.$emit("refresh-user",this.user.id),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.error(e),k.F.fire({icon:"warning",title:"無法變更使用者資訊，請稍後再試"})}}}},z=R,M=(0,v.Z)(z,D,I,!1,null,"50042366",null),N=M.exports,O=s(1905),B=s(4334),j={name:"userPage",components:{NavbarLeft:r.Z,SuggestUser:n.Z,UserReplies:w,UserLikes:A,UserTweets:Z,UserEdit:N,LoadingSpinner:p.Z,UserHeader:B.Z},mixins:[l.Lf,l.$2],data(){return{user:{id:-1,account:"",email:"",name:"",password:"",role:"",avatar:"",coverPhoto:"",introduction:"",followerCount:0,followingCount:0,tweetsLength:0,isFollowed:!1},currentContent:"userTweets",isShow:!1,isLoading:!1}},created(){const{id:t}=this.$route.params;this.fetchUser(t)},computed:{...(0,u.rn)(["currentUser"])},beforeRouteUpdate(t,e,s){const{id:i}=t.params;this.fetchUser(i),s()},methods:{async fetchUser(t){this.isLoading=!0;const{data:e}=await d.Z.get(t),{id:s,account:i,name:a,email:r,avatar:n,coverPhoto:o,introduction:c,followerCount:l,followingCount:u,Tweets:p,isFollowed:m}=e;this.user={...this.user,id:s,account:i,name:a,email:r,avatar:n,coverPhoto:o,introduction:c,followerCount:l,followingCount:u,tweetsLength:p.length,isFollowed:m},this.isLoading=!1},togglePage(t){this.currentContent=t},openModal(){return this.isShow=!0},closeModal(t){return this.isShow=t},async addFollow(t){try{const{data:e}=await O.Z.addFollow(t);if("error"===e.status)throw new Error(e.message);this.user.isFollowed=!0}catch(e){console.error(e),k.F.fire({icon:"warning",title:"無法加入追蹤，請稍後再試"})}},async deleteFollow(t){try{const{data:e}=await O.Z.deleteFollow({userId:t});if("error"===e.status)throw new Error(e.message);this.user.isFollowed=!1}catch(e){console.error(e),k.F.fire({icon:"warning",title:"無法移除追蹤，請稍後再試"})}},refreshUser(t){this.fetchUser(t)}},filters:{quantifier(t){return t+" 推文"}}},q=j,E=(0,v.Z)(q,i,a,!1,null,"5a70f104",null),$=E.exports},951:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgB3ZVhccMwDIWV3QAUQsZgEBYEhZAxWBi0Q7AOwVIGY5AOQcvAYbAx0J7OcqtLUzuN//T63b1z7MiyJSsO0d3DzAtoBe35hDy/QSXlAAfP0K867aANtNZnwYkNzUF2p85Hneh7pzbpRXRCp5OccV4m5lhbpz6OcwpjvEezgHbGx7Yoih3FN/aCpjZD0u8xrxoaCmvKRM+IQ/9h4iRJxYdWj+iLr62gSxFgrDaVNKTOikB32ZI/G+FTFWhTkaRStBr0v1WWhjIWCPUtu5aqOKgqOkWyzFkgpIZH3oWxP4rwSHF+oJJ8GkShtjtjc4g5SEXQDvpLOk/JO00hUqYNX6YZsb/uQ8Mnv0HzBG3Jp6MnH1ml76KkziAs0qN5pRlMuipysBFI+LVJ31zk+ujPRtn/vRznI5fhvL/cTfIPBN+KksncOFcAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=451.bfb8824d.js.map