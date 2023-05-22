<script setup lang="ts">
    import TimeDisplay from './TimeDisplay.vue';
</script>

<template>
    <div class="container">
        <TimeDisplay />
        <div class="control-buttons">
            <button><font-awesome-icon icon="fa-solid fa-play" size="xl"/></button>
            <button><font-awesome-icon icon="fa-solid fa-pause" size="xl" /></button>
            <button><font-awesome-icon icon="fa-solid fa-plus-circle" size="xl"/></button>
        </div>
        <div class="presets-buttons">
            <button>1h</button>
            <button>30min</button>
            <button>15min</button>
        </div>
        <button class="set-custom-btn">Set custom time</button>
    </div>
</template>

<style scoped>
    .container {
        height: 600px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: column;
        gap: 30px;
        margin-top: 16px;
    }
    .control-buttons button {
        height: 4em;
        width: 4em;
        border: none;
        border-radius: 100%;
        margin: 0px 8px;
        color: var(--color-dark);
        background-color: var(--color-light);
        cursor: pointer;
        transition: background 200ms;
    }

    .control-buttons button:active, .control-buttons button:hover {
        background-color: var(--color-medium);
        color: white;
    }

    .presets-buttons {
        width: 90%;
        display: flex;
        justify-content: space-around;
        gap: 8px;
    }
    .presets-buttons button {
        min-width: 30%;
        background-color: var(--color-medium);
        border: none;
        border-radius: 8px;
        padding: 10px;
        color: white;
        font-size: 1.1em;
        font-weight: 400;
        cursor: pointer;
        transition: background 200ms;
        
    }

    .presets-buttons button:hover, .presets-buttons button:active {
        background-color: var(--color-dark);
    }

    button.set-custom-btn {
        background-color: var(--color-medium);
        font-size: 1.2em;
        color: white;
        padding: 10px 0;
        width: 90%;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background 200ms;
    }

    button.set-custom-btn:hover, button.set-custom-btn:active {
        background-color: var(--color-dark);
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.308);
    }
    
    @media (min-width: 481px) {
        .control-buttons button {
            font-size: 1.2em;
        }

        .presets-buttons button,  button.set-custom-btn {
            font-size: 1.4em;
            padding: 16px 0;
            border-radius: 16px;
        }

    }

</style>