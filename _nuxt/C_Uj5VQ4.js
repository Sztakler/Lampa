import{_ as y}from"./Dq8nZ2-p.js";import{u as m,_ as D}from"./B31O5Tdq.js";import{_ as x,s as f,o as s,c as r,a as e,t as l,u as c,b as d,w as h,F as k,f as w,d as S}from"./vu7MYg1j.js";const v={class:"container"},W={class:"left"},B={class:"right"},L=["src","alt"],N={__name:"DayWeather",props:["index"],setup(t){function i(a){if(a===1)return"Today";let o=new Date;return o.setDate(o.getDate()+a-1),o.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}const n=m(),{weatherData:_}=f(n);return(a,o)=>(s(),r("div",v,[e("div",W,[e("h4",null,l(i(t.index)),1),e("h6",null,l(c(n).getWeatherDescription(t.index-1,"daily")),1)]),e("div",B,[e("img",{class:"monochromatic",src:c(n).getIconPath(t.index-1,"daily"),alt:c(n).getWeatherDescription(t.index-1,"daily")},null,8,L),e("h3",null,l(Math.round(c(_).daily.temperature2mMax[t.index-1]))+"°C ",1)])]))}},b=x(N,[["__scopeId","data-v-da1df790"]]),I={key:0},T={key:1},V={__name:"Weekly",setup(t){const i=m(),{weatherData:n}=f(i);return(_,a)=>{const o=y,u=D,p=b;return s(),r("article",null,[e("header",null,[d(u,{reversed:!0},{default:h(()=>[d(o,{to:"/"},{default:h(()=>a[0]||(a[0]=[S("Back")])),_:1})]),_:1})]),c(n)?(s(),r("ul",I,[(s(),r(k,null,w(7,g=>e("li",null,[d(p,{index:g},null,8,["index"])])),64))])):(s(),r("div",T,"Loading..."))])}}},M=x(V,[["__scopeId","data-v-bb725c7d"]]);export{M as default};