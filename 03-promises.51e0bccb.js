function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()<.5?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=parseInt(document.querySelector("input[name='delay']").value),n=parseInt(document.querySelector("input[name='step']").value),r=parseInt(document.querySelector("input[name='amount']").value);for(let t=0;t<r;t++)e(t,o+t*n).then((e=>{console.log(`Promise ${e.position} resolved with delay ${e.delay}`)})).catch((e=>{console.log(`Promise ${e.position} rejected with delay ${e.delay}`)}))}));
//# sourceMappingURL=03-promises.51e0bccb.js.map
