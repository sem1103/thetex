document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("main > section"),t=document.querySelectorAll("img");document.getElementById("header__wrapper").classList.remove("loading");const r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible__content")})},{threshold:.2});let s=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target.getAttribute("data-src");e.target.setAttribute("src",t)}})},{threshold:.2});e.forEach(e=>{e.classList.add("visible__none"),r.observe(e)}),t.forEach(e=>{s.observe(e),e.setAttribute("decoding","async")})});