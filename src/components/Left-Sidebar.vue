<template>
    <div id="Container" v-show="OpenSidebar">
        <div id="Xmark-Section">
            <font-awesome-icon @click="BackPage" id="Navbar-X" :icon="['fas', 'xmark']" />
        </div>
        <router-link @click="BackPage" to="/" class="Page-Link">
            List
        </router-link>
        <router-link @click="BackPage" to="/Add" class="Page-Link">
            Add
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods : {
        BackPage() {
            this.$emit('send-data')
        }
    },
    props : {
        OpenSidebar : {
            type : Boolean,
            required : true,
        }
    }
}
</script>