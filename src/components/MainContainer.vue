<template>
  <div class="container">
    <div class="container-head">
      <ProfileComponent />
    </div>

    <div class="container-body">
      <SectionTemplate title="Search Teams">
        <SearchField />
      </SectionTemplate>

      <SectionTemplate title="My Teams">
        <EmptyPlaceholder v-if="!followedCount" />

        <MyTeams v-for="(value, id) in allFollowed" :name="value" />
      </SectionTemplate>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import EmptyPlaceholder from './container-components/EmptyPlaceholder.vue';
import MyTeams from './container-components/MyTeams.vue';
import ProfileComponent from './container-components/ProfileComponent.vue';
import SearchField from './container-components/SearchField.vue';
import SectionTemplate from './container-components/SectionTemplate.vue';

export default {
  components: {
    ProfileComponent,
    SectionTemplate,
    SearchField,
    EmptyPlaceholder,
    MyTeams
  },

  computed: {
    ...mapGetters(['allFollowed', 'followedCount']),
  }
}
</script>

<style scoped lang="scss">
.container-body {
  background-color: $base-darker-color;
}
</style>