<script setup lang="ts">
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['timeDecrease'])
const clock = ref('00:00:00')
const volumeStateIcon = ref('fa-volume-high')
const props = defineProps<{
  duration: number
  isStarted: boolean
}>()
let intervalId: number
let soundOn = ref(true);


const isStarted = computed(() => {
  return props.isStarted
})

const duration = computed(() => {
  return props.duration
})

let storedDuration = props.duration

const switchVolume = () => {
  if (volumeStateIcon.value === 'fa-volume-high') {
    volumeStateIcon.value = 'fa-volume-mute';
    soundOn.value = false;
  } else {
    volumeStateIcon.value = 'fa-volume-high';
    soundOn.value = true;
  }
}

const startTimer = function () {
  console.log(storedDuration)
  intervalId = setInterval(() => {
    if (storedDuration <= 0) {
      clearInterval(intervalId)
    } else {
      console.log(storedDuration)
      updateDisplay(storedDuration - 1)
      storedDuration--
      if (soundOn.value) {
        const tickSound = new Audio('./src/assets/tick.wav');
        tickSound.play();
      }
      emit('timeDecrease')
    }
    if(storedDuration == 0) {
      
      if (soundOn.value) {
        const timeUpSound = new Audio('./src/assets/time-up.wav');
        timeUpSound.play();
      } else {
        setTimeout(() => {
          alert("Time is up!");
        }, 1000);
      }  
    }
    
  }, 1000)
}

const stopTimer = function () {
  clearInterval(intervalId)
}

function updateDisplay(time: number) {
  let hours, minutes, seconds: number

  hours = Math.floor(time / 60 / 60)
  minutes = Math.floor(time / 60 - hours * 60)
  seconds = Math.floor(time % 60)

  let hourString = hours < 10 ? '0' + hours : hours
  let minuteString = minutes < 10 ? '0' + minutes : minutes
  let secondsString = seconds < 10 ? '0' + seconds : seconds

  clock.value = `${hourString}:${minuteString}:${secondsString}`
}

watch(duration, () => {
  storedDuration = duration.value
  updateDisplay(storedDuration)
})
watch(isStarted, () => {
  if (isStarted.value) {
    startTimer()
  } else {
    stopTimer()
  }
})
</script>

<template>
  <div class="circle-container">
    <div class="circle">
    <h2 :class="{'clock-stopped': !isStarted}">{{ clock }}</h2>
    <button @click="switchVolume" ><font-awesome-icon :icon="`fa-solid ${volumeStateIcon}`" size="l" /></button>
    </div>
  </div>
  
</template>

<style scoped>
.circle-container {
  position: relative;
}

.circle {
  height: 250px;
  width: 250px;
  border: 2px dashed var(--color-dark);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.circle h2 {
  font-weight: 500;
  font-size: 3.5em;
  color: var(--color-dark);
  transition: all 0.3s;
}

h2.clock-stopped {
  color: #888;
}

button {
  background-color: var(--color-light);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: var(--color-dark);
  position: absolute;
  bottom: 16px;
  opacity: 0.5;
  transition: opacity 0.4s;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

@media (min-width: 481px) {
  .circle {
    height: 300px;
    width: 300px;
  }
  .circle h2 {
    font-size: 4em;
  }
}
</style>
