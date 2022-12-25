export const signIn = (email, password) => {
    return fetch("https://loft-taxi.glitch.me/auth", {
        method: "POST",
        body: JSON.stringify(
            {
                email: email,
                password: password
            }
        ),
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => data);
};