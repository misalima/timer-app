<script setup lang="ts">
import TimeDisplay from './TimeDisplay.vue'
import { ref } from 'vue'

const timeInput = ref("00:00:00")
const isStarted = ref(false)
let updatedDuration = ref(0)



function setDuration(timeInput: string) {
  console.log(timeInput)
  const hours = parseInt(timeInput.slice(0,2))
  const minutes = parseInt(timeInput.slice(3,5))
  const seconds = parseInt(timeInput.slice(6,8))

  const time = seconds + (minutes * 60) + (hours * 3600)
  

  if (time >= 0 && time < 360000) {
    updatedDuration.value = time
    console.log(updatedDuration.value)
  } else {
    alert('Invalid input! Enter a positive number')
  }
}

function addDuration(time: number) {
  updatedDuration.value += time
}

function startClock() {
  if (!isStarted.value) {
    if (updatedDuration.value > 0) {
      console.log('toggle')
      isStarted.value = true
      timeInput.value = "00:00:00"
    }
  }
}

function pauseClock() {
  if (isStarted.value) {
    console.log('toggle')
    isStarted.value = false
  }
}

function decreaseClock() {
  updatedDuration.value--
  if (updatedDuration.value == 0) {
    isStarted.value = false
  }
}
</script>

<template>
  <div class="container">
    <TimeDisplay
      @time-decrease="decreaseClock"
      :duration="updatedDuration"
      :is-started="isStarted"
    />
    <div class="control-buttons">
      <button :class="{ disabled: isStarted }"  title="Start" @click="startClock()"><font-awesome-icon icon="fa-solid fa-play" size="xl" /></button>
      <button :class="{ disabled: !isStarted }" title="Pause/Stop" @click="pauseClock()">
        <font-awesome-icon icon="fa-solid fa-pause" size="xl" />
      </button>
      <button title="+10 Seconds"  @click="addDuration(10)">
        <font-awesome-icon icon="fa-solid fa-plus-circle" size="xl" />
      </button>
    </div>
    <div class="presets-buttons">
      <button title="Set Preset" :class="{ disabled: isStarted }" :disabled="isStarted" @click="setDuration('01:00:00')">
        1h
      </button>
      <button title="Set Preset" :class="{ disabled: isStarted }" :disabled="isStarted" @click="setDuration('00:30:00')">
        30min
      </button>
      <button title="Set Preset" :class="{ disabled: isStarted }" :disabled="isStarted" @click="setDuration('00:15:00')">
        15min
      </button>
    </div>
    <input type="time" step="2" v-model="timeInput" />
    <button :class="{ disabled: isStarted }" :disabled="isStarted"  @click="setDuration(timeInput)" class="set-custom-btn">Set custom time</button>
    
    
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
  gap: 20px;
  margin-top: 16px;
}
.control-buttons button {
  height: 3.5em;
  width: 3.5em;
  border: none;
  border-radius: 100%;
  margin: 0px 8px;
  color: var(--color-dark);
  background-color: var(--color-light);
  cursor: pointer;
  transition: background 200ms;
}

.control-buttons button:active,
.control-buttons button:hover {
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

.presets-buttons button:hover {
  background-color: var(--color-dark);
}

.control-buttons button:active, .presets-buttons button:active {
  background-color: #01384e;
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

button.set-custom-btn:hover,
button.set-custom-btn:active {
  background-color: var(--color-dark);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.308);
}

button.disabled {
  background-color: #acacac;
  cursor: not-allowed;
  color: white;
}

button.disabled:hover {
  background-color: #acacac;
}

@media (min-width: 481px) {
  .control-buttons button {
    font-size: 1.2em;
  }

  .presets-buttons button,
  button.set-custom-btn {
    font-size: 1.4em;
    padding: 16px 0;
    border-radius: 16px;
  }
}

input[type=time] {
  border: none;
  border-radius: 16px;
  text-align: center;
  padding: 18px;
  color: var(--color-dark);
  font-size: 2.5em;
  font-family: helvetica;
  width: 90%;
  cursor: pointer;
}
</style>
