import{d as t,Z as r,f as a,a0 as n}from"./index.91ca9f2f.js";import{o}from"./index.77b47590.js";import{M as s}from"./Markdown.ad0cfa53.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),u=()=>{t(),o("manage.sidemenu.about");const[e]=r(i);return a(n,{get loading(){return e.loading},get children(){return a(s,{get children(){return e()}})}})};export{u as default};