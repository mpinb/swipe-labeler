(this["webpackJsonpswipe-labeler"]=this["webpackJsonpswipe-labeler"]||[]).push([[0],{123:function(e,t,i){},17:function(e,t,i){},172:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),o=i.n(s),a=i(7),c=i.n(a),r=(i(123),i(10)),l=i(11),d=i(2),h=i(13),A=i(12),u=(i(17),i(175)),g=i(14),p=i.n(g),m=i(60);function b(e){var t=Object(s.useState)(1),i=Object(m.a)(t,2),o=i[0],a=i[1];return setTimeout((function(){return a(o+1)}),1e3),Object(s.useEffect)((function(){return function(){document.cookie="swipeTime="+o}})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("strong",{children:o})})}i(22),i(23),i(24);var j=i(20),w=i(55),C=i.n(w),x=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).onSwipe=function(e){n.setState({loading:!0}),"right"===e?n.props.onAcceptClick():"left"===e?n.props.onRejectClick():"down"===e&&n.props.onSkipClick()},n.onKeyPress=function(e){"ArrowRight"===e.key?n.props.onAcceptClick():"ArrowLeft"===e.key?n.props.onRejectClick():"ArrowDown"===e.key&&n.props.onSkipClick()},n.state={batchTotal:n.props.batch_size},n.decideCountText=n.decideCountText.bind(Object(d.a)(n)),n.onSwipe=n.onSwipe.bind(Object(d.a)(n)),n.onKeyPress=n.onKeyPress.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeyPress)}},{key:"decideCountText",value:function(){var e;return e=this.props.imagesLeft,this.props.imagesLeft>this.props.batch_size&&(console.log("the condition reached!"),e=this.props.batch_size),0==e?"Last Image!":1!==e?e+" images left in batch!":e+" image left in batch!"}},{key:"detectTouch",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"detectMob",value:function(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))}},{key:"decideImgRender",value:function(){return this.detectTouch()?console.log("touch"):console.log("Not touch!"),this.detectMob()||this.detectTouch()?Object(n.jsx)(p.a,{onSwipe:this.onSwipe,preventSwipe:["right","left","down","up"],children:Object(n.jsx)("img",{src:this.props.image,alt:""})}):Object(n.jsx)(p.a,{onSwipe:this.onSwipe,preventSwipe:["right","left","down","up"],children:Object(n.jsx)(j.b,{options:{centerContent:!0},defaultPositionX:50,children:Object(n.jsx)(j.a,{children:Object(n.jsx)("img",{src:this.props.image,alt:""})})})})}},{key:"render",value:function(){var e=this,t=this.decideCountText(),i=this.decideImgRender();new C.a(".clipboard");return Object(n.jsxs)(n.Fragment,{children:[console.log("swipscreen props= ",this.props),Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"count",children:[Object(n.jsx)("div",{className:"timer",children:Object(n.jsx)(b,{})}),Object(n.jsxs)("div",{className:"ct-grp",children:[Object(n.jsx)("span",{className:"ct-grp-upper-text",children:t}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"ct-grp-lower-text",children:[this.props.labeledSize," out of"," ",this.props.batch_size+this.props.labeledSize+1," images labelled"]}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"button-grp",children:[Object(n.jsxs)(u.a,{className:"quit-button",intent:"danger",onClick:this.props.onQuitClick,small:!0,children:[Object(n.jsx)(u.b,{icon:"cross",iconSize:20,intent:"danger"})," "]}),Object(n.jsx)(u.a,{id:"share-button",className:"clipboard","data-clipboard-target":"#blank","data-clipboard-text":window.location.href,intent:"primary",small:!0,onClick:function(){return alert("Link copied to clipboard!")},children:Object(n.jsx)(u.b,{icon:"share",iconSize:20})})]})]})}),Object(n.jsxs)("div",{id:"#SwipeScreen",className:"Content",children:[Object(n.jsxs)("div",{className:"Image_wrapper",children:[Object(n.jsx)("div",{className:this.props.displayProg,children:Object(n.jsx)(u.c,{intent:"success",value:this.props.progWidth,animate:!1})}),i]}),Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("input",{type:"text",id:"blank",value:window.location.href}),Object(n.jsx)(u.a,{icon:"remove",className:"AcceptRejectButton",intent:"primary",onClick:this.props.onSkipClick,children:"Skip"}),Object(n.jsx)(u.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"danger",onClick:this.props.onRejectClick,children:"Reject"}),Object(n.jsx)(u.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:function(){e.props.onAcceptClick()},children:"Accept"}),Object(n.jsx)(u.a,{icon:"undo",disabled:this.props.undoHappened,className:"AcceptRejectButton",onClick:this.props.onBackClick,children:"Undo"})]})]})]})}}]),i}(o.a.Component),k=i.p+"static/media/moon.8ddbc237.jpg",O=i.p+"static/media/flag.d9b1a692.jpg",S=i.p+"static/media/earthrise.38b5ac31.jpg",I=i.p+"static/media/astronaut.0005e707.jpg",T=i.p+"static/media/arrowright.51a39359.gif",f=i.p+"static/media/arrowleft.26090565.gif",B=i.p+"static/media/arrowdown.e0f48ec1.gif",v=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).onTutorialKeyPress=function(e){("ArrowRight"===e.key||"ArrowLeft"===e.key||"ArrowDown"===e.key)&&n.onTutorialSwipe()},n.state={images:[S,k,O],index:0,arrows:[T,f,B,O],captions:["Drag in this direction to swipe right! (Accept)","Drag in this direction to swipe left! (Reject)","Drag in this direction to swipe down! (Skip)","Now try a keyboard shortcut.Press the arrow right, arrow left or arrow down key!"]},n.onTutorialKeyPress=n.onTutorialKeyPress.bind(Object(d.a)(n)),n.onTutorialSwipe=n.onTutorialSwipe.bind(Object(d.a)(n)),n.decideRender=n.decideRender.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onTutorialKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onTutorialKeyPress)}},{key:"onTutorialSwipe",value:function(){console.log("reached onswipe!!"),this.setState({index:this.state.index+1})}},{key:"detectTouch",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"decideRender",value:function(){var e,t=this;if(3!==this.state.index||this.detectTouch()){if(0===this.state.index||1===this.state.index||2===this.state.index)e=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text",children:Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Title",children:"You can also label images by swiping!"})}),Object(n.jsxs)("div",{className:"Tutorial_Image_wrapper",children:[Object(n.jsxs)("div",{className:"tut-helper-text",children:[Object(n.jsx)("div",{children:this.state.captions[this.state.index]}),Object(n.jsx)("img",{className:"tut-helper-gifs",src:this.state.arrows[this.state.index],alt:""})]}),Object(n.jsx)(p.a,{onSwipe:this.onTutorialSwipe,preventSwipe:["right","left","down"],children:Object(n.jsx)("img",{className:"Question_Image",src:this.state.images[this.state.index],alt:""})})]})]});else if(this.detectTouch()||4===this.state.index){console.log("reached");e=Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"Tutorial_Image_wrapper",children:[Object(n.jsxs)("div",{className:"tut-helper-text",children:[Object(n.jsx)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:"We're done here!"}),Object(n.jsx)("img",{className:"nailed-it-gif",src:"data:image/gif;base64,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",alt:""})]}),Object(n.jsx)(u.a,{style:{marginTop:"15px"},intent:"success",onClick:function(){return t.props.end()},children:"Start Labelling!"})]})})}}else console.log("reached!"),e=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"Tutorial_Zoom_Text",children:Object(n.jsxs)("div",{className:"TutorialScreen_Question_Image_Text",children:[Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Title",children:"You can zoom in!"}),Object(n.jsxs)("div",{className:"TutorialScreen_Question_Image_Text_Caption",children:["If you're not sure what the image looks like, we've got you covered!",Object(n.jsx)("br",{}),"Scroll up and down while your mouse on the image to toggle zoom..."]})]})}),Object(n.jsx)("div",{className:"Tutorial_Image_wrapper",style:{marginTop:"20px"},children:Object(n.jsx)(p.a,{onSwipe:this.onTutorialSwipe,preventSwipe:["right","left","down"],children:Object(n.jsx)(j.b,{options:{centerContent:!0},defaultPositionX:50,children:Object(n.jsx)(j.a,{children:Object(n.jsx)("img",{className:"Question_Image",src:I,alt:""})})})})}),Object(n.jsxs)("div",{className:"TutorialScreen_Question_Image_Text",style:{marginTop:"20px"},children:[Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Title",children:"A third way to label images- try a keyboard shortcut"}),Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Caption",children:"Press the arrow right, arrow left or arrow down key!"})]})]});return e}},{key:"render",value:function(){var e=this.decideRender();return Object(n.jsx)(n.Fragment,{children:e})}}]),i}(o.a.Component),Q=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).onTutorialKeyPress=function(e){"ArrowRight"===e.key?n.onTutorialAcceptClick():"ArrowLeft"===e.key?n.onTutorialRejectClick():"ArrowDown"===e.key&&n.onTutorialSkipClick()},n.state={prevLabel:null,tutorialIndex:0,tutorialImages:[k,S,O]},n.onTutorialAcceptClick=n.onTutorialAcceptClick.bind(Object(d.a)(n)),n.onTutorialRejectClick=n.onTutorialRejectClick.bind(Object(d.a)(n)),n.onTutorialSkipClick=n.onTutorialSkipClick.bind(Object(d.a)(n)),n.onTutorialSwipe=n.onTutorialSwipe.bind(Object(d.a)(n)),n.onTutorialKeyPress=n.onTutorialKeyPress.bind(Object(d.a)(n)),n.decideRender=n.decideRender.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onTutorialKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onTutorialKeyPress)}},{key:"onTutorialAcceptClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"accept",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialSkipClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"skip",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialRejectClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"reject",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialSwipe",value:function(e){"right"===e?this.onTutorialAcceptClick():"left"===e?this.onTutorialRejectClick():"down"===e&&this.onTutorialSkipClick()}},{key:"decideRender",value:function(){var e;return 0===this.state.tutorialIndex?(console.log("reached!"),e=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"TutorialScreen_Question_Image_Text",children:[Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Title",children:"Welcome to the Swipe Labeler tool."}),Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Caption",children:'You can label images in three ways. First try clicking "Accept", "Reject" or "Skip".'})]}),Object(n.jsxs)("div",{className:"Tutorial_Image_wrapper",children:[Object(n.jsx)(p.a,{onSwipe:this.onTutorialSwipe,preventSwipe:["right","left","down"],children:Object(n.jsx)("img",{className:"Question_Image",src:this.state.tutorialImages[this.state.tutorialIndex],alt:""})}),Object(n.jsx)(u.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"primary",onClick:this.onTutorialRejectClick,children:"Reject"}),Object(n.jsx)(u.a,{icon:"remove",className:"AcceptRejectButton",intent:"danger",onClick:this.onTutorialSkipClick,children:"Skip"}),Object(n.jsx)(u.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:this.onTutorialAcceptClick,children:"Accept"})]})]})):e=Object(n.jsx)("div",{children:Object(n.jsx)(v,{end:this.props.end})}),e}},{key:"render",value:function(){var e=this.decideRender();return Object(n.jsx)("div",{className:"TutorialScreen",children:Object(n.jsx)("div",{className:"Question",children:e})})}}]),i}(o.a.Component),y=i(59),E=i.n(y),U=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={},n.decideContinue=n.decideContinue.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"sendClose",value:function(){console.log("sendClose!!!!@!!!"),window.open("","_parent",""),window.close()}},{key:"sendShutDown",value:function(){fetch("/end",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ready_to_end:"ready"})})}},{key:"detectTouch",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"getSwipeTime",value:function(){var e;return decodeURIComponent(document.cookie).split(";").forEach((function(t){t.trim().startsWith("swipeTime")&&(e=t.trim().split("=")[1])})),e}},{key:"decideContinue",value:function(){return this.props.continue?Object(n.jsx)(u.a,{icon:"label",id:"end-btn",className:"EndScreenButton",intent:"primary",text:!0,onClick:function(){return window.location.reload()},children:"Continue Labelling"}):null}},{key:"decideWarning",value:function(){return this.detectTouch()?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"end-btn1",children:Object(n.jsx)(u.a,{id:"end-btn",icon:"stop",className:"EndScreenButton",intent:"danger",onClick:this.sendShutDown,children:"Shut down App"})}),Object(n.jsxs)("div",{style:{display:"block",backgroundColor:"antiquewhite",fontSize:"1rem"},children:[" ","Warning: If other people are using the App, ShutDown ends it for them too!"]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"end-btn1",children:Object(n.jsx)(u.a,{id:"end-btn",icon:"stop",className:"EndScreenButton",intent:"danger",onClick:this.sendShutDown,children:"Shut down App"})}),Object(n.jsx)("div",{className:"hover-text",children:"Warning: If other people are using the App, this ends it for them too!"})]})}},{key:"render",value:function(){var e=this.decideContinue(),t=this.decideWarning();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E.a,{}),Object(n.jsxs)("div",{className:"EndScreen",style:{backgroundImage:"url('"+I+"')"},children:[Object(n.jsx)("div",{className:"EndScreen_Text",children:"Mission accomplished! Good job!"}),Object(n.jsxs)("div",{className:"EndScreen_Time_Text",children:["Your labelling time: ",this.getSwipeTime()," seconds..."]}),Object(n.jsxs)("div",{className:"endscreen-btn-grp",children:[e,t]})]})]})}}]),i}(o.a.Component),L=i.p+"static/media/welcome.29484c0b.jpeg",R=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){var e={backgroundImage:"url(".concat(L,")"),height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return Object(n.jsx)("div",{className:"welcome-wrapper",style:e,children:Object(n.jsxs)("div",{className:"welcome-text",children:[Object(n.jsx)("h1",{children:"Swipe Labeler"}),Object(n.jsx)("p",{children:"You could start with a tutorial, or get labelling right away!"}),Object(n.jsxs)("div",{className:"welcome-btn-grp",children:[Object(n.jsx)(u.a,{intent:"warning",className:"welcome-btn",onClick:this.props.startTutorial,children:"Tutorial"}),Object(n.jsx)(u.a,{intent:"warning",className:"welcome-btn",onClick:this.props.startLabel,children:"Start Labelling"})]})]})})}}]),i}(o.a.Component),F=i(16),M=i.n(F);var K=function(e){Object(h.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={view:document.cookie.split(";").some((function(e){return e.trim().startsWith("hasSeenTutorial=")}))?"active":"welcome",index:0,image:null,total_batch_size:null,batch_size:null,imgUrls:[],undoUrls:[],undoHappened:!0,swipes:0,noOfSwipes:0,batchStop:0,leftBehind:0,labeledSize:0,progWidth:0,displayProg:"prog-bar"},n.fetchImage=n.fetchImage.bind(Object(d.a)(n)),n.sendSelection=n.sendSelection.bind(Object(d.a)(n)),n.onAcceptClick=n.onAcceptClick.bind(Object(d.a)(n)),n.onRejectClick=n.onRejectClick.bind(Object(d.a)(n)),n.onSkipClick=n.onSkipClick.bind(Object(d.a)(n)),n.onBackClick=n.onBackClick.bind(Object(d.a)(n)),n.onQuitClick=n.onQuitClick.bind(Object(d.a)(n)),n.endTutorial=n.endTutorial.bind(Object(d.a)(n)),n.startTutorial=n.startTutorial.bind(Object(d.a)(n)),n.startLabel=n.startLabel.bind(Object(d.a)(n)),n.setLoading=n.setLoading.bind(Object(d.a)(n)),n.getBatchSize=n.getBatchSize.bind(Object(d.a)(n)),n.decideProgWidth=n.decideProgWidth.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){if(window.performance&&1===performance.navigation.type){var e=sessionStorage.getItem("url"),t=sessionStorage.getItem("undo-url");t===e&&(t="none"),console.log("Image url: ",e),console.log("Curr_Image url: ",t),M.a.post("/refresh",{image_url:e,curr_image_url:t}).then((function(e){console.log(e)})).catch((function(e){return console.log("ERROR: ",e)}))}var i=parseInt(sessionStorage.getItem("noOfSwipes"));i||(i=0),this.setState({noOfSwipes:i}),this.getTotalBatchSize(),this.fetchImage()}},{key:"componentDidUpdate",value:function(){"end"===this.state.view?(console.log("reached end"),sessionStorage.setItem("noOfSwipes",0)):(sessionStorage.setItem("undo-url",this.state.curr_image_url),sessionStorage.setItem("url",this.state.image),sessionStorage.setItem("noOfSwipes",this.state.noOfSwipes))}},{key:"getTotalBatchSize",value:function(){var e=this;M.a.get("/getsize").then((function(t){console.log("response = ",t.data.batch_size),e.setState({total_batch_size:t.data.batch_size,batchStop:t.data.batch_stop,imagesLeft:t.data.batch_stop-1},(function(){console.log("got total batch state as: ",e.state.batch_size)}))})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"getBatchSize",value:function(){var e=this;M.a.get("/getsize").then((function(t){console.log("response = ",t.data.batch_size),e.setState({batch_size:t.data.batch_size,labeledSize:t.data.labeled_size},(function(){console.log("got total batch state as: ",e.state.batch_size)}))})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"fetchImage",value:function(){var e,t=this;0!==this.state.leftBehind?(e=this.state.undoUrls.pop(),this.setState({leftBehind:this.state.leftBehind-1})):e="none",M.a.post("/image",{swipes:this.state.swipes+1,image_url:e||"none"}).then((function(e){if("none"===e.data.image)t.setState({view:"end"});else{var i=t.state.imgUrls;i.push(e.data.image);var n=t.state.imgUrls[t.state.index]?t.state.imgUrls[t.state.index]:"none",s=t.state.noOfSwipes+t.state.leftBehind;t.setState({image:e.data.image,imgUrls:i,curr_image_url:n,swipes:s},(function(){console.log("img ",typeof t.state.image),t.getBatchSize()}))}})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"setLoading",value:function(e){console.log("reached "),this.setState({loading:e})}},{key:"sendSelection",value:function(e){fetch("/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:this.state.image,value:e})})}},{key:"decideProgWidth",value:function(){var e=this;if(this.state.batchStop>this.state.total_batch_size)console.log("reached block"),this.setState({displayProg:"prog-bar",msg:"reached!"}),this.setState({progWidth:this.state.noOfSwipes/(this.state.batch_size+1),msg:" reach"},(function(){console.log(e.state.msg)}));else{this.state.batchStop;this.setState({progWidth:this.state.noOfSwipes/this.state.batchStop,msg:"didnt reach"},(function(){console.log(e.state.msg)}))}}},{key:"onAcceptClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(1),e.decideProgWidth(),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onSkipClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(2),e.decideProgWidth(),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onRejectClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(0),e.decideProgWidth(),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onBackClick",value:function(){var e=this,t=this.state.imgUrls,i=this.state.undoUrls;t.push(this.state.imgUrls[this.state.index-1]),i.push(this.state.imgUrls[this.state.index]),M.a.post("/undo",{image_url:this.state.imgUrls[this.state.index-1]}).then((function(n){console.log(n),e.setState({index:e.state.index+1,image:e.state.imgUrls[e.state.index-1],imgUrls:t,undoUrls:i,noOfSwipes:e.state.noOfSwipes-1,leftBehind:e.state.leftBehind+1,undoHappened:!0,imagesLeft:e.state.imagesLeft+1},(function(){e.decideProgWidth()}))})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"onQuitClick",value:function(){var e,t,i=this;this.state.undoHappened&&this.state.index?(e=this.state.image,t=this.state.undoUrls[0]):(e=this.state.curr_image_url,t="none"),M.a.post("/quit",{image_url:e,curr_image_url:t}).then((function(e){console.log(e),i.setState({view:"end"})})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"startTutorial",value:function(){console.log("hello world from start"),this.setState({view:"tutorial"})}},{key:"startLabel",value:function(){this.setState({view:"active"})}},{key:"endTutorial",value:function(){this.setState({view:"active"}),document.cookie="hasSeenTutorial=true"}},{key:"render",value:function(){var e,t,i=null;return console.log("Parent state\n",this.state.images),e=!(this.state.batch_size<=0),this.state.batchStop>this.state.total_batch_size?(console.log("reached if block!"),t="prg-bar"):t="prog-bar","welcome"===this.state.view?i=Object(n.jsx)(R,{startTutorial:this.startTutorial,startLabel:this.startLabel}):"tutorial"===this.state.view?i=Object(n.jsx)(Q,{end:this.endTutorial}):"active"===this.state.view?i=this.state.image?Object(n.jsx)(x,{index:this.state.index,undoHappened:this.state.undoHappened,total_batch_size:this.state.total_batch_size,swipes:this.state.swipes,batch_size:this.state.batch_size,labeledSize:this.state.labeledSize,image:this.state.image,onAcceptClick:this.onAcceptClick,onRejectClick:this.onRejectClick,onSkipClick:this.onSkipClick,onBackClick:this.onBackClick,onQuitClick:this.onQuitClick,time:this.state.time,batchStop:this.state.batchStop,noOfSwipes:this.state.noOfSwipes,imagesLeft:this.state.imagesLeft,progWidth:this.state.progWidth,displayProg:t}):Object(n.jsx)(u.a,{loading:!0}):"end"===this.state.view&&(i=this.state.batch_size-1<=0?Object(n.jsx)(U,{}):Object(n.jsx)(U,{continue:e})),Object(n.jsx)("div",{className:"App",children:i})}}]),i}(o.a.Component),D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,176)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),o(e),a(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root")),D()}},[[172,1,2]]]);
//# sourceMappingURL=main.9533130f.chunk.js.map