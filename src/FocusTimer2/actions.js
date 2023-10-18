import * as element from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"
import { updateDisplay } from "./timer.js"
import * as sounds from "./sounds.js"

export function startRunning() {
  state.isRunning = true

  timer.countdown()

  sounds.buttonPressAudio.play()
}

export function stopRunning() {
  state.isRunning = false

  sounds.buttonPressAudio.play()
}

export function addFiveMinutes() {
  element.minutes.textContent = Number(element.minutes.textContent) + 5

  updateDisplay(element.minutes.textContent, element.seconds.textContent)

  sounds.buttonPressAudio.play()
}

export function removeFiveMinutes() {
  element.minutes.textContent = Number(element.minutes.textContent) - 5

  if (element.minutes.textContent < 0) {
    element.minutes.textContent = 0
  }

  if (element.minutes.textContent < 1) {
    element.seconds.textContent = 0
  }

  updateDisplay(element.minutes.textContent, element.seconds.textContent)

  sounds.buttonPressAudio.play()
}

export function forestAudio() {
  state.isPlaying = element.forestButton.classList.toggle("active")

  element.rainButton.classList.remove("active")
  element.coffeeButton.classList.remove("active")
  element.fireButton.classList.remove("active")

  if (state.isPlaying) {
    sounds.playForestAudio.play()
    sounds.playCoffeeAudio.pause()
    sounds.playRainAudio.pause()
    sounds.playFireAudio.pause()

    return
  }

  sounds.playForestAudio.pause()
}

export function rainAudio() {
  state.isPlaying = element.rainButton.classList.toggle("active")

  element.forestButton.classList.remove("active")
  element.coffeeButton.classList.remove("active")
  element.fireButton.classList.remove("active")

  if (state.isPlaying) {
    sounds.playRainAudio.play()
    sounds.playCoffeeAudio.pause()
    sounds.playForestAudio.pause()
    sounds.playFireAudio.pause()
    return
  }

  sounds.playRainAudio.pause()
}

export function coffeeAudio() {
  state.isPlaying = element.coffeeButton.classList.toggle("active")

  element.rainButton.classList.remove("active")
  element.forestButton.classList.remove("active")
  element.fireButton.classList.remove("active")

  if (state.isPlaying) {
    sounds.playCoffeeAudio.play()
    sounds.playForestAudio.pause()
    sounds.playRainAudio.pause()
    sounds.playFireAudio.pause()
    return
  }

  sounds.playCoffeeAudio.pause()
}

export function fireAudio() {
  state.isPlaying = element.fireButton.classList.toggle("active")

  element.rainButton.classList.remove("active")
  element.coffeeButton.classList.remove("active")
  element.forestButton.classList.remove("active")

  if (state.isPlaying) {
    sounds.playFireAudio.play()
    sounds.playCoffeeAudio.pause()
    sounds.playRainAudio.pause()
    sounds.playForestAudio.pause()
    return
  }

  sounds.playFireAudio.pause()
}
