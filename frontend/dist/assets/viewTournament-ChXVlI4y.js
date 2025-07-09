import{c as y}from"./navbars-F_vH8I19.js";import{g as x,c as k}from"./index-CA-6fEX3.js";import{c as C}from"./shapes-7Z1ZtB9Y.js";import{s as u}from"./notification--NRigmGR.js";function S(f,w,g){f.innerHTML="";const c=x("token");if(!c)throw new Error("No token found");k(c);const s=document.createElement("div");s.className="relative flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-fade-bg overflow-hidden";const m=document.createElement("div");m.className="absolute inset-0 overflow-hidden z-0",s.appendChild(m);const a=document.createElement("div");a.className=`
        relative bg-gray-800 bg-opacity-90 
        p-6 sm:p-8 mt-8 mb-8 ml-16 rounded-lg shadow-lg 
        transform transition duration-500 hover:scale-105 z-10
        w-full max-w-sm sm:max-w-md md:max-w-lg
    `;const p=document.createElement("h2");p.className="text-3xl font-bold mb-4",p.textContent="Tournament Lobby",a.appendChild(p);const d=document.createElement("div");d.className="grid grid-cols-4 gap-4 mb-4",a.appendChild(d);const i=document.createElement("button");i.className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hidden",i.textContent="Start Tournament",a.appendChild(i),s.appendChild(a),f.appendChild(s),setInterval(()=>C(m),600);const l=[];async function b(){d.innerHTML="";for(let t=0;t<g-1;t++){const n=document.createElement("div");if(n.className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center cursor-pointer",l[t]!==void 0)n.textContent=l[t].toString(),n.classList.add("bg-green-500");else{n.innerHTML=`
                    <div class="relative w-full h-full flex items-center justify-center">
                        <button
                        class="invite-btn flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                        title="Пригласить игрока">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        </button>
                        <input
                        type="number"
                        min="1"
                        placeholder="ID"
                        class="invite-input absolute top-full mt-2 w-20 h-9 rounded-md px-3 py-1.5 text-sm text-black bg-white shadow-lg border border-gray-300 transition-all opacity-0 scale-95 pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    `;const v=n.querySelector(".invite-btn"),e=n.querySelector(".invite-input");v.addEventListener("click",r=>{r.stopPropagation(),e.style.opacity="1",e.style.pointerEvents="auto",e.style.transform="scale(1)",e.focus()}),e.addEventListener("blur",()=>{e.style.opacity="0",e.style.pointerEvents="none",e.style.transform="scale(0.95)"}),e.addEventListener("keydown",async r=>{if(r.key==="Enter"){const o=e.value.trim(),h=parseInt(o,10);o&&!isNaN(h)?(l[t]=h,u(`User ${h} has been added!`,"success"),b()):u("Invalid user ID.","error"),e.blur()}})}d.appendChild(n)}i.classList.toggle("hidden",l.length<g-1)}i.addEventListener("click",async()=>{try{const t=await fetch("/api/user/me",{headers:{Authorization:`Bearer ${c}`}});if(!t.ok)throw new Error("Failed to fetch user data");const{user:n}=await t.json(),e=[Number(n.id),...l.filter(o=>typeof o=="number")];console.log("User IDs:",e);const r=await fetch(`/api/tournament/${w}/start`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({userIds:e})});if(!r.ok){const o=await r.json();u(`Failed to start: ${o.error}`,"error");return}}catch{u("Failed to start the tournament","error")}}),b(),y().then(t=>{t&&s.appendChild(t)})}export{S as renderTournamentPage};
