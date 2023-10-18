import { controls, soundControls } from "./elements.js"
import * as actions from "./actions.js"
import state from "./state.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action]() != "function") {
      return
    }

    actions[action]()
  })
}

// export function registerMusicControls() {
//   soundControls.addEventListener("click", (event) => {
//     const audio = event.target.dataset.audio

//     if (typeof actions[audio]() != "function") {
//       return
//     }

//     actions[audio]()
//   })
// }

let currentAudio = state.isPlaying

const audioButtons = document.querySelectorAll("[data-audio]")

export default audioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const audio = event.target.dataset.audio

    if (typeof actions[audio]() != "function") {
      return
    }

    actions[audio]()
  })
})
