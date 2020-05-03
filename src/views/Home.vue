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
    <div v-if="doc.isLoading" class="App-intro">
      loading ...
    </div>
    <div v-else class="App-intro">
      <div class="content" v-for="data in doc.data" :key="data.key">
        <a :href="data.url">{{data.value}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {reactive, onMounted} from '@vue/composition-api';
  import {useStore , useState} from '@u3u/vue-hooks';
  
  export default {
    name: 'Home',
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState(['doc'])
      });
  
      const info = reactive({
        title: 'Welcome to VueJS Electron Boilerplate'
      });
  
      onMounted(() => store.value.dispatch('GET_DATA'));
  
      return{
        ...info,
        ...state
      }
    }
  }
</script>