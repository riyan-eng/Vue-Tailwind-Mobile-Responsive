<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { InformationCircleIcon, HomeIcon, BookOpenIcon } from '@heroicons/vue/24/outline'
import Navbar from './components/layout/Navbar.vue'

export default {
  components: {

    InformationCircleIcon,
    HomeIcon,
    BookOpenIcon,
    Navbar
  },
  setup() {
    const expand = ref(true)
    const menus = reactive([
      {
        menuName: 'home',
        menuPath: '/',
        menuIcon: 'HomeIcon',
        active: false,
      },
      // {
      //   menuName: 'user profile',
      //   menuPath: '/profile',
      //   menuIcon: 'UserCircleIcon',
      //   active: false,
      // },
      {
        menuName: 'about',
        menuPath: '/about',
        menuIcon: 'InformationCircleIcon',
        active: false,
      },
      {
        menuName: 'test',
        menuPath: '/test',
        menuIcon: 'BookOpenIcon',
        active: false,
      },
      {
        menuName: 'test 2',
        menuPath: '/test2',
        menuIcon: 'BookOpenIcon',
        active: false,
      },
    ])

    const store = useStore()
    const router = useRouter()

    const user = computed(() => {
      return store.getters.user
    })

    const listMenu = computed(() => {
      for (var menu of menus) {
        if (menu.menuPath == router.currentRoute.value.path) {
          menu.active = true
        } else {
          menu.active = false
        }
      }
      return menus
    })

    function onExpand() {
      expand.value = !expand.value
    }

    return {
      user, onExpand, expand, menus, listMenu
    }
  }
}
</script>

<template>
  <!-- {{user}} -->
  <div v-if="user.isLogin">
    <Navbar @onExpand="onExpand" />
    <aside
      :class="expand ? 'fixed block bg-orange-400 w-44 h-screen pt-14 py-5 shadow overflow-auto bg-opacity-100' : 'fixed bg-white w-18 h-screen pt-14 py-5 shadow overflow-auto hidden md:block'">
      <div v-for="menu of listMenu">
        <div class="flex flex-col text-left px-3">
          <router-link :to="menu.menuPath"
            :class="menu.active ? 'hover:bg-gray-400 bg-gray-200 text-blue-500 px-2 py-2 rounded inline-flex' : 'hover:bg-gray-400 px-2 py-2 rounded inline-flex'">
            <component :is="menu.menuIcon" class="h-5 w-5 text-blue-500"></component>
            <span v-if="expand" class="ml-4 text-sm capitalize">{{ menu.menuName }}</span>
          </router-link>
        </div>
      </div>
    </aside>
    <main :class="expand? 'pt-16 pl-4 pr-4 pb-4 md:ml-44': 'pt-16 pr-4 pb-4 ml-4 md:ml-20'">
      <router-view></router-view>
    </main>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

<!-- :style="expand ? 'margin-left:175px' : 'margin-left:60px' -->
