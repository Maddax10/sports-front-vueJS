<template>
    <main>
        <form class="card_register" v-if="!usersStore.getUserConnexionInfo">
            <label for="">username</label>
            <input type="text" v-model="user.username_user" />
            <label for="">password</label>
            <input type="password" v-model="user.password_user" />
            <label for="">mail</label>
            <input type="mail" v-model="user.mail_user" />
            <label for="">firstname</label>
            <input type="text" v-model="user.firstname_user" />
            <label for="">name</label>
            <input type="text" v-model="user.name_user" />
            <label for="">img</label>
            <input type="text" value="null" disabled v-model="user.url_img_user" />
            <button @click.prevent="register">S'enregistrer</button>
        </form>
    </main>

</template>

<script setup>
    import { ref } from 'vue';
    import { useUsersStore } from '@/stores/users';
    import { useRouter } from 'vue-router';

    const usersStore = useUsersStore();
    const router = useRouter();

    const user = ref({
        username_user: Math.floor(Math.random() * 100000),
        password_user: 'test',
        mail_user: Math.floor(Math.random() * 100000) + '@gmail.com',
        firstname_user: 'test',
        name_user: 'test',
        url_img_user: null
    })

    const register = async () => {
        await usersStore.register(user.value)
        if (usersStore.getUserConnexionInfo) {
            router.push('/dashboard')
        }
    }
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        justify-content: center;
        margin-block-start: 5rem;

    }

    .card_register {
        background: #f5f7fa;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        border: 2px solid #a3c800;
        width: 90%;
        max-width: 400px;
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

            &:disabled {
                background-color: #a3a3a3;
                color: #999;
                border-color: #a3c800;
                cursor: not-allowed;
                opacity: 0.7;
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
</style>