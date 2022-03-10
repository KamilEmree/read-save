<template>
    <nav id="Navbar">
        <div id="Navbar-Content">
            <p>Welcome The Read & Save Project!</p>
            <font-awesome-icon id="Navbar-İcon" @click="IsActive = !IsActive" :icon="['fas', 'bars']" class="fa-1x"/>
        </div>
    </nav>
    <LeftSidebar @send-data ="Falsed" :OpenSidebar="IsActive"/>
</template>

<script>
import LeftSidebar from "./Left-Sidebar"
export default {
    data() {
        return {
            IsActive : false
        }
    },
    components : {
        LeftSidebar
    },
    methods : {
        Falsed() {
            this.IsActive = false
        }
    }
}
</script>
