<template>
<div class="column is-8 is-offset-2">
  <p class="title is-2">Book title</p>
  <search></search><hr>
  <div class="columns">
    <div class="column is-4">
      <menu-comp></menu-comp>
    </div>
    <div class="column is-8">
      {{selectedCharacter.info}}
    </div>
  </div>
</div>
</template>

<script>
import SearchVue from '../components/Search.vue';
import MenuVue from '../components/Menu.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    search: SearchVue,
    menuComp: MenuVue,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['selectedCharacter'])
  }
}
</script>
