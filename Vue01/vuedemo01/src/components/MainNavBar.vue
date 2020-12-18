<template>
    <div id="app1">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/"> {{ $t('NavBar.Home') }} </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/about"> {{ $t('NavBar.About') }} </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/contact"> {{ $t('NavBar.Contact') }} </router-link>
                </b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown v-bind:text="$t('NavBar.Lang.title')">
                    <b-dropdown-item v-bind:data-lang="lan" href="#" right v-on:click="changelanguage"
                        v-for="lan in $t('NavBar.Lang.langs')" :key="lan">{{ lan }}</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown v-bind:text="$t('NavBar.User.title')" right>
                    <b-dropdown-item>
                        <router-link style="color:black;" to="/login">{{$t('NavBar.User.actions[0]')}}</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">{{$t('NavBar.User.actions[1]')}}</b-dropdown-item>
                    <b-dropdown-item href="#">{{$t('NavBar.User.actions[2]')}}</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>
        </b-navbar>
        <router-view />
    </div>
</template>

<script>
    // import NavBar
    import Vue from 'vue'
    import {
        BootstrapVue,
        IconsPlugin
    } from 'bootstrap-vue'



    // Install BootstrapVue
    Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)


    export default {
        name: 'MainNavBar',
        data() {
            return {

            }
        },
        'components': {

        },
        methods: {
            changelanguage: function (event) {
                let lang = event.target.getAttribute('data-lang');
                lang = lang.toLowerCase();

                switch (lang) {
                    case '英文':
                        lang = 'en';
                        break;
                    case '中文':
                        lang = 'zh';
                        break;
                    case '日文':
                        lang = 'ja';
                        break;
                    default:
                        // code block
                }

                //將所選語系代碼存入store中
                this.$store.commit('setLang', lang);
                //讓i18n多語系套件切換至所選語系
                this.$i18n.locale = this.$store.getters.getLang;
                //將所選語系代碼存入localStorage
                localStorage.setItem('footmark-lang', lang);

            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.55);
    }
</style>