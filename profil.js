const promas = new URLSearchParams(window.location.search);
const username = promas.get("user");

export async function ShowUser(parent) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
        throw new error("user introvable");;
        
    }
    const user = await res.json()
    console.log(user)
    console.log(username)

    parent.innerHTML = "";

    const html = `
       <div class="flex flex-col items-center gap-3 w-1/4 bg-gray-900 rounded-lg backdrop-blur-sm py-5">
        <img src=${user.avatar_url} alt="Profil" class="w-[25%] rounded-full ">
        <h2 class="font-bold text-2xl">${user.name}</h2>
        <p class="text-pink-200 ">@${user.login}</p>
        <p class="text-gray-400">Développeuse Full Stack</p>

        <div class="flex flex-col items-center border border-gray-700 p-2 rounded-md">
            <p class="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent ">${user.location}</p>
            <p>Membre depuis septembre 2026</p>
        </div>

        <div class="flex items-center ">
            <div class="flex flex-col items-center border border-gray-700  p-2 rounded-lg">
                <h3 class="text-pink-300">${user.public_repos}</h3>
                <p>DÉPÔTS</p>
            </div>
            <div class="flex flex-col items-center  border border-gray-700  p-2 rounded-lg gap-2">
                <h3 class="text-purple-300 ">${user.followers}</h3>
                <p>ABONNES</p>
            </div>
            <div class="flex flex-col items-center border border-gray-700  p-2 rounded-lg">
                <h3 class="text-purple-500">${user.following}</h3>
                <p>ABONNEMENTS</p>
            </div>
        </div>

        <button class="bg-gradient-to-r to-purple-500 from-pink-300 px-10 py-2 rounded-lg ">Ajouter a la shortlist</button>
        <a href=${user.html_url}><button class="bg-transparent border border-gray-700 px-2 py-5 rounded-lg">Voir le profil original</button></a>
    </div>

    `

    parent.innerHTML = html;
}