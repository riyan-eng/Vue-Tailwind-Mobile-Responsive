<template>
    <nav class="fixed bg-blue-600 shadow-md z-50 w-full px-4 py-2 flex justify-between items-center">
        <div class="inline-flex items-center">
            <div @click="$emit('onExpand')" class="hover:bg-gray-600 p-1 rounded-full" style="cursor: pointer">
                <Bars3Icon class="h-5 w-5 text-white" />
            </div>
            <router-link to="/" class="ml-3 text-2xl text-white">My App</router-link>
        </div>
        <div>
            <div>
                <img @click="onShow" class="w-8 h-8 rounded-full border border-white cursor-pointer"
                    :src="user.data.image" alt="Rounded avatar" />
                <div v-show="show" class="absolute right-1 py-2 mt-2 bg-indigo-100 rounded-md shadow-xl w-44">
                    <div class="block px-4 pt-2 text-indigo-700" style="font-size: 12px;">
                        Username: {{user.data.username}}
                    </div>
                    <div class="block px-4 pb-2 text-indigo-700" style="font-size: 9px;">
                        Email: {{user.data.email}}
                    </div>
                    <router-link to="/"
                        class="block px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-400 hover:text-indigo-100">
                        Dropdown List 1
                    </router-link>
                    <router-link to="/"
                        class="block px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-400 hover:text-indigo-100">
                        Dropdown List 2
                    </router-link>
                    <router-link to="/"
                        class="block px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-400 hover:text-indigo-100">
                        Dropdown List 3
                    </router-link>
                    <div @click="signOut"
                        class="block px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer">
                        Sign out
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
    components: {
        Bars3Icon,
    },
    setup() {
        const show = ref(false);

        const store = useStore();
        const router = useRouter();

        const user = computed(() => {
            return store.getters.user;
        });

        async function signOut() {
            store.dispatch("signOut");
            router.push("/login");
        }

        async function onShow() {
            show.value = !show.value;
        }

        return {
            signOut,
            user,
            onShow,
            show,
        };
    },
};
</script>
