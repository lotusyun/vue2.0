/**
 * Created by lichunyan on 16/11/28.
 */
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
const app = new Vue(App)

export default function(context) {
  return new Promise((resolve, reject) => {
    // app.fetchServerData(context)
    resolve(app)
  })
}