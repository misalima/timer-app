<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['timeDecrease'])
const clock = ref('00:00:00')
const props = defineProps<{
  duration: number
  isStarted: boolean
}>()
let intervalId: number

const isStarted = computed(() => {
  return props.isStarted
})

const duration = computed(() => {
  return props.duration
})

let storedDuration = props.duration

const startTimer = function () {
  console.log(storedDuration)
  intervalId = setInterval(() => {
    if (storedDuration <= 0) {
      clearInterval(intervalId)
    } else {
      console.log(storedDuration)
      updateDisplay(storedDuration - 1)
      storedDuration--
      emit('timeDecrease')
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
  <div class="circle">
    <h2>{{ clock }}</h2>
  </div>
</template>

<style scoped>
.circle {
  height: 250px;
  width: 250px;
  border: 2px dashed var(--color-dark);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle h2 {
  font-weight: 500;
  font-size: 3.5em;
  color: var(--color-dark);
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
