import{c as f}from"./navbars-F_vH8I19.js";import{c as b}from"./shapes-7Z1ZtB9Y.js";import{g}from"./index-CA-6fEX3.js";import{s as o}from"./notification--NRigmGR.js";async function C(){var l;if(!g("token"))throw new Error("No token found");const t=document.createElement("div");t.className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-fade-bg overflow-hidden p-4";const n=document.createElement("div");n.className="absolute inset-0 overflow-hidden z-0",t.appendChild(n);const e=document.createElement("div");e.className=`
        relative bg-gray-800 bg-opacity-90 
        p-6 sm:p-8 mt-8 mb-8 ml-16 rounded-lg shadow-lg 
        transform transition duration-500 hover:scale-105 z-10
        w-full max-w-sm sm:max-w-md md:max-w-lg
    `,e.innerHTML=`
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Create Tournament</h2>
        <form id="create-tournament-form" class="flex flex-col gap-4">
            <input id="tournament-name" type="text" placeholder="Tournament Name"
                class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required>

            <select id="max-players"
                class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="2">2 Players</option>
                <option value="4" selected>4 Players</option>
                <option value="8">8 Players</option>
            </select>

            <button type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Create
            </button>
        </form>
    `,(l=e.querySelector("#create-tournament-form"))==null||l.addEventListener("submit",async u=>{u.preventDefault();const a=e.querySelector("#tournament-name"),s=e.querySelector("#max-players"),c=a==null?void 0:a.value.trim(),d=parseInt((s==null?void 0:s.value)||"4",10);if(!c){o("Please enter a tournament name.","error");return}try{const r=await fetch("/api/tournament/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c})});if(!r.ok){const p=await r.json();o(`Error: ${p.error}`,"error");return}const m=await r.json();o(`Tournament  <<${m.name}>>  created successfully!`,"success"),window.location.href=`/tournament/${m.id}/${d}`}catch{o("Failed to create tournament. Please try again.","error")}}),t.appendChild(e),setInterval(()=>b(n),600);const i=await f();return i&&t.appendChild(i),t}export{C as createTournamentUI};
