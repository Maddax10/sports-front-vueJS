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

const usersStore = useUsersStore();

const user = ref({
    username_user: Math.floor(Math.random() * 100000),
    password_user: 'test',
    mail_user: Math.floor(Math.random() * 100000) + '@gmail.com',
    firstname_user: 'test',
    name_user: 'test',
    url_img_user: null
})

const register = () => {
    usersStore.register(user.value)
}

</script>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    margin-block-start: 5rem;

}

.card_register {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 400px;
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

        &:disabled {
            background-color: #a3a3a3;
            color: #999;
            border-color: #000000;
            cursor: not-allowed;
            opacity: 0.7;
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
</style>