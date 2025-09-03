<template>
    <main>
        <div class="login_card" v-if="userData === null">
            <form action="">
                <label for="">username</label>
                <input type="text" v-model="usernameInput" />
                <label for="">password</label>
                <input type="text" v-model="passwordInput" />
                <button @click.prevent="login">login</button>
            </form>
        </div>
        <div class="connected" v-else>
            <label>Vous êtes connectés !</label>
            <button @click.prevent="disconnect">se deconnecter</button>
        </div>
    </main>
</template>



<script setup>
import { ref } from 'vue'

const usernameInput = ref('bob')
const passwordInput = ref('passbob')

let userData = ref(null)

/**
 * En 2 étapes:
 *      1) Vérifier que l'username et le mdp existe bien
 *      2) Dire qu'il est connecté
 * Donc c'est sur le serveur API que je dois faire ça,
 * une fois l'update fait, je renvoit l'objet qui à été modifié
 */
const login = async () => {
    //1) Vérifier que l'username et le mdp existe bien, réponse d'un tableau vide s'il n'existe pas
    userData.value = await connexion()
    // console.log(data);
    // console.log("data[0][\"_id_user\"]", data[0]["_id_user"]);
    //2) dire qu'il est connecté
    console.log(userData.value)
}

const connexion = async () => {
    // console.log(`http://localhost:3000/users_EP/login/${usernameInput.value}/${passwordInput.value}`)
    const resp = await fetch(
        `http://localhost:3000/users_EP/login/${usernameInput.value}/${passwordInput.value}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    // .then(resp => resp.json())
    // .then(resp => {
    //     console.log(resp)
    //     if (resp.length === 0) {
    //         console.log("Username or password is not correct !")
    //     }
    // })
    if (resp.ok) {
        const data = await resp.json()
        return data
    }

    return null
}

const disconnect = () => {
    userData.value = null;
    console.log("disconnect");

}
</script>