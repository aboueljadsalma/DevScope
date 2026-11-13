const promas = new URLSearchParams(window.location.search);
const username = promas.get("user");

export async function ShowUser(parent, parent2, count) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const res1 = await fetch(`https://api.github.com/users/${username}/repos`)
    if (!res.ok || !res1.ok) {
        throw new error("user introvable");
        
    }
    const user = await res.json();
    const repo = await res1.json();
    console.log(repo)
    console.log(user)
    console.log(username)

    parent.innerHTML = "";

    const html = `
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

    `

    parent.innerHTML = html;
    count.textContent = user.public_repos


    repo.forEach(rep => {
        console.log(rep.name)


        const html = `
           <article  class="border border-gray-700  p-4 rounded-lg ">
            <h3 class="text-yellow-100">
                <i class="fa-regular fa-square text-[12px] text-white"></i>
                ${rep.name}
            </h3>
            <p class="text-gray-400">${user.bio}</p>
            <div class="flex gap-4">
                <p>
                    <i class="fa-solid fa-circle text-[7px]"></i>
                    ${user.language}
                </p>
                <p class="text-yellow-300">
                    <i class="fa-sharp fa-solid fa-star text-[9px]"></i>
                    0
                </p>
            </div>

            <p class="text-gray-300">
                Mise à jour il y a jours
            </p>

        </article>
        `

        parent2.insertAdjacentHTML("beforeend", html);
    })
}