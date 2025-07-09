function s(o,e="success"){const t=document.createElement("div");t.textContent=o,t.className=`
    fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white
    ${e==="success"?"bg-green-500":e==="error"?"bg-red-500":"bg-yellow-500"}
  `,t.style.zIndex="1000",document.body.appendChild(t),setTimeout(()=>{t.classList.add("opacity-0","transition-opacity","duration-500"),setTimeout(()=>t.remove(),500)},3e3)}export{s};
