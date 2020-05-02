<template>
  <footer>
    <p>
      with ❤️ copyright {{year}}, {{author.name}}
    </p>
    <div class="version">
      <img alt="" :src="`https://img.shields.io/badge/version-${version}-blue.svg`" target="_blank" />
    </div>
  </footer>
</template>

<script>
  import { reactive} from '@vue/composition-api';
 
  export default {
    name: 'Footer',
    setup(){
      const doc = reactive({
        author: require('../../package.json').author,
        version: require('../../package.json').version,
        year: new Date().getFullYear()
      });

      return{ 
        ...doc
      }
    }
  }
</script>