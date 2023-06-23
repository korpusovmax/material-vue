import{_ as p,r as d,o as u,c as v,d as e,w as a,a as t,b as n,e as c}from"./app-275e2576.js";const h={},_=c('<h1 id="navigation-drawer" tabindex="-1"><a class="header-anchor" href="#navigation-drawer" aria-hidden="true">#</a> Navigation drawer</h1><p>Material Navigation drawers provide ergonomic access to destinations in an app. MaterialVue contains these types of drawers:</p><ul><li>modal</li><li>standard</li></ul><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><p>To create basic material navigation drawer you can use <code>MNavigationDrawer</code> component to create navigation container and use <code>MNavigationDrawerItem</code> to init custom items of navigation</p>',5),g=t("p",{class:"m-text m-title-medium"},"Header",-1),w=t("div",{id:"content1"},null,-1),f=t("h2",{id:"location",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#location","aria-hidden":"true"},"#"),n(" Location")],-1),N=t("p",null,[n("You can change location of the drawer to "),t("code",null,"right"),n(", or "),t("code",null,"full"),n(", by using "),t("code",null,"side"),n(" prop. By default, side is "),t("strong",null,"left"),n(".")],-1),x=t("p",{class:"m-text m-title-medium"},"Header",-1),M=t("div",{id:"content2"},null,-1),I=t("p",{class:"m-text m-title-medium"},"Header",-1),D=t("div",{id:"content3"},null,-1),y=t("h2",{id:"items",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#items","aria-hidden":"true"},"#"),n(" Items")],-1),b=t("code",null,"span",-1),k=t("div",{id:"content4"},null,-1),B=c('<h2 id="modal" tabindex="-1"><a class="header-anchor" href="#modal" aria-hidden="true">#</a> Modal</h2><p>Using the <code>modal</code> prop, you can change the type of the drawer. Modal <code>prop</code> is Boolean. By default, it is false. <br> But when you setup drawer as modal, the drawer navigation will be invisible. To open/close navigation you can use <code>openNav</code>, <code>closeNav</code> functions</p>',2),H=t("p",{class:"m-text m-display-small"},"Click me",-1),C=[H];function L(V,s){const l=d("Load"),i=d("MNavigationDrawerItem"),o=d("MNavigationDrawer"),r=d("ExampleUsage"),m=d("RouterLink");return u(),v("div",null,[e(l),_,e(r,{height:"328px",title:"Navigation drawer usage example",code:`<MNavigationDrawer content_area="#content1" selected="item1">
<template #prepend>
<p class="m-text m-title-medium">Header</p>
</template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>`},{default:a(()=>[e(o,{content_area:"#content1",selected:"item1"},{prepend:a(()=>[g]),default:a(()=>[e(i,{value:"item1",content:"Item n.1"}),e(i,{value:"item2",content:"Item n.2"})]),_:1}),w]),_:1}),f,N,e(r,{height:"328px",title:"Right-side drawer example",code:`<MNavigationDrawer side="right" content_area="#content1" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>`},{default:a(()=>[e(o,{side:"right",content_area:"#content2",selected:"item1"},{prepend:a(()=>[x]),default:a(()=>[e(i,{value:"item1",content:"Item n.1"}),e(i,{value:"item2",content:"Item n.2"})]),_:1}),M]),_:1}),e(r,{height:"328px",title:"Full drawer example",code:`<MNavigationDrawer side="full" content_area="#content1" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>`},{default:a(()=>[e(o,{side:"full",content_area:"#content3",selected:"item1"},{prepend:a(()=>[I]),default:a(()=>[e(i,{value:"item1",content:"Item n.1"}),e(i,{value:"item2",content:"Item n.2"})]),_:1}),D]),_:1}),y,t("p",null,[n("Inside content of every navigation item you can pass "),b,n(" with material icon. You can read more about icons "),e(m,{to:"/api/icons.html"},{default:a(()=>[n("here")]),_:1})]),e(r,{height:"328px",title:"Material icons in items example",code:`<MNavigationDrawer content_area="#content1" selected="item2">
<MNavigationDrawerItem value="item1" content="<span class='material-symbols-outlined'>apps</span>Apps"/>
<MNavigationDrawerItem value="item2" content="<span class='material-symbols-outlined'>search</span>Search"/>
</MNavigationDrawer>
<div id="content1"></div>`},{default:a(()=>[e(o,{content_area:"#content4",selected:"item2"},{default:a(()=>[e(i,{value:"item1",content:"<span class='material-symbols-outlined'>apps</span>Apps"}),e(i,{value:"item2",content:"<span class='material-symbols-outlined'>search</span>Search"})]),_:1}),k]),_:1}),B,e(r,{height:"328px",title:"Modal navigation drawer example",code:`<MNavigationDrawer ref="drawer" :modal="true" content_area="#content1">
</MNavigationDrawer>
<div id="content1" @click="this.$refs.drawer.openNav()">
<p class="m-text m-display-small">Click me</p>
</div>`},{default:a(()=>[e(o,{ref:"drawer",modal:!0,content_area:"#content5"},null,512),t("div",{id:"content5",style:{height:"100%",display:"flex","align-items":"center","justify-content":"center",cursor:"pointer"},onClick:s[0]||(s[0]=E=>this.$refs.drawer.openNav())},C)]),_:1})])}const S=p(h,[["render",L],["__file","navigation_drawer.html.vue"]]);export{S as default};
