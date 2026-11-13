async function fetchData(user) {
    try {
        const res = await fetch(`https://api.github.com/users/${user}`);
        if (!res.ok) {
            throw new error('user introvable');
        }
        const data = await res.json();
        if (data) {
            window.location.href = `./profil.html?user=${data.login}`
        }
        console.log(data)
     }catch(err) {
        console.log(err)
     }
}

export function Submit(search, submit) {
    let value = "";

    search.addEventListener("input", (e) => {
        value = e.target.value
    });

    submit.addEventListener("click", () => {
        fetchData(value);
    })
    
}
