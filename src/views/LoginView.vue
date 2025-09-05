/**
* En 2 étapes:
* 1) Vérifier que l'username et le mdp existe bien
* 2) Dire qu'il est connecté
*/

<template>
    <main>
        <!--Après avoir cliqué sur le bouton, on vérifie si l'user est bien enregistré dans le store-->
        <!--S'il n'est pas connecté, on affiche le formulaire-->
        <div class="login_card" v-if="!usersStore.getUserConnexionInfo">
            <form action="">
                <label for="">username</label>
                <input type="text" v-model="usernameInput" />
                <label for="">password</label>
                <input type="text" v-model="passwordInput" />
                <button @click.prevent="login">login</button>
            </form>
        </div>
    </main>

</template>

<script setup>
    import { ref } from 'vue'
    import { useUsersStore } from '@/stores/users'
    import { useRouter } from 'vue-router'

    const usersStore = useUsersStore();
    const router = useRouter();

    const usernameInput = ref('bob')
    const passwordInput = ref('passbob')

    const login = async () => {
        //1) Vérifier que l'username et le mdp existe bien
        await usersStore.login(usernameInput.value, passwordInput.value)
        if (usersStore.getUserConnexionInfo) {
            router.push('/dashboard')
        }
    }
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block-start: 5rem;
    }

    .login_card {
        background: #f5f7fa;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        border: 2px solid #a3c800;
        width: 100%;
        max-width: 400px;

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            label {
                font-weight: 600;
                color: #1a2a3a;
                margin-bottom: 0.25rem;
                text-transform: capitalize;
            }

            input {
                padding: 0.75rem;
                border: 2px solid #a3c800;
                border-radius: 8px;
                font-size: 1rem;
                transition: border-color 0.3s ease;

                &:focus {
                    outline: none;
                    border-color: #1a2a3a;
                    box-shadow: 0 0 0 3px rgba(26, 42, 58, 0.08);
                }
            }

            button {
                background: #a3c800;
                color: #1a2a3a;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                margin-top: 1rem;
                transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;

                &:hover {
                    background: #1a2a3a;
                    color: #a3c800;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(26, 42, 58, 0.18);
                }

                &:active {
                    background: #a3c800;
                    color: #fff;
                    transform: translateY(0);
                }
            }
        }
    }
</style>