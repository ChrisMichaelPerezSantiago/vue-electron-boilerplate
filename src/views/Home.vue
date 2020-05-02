<template>
  <div class="Home">
    <header class="App-header">
      <h1 class="App-title">{{title}}</h1>
    </header>
    <p class="App-intro">
      <img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"/>
      <img alt="electron" src="https://img.shields.io/badge/electron-app-blue"/>
          <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-blue.svg"/>
      <img src="https://badgen.net/badge/icon/windows?icon=windows&label" alt="windows"/>
      <img src="https://badgen.net/badge/icon/chrome?icon=chrome&label" alt="chrome"/>
    </p>

     <p class="App-intro">
       To get started, edit <code>src/background.js</code> and save to reload.
     </p>

      <p class="App-intro">
        <a href="https://github.com/vuejs/composition-api">✔️ composition-api</a><br>
        <a href="https://github.com/u3u/vue-hooks">✔️ vue-hooks</a><br>
        <a href="https://github.com/SimulatedGREG/electron-vue">✔️ Vue CLI Plugin Electron Builder</a><br>
        <a href="https://www.npmjs.com/package/electron-updater">✔️ electron-updater</a><br>
        <a href="https://www.npmjs.com/package/electron-icon-builder">✔️ electron-icon-builder</a><br>
        <a href="https://www.npmjs.com/package/@cliqz/adblocker-electron">✔️ adblocker-electron</a>
      </p>
     
   </div>
</template>


<script>
  import {reactive} from '@vue/composition-api';

  export default {
    name: 'Home',
    setup(){
      const doc = reactive({
        title: 'Welcome to VueJS Electron Boilerplate'
      });

      return{
        ...doc
      }
    }
  }
</script>
