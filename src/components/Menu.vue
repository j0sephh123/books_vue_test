<template>
  <aside class="menu">
  <p class="menu-label">Administration</p>

  <ul class="menu-list">
    
    <li>
      <a @click="showCharacters = !showCharacters">Characters</a>
      <ul v-show="showCharacters">
        <li v-for="character in characters" :key="character._id">
          <a 
            @click="$store.commit('selectCharacter', {id: character._id})"
            :class="character.active ? 'is-active' : ''">
            {{character.name}}
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a @click="showChapters = !showChapters">Chapters</a>
      <ul v-show="showChapters">
        <li v-for="chapter in chapters" :key="chapter._id"
          ><a>{{chapter.name}}</a></li>
      </ul>
    </li>
  </ul>
  
</aside>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      showCharacters: true,
      showChapters: false,
    }
  },
  computed: {
    ...mapGetters(['characters', 'chapters', 'activeNav']),
  }
}
</script>
