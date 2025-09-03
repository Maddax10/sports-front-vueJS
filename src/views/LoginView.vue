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

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Arial', sans-serif;
}

.login_card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            font-weight: 600;
            color: #333;
            margin-bottom: 0.25rem;
            text-transform: capitalize;
        }

        input {
            padding: 0.75rem;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;

            &:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }
        }

        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }

            &:active {
                transform: translateY(0);
            }
        }
    }
}

.connected {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;

    label {
        display: block;
        font-size: 1.25rem;
        font-weight: 600;
        color: #27ae60;
        margin-bottom: 1.5rem;
    }

    button {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:hover {
            background: #c0392b;
            transform: translateY(-2px);
        }
    }
}
</style>