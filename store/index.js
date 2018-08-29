import FormMessage from "./types/Message"
import { Message } from "element-ui"

export const state = () => ({
  baseUrl:
    process.env.APP === "local"
      ? "http://localhost:3000/"
      : "https://invisibleexperts.net:5005/",
  invoiceNumber: "",
  message: new FormMessage(),
  loaders: {
    message: false
  },
  props: {
    scrollTop: 0
  }
})

export const actions = {
  handleErrors({ state, commit, dispatch }, e) {
    console.log(e)
    console.log(e.response)

    if (e.response && e.response.data) {
      if (e.response.data.message) {
        Message.error({ message: e.response.data.message })
      }
    }
  },
  async contact({ state, commit, dispatch }) {
    try {
      if (!state.message.email.length) {
        Message.error({ message: "E-Mail field is required!" })
        return
      }

      if (
        !RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(state.message.email)
      ) {
        Message.error({ message: "Invalid E-Mail!" })
        return
      }

      if (!state.message.message.length) {
        Message.error({ message: "Message cannot be empty!" })
        return
      }

      commit("LOADING", "message")
      await this.$axios.post("/contact", state.message)
      Message.success({
        message: "Thank you for contacting us, we will respond shortly!"
      })
      commit("SET", { key: "message", value: new FormMessage() })
      commit("LOADED", "message")
    } catch (e) {
      commit("LOADED", "message")
      dispatch("handleErrors", e)
    }
  }
}

export const mutations = {
  SET_PROP: (state, { key, value }) => {
    state.props[key] = value
  },
  SET: (state, { key, value }) => {
    state[key] = value
  },
  SET_MESSAGE: (state, { key, value }) => {
    state.message[key] = value
  },
  LOADING: (state, key) => {
    state.loaders[key] = true
  },
  LOADED: (state, key) => {
    state.loaders[key] = false
  }
}
