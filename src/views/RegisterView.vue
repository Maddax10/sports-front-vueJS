<template>
    <main>
        <div class="cardRegister">
            <label for="">username</label>
            <input type="text" />
            <label for="">password</label>
            <input type="password" />
            <label for="">mail</label>
            <input type="mail" />
            <label for="">firstname</label>
            <input type="text" />
            <label for="">name</label>
            <input type="text" />
            <label for="">img</label>
            <input type="text" value="null" disabled />
            <button>S'enregistrer</button>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Arial', sans-serif;
}

.cardRegister {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 450px;
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
            background-color: #f5f5f5;
            color: #999;
            border-color: #d1d5db;
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