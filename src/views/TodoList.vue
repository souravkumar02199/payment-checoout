<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12" style="height:80px ">
                <Nav />
            </v-col> 
            <v-col cols="12" style="height:80px ">
                <ListaTareas />
            </v-col>   
        </v-row> 
    </v-container>
</template>
<script>
import ListaTareas from '../components/ListaTareas'
import Nav from '../components/Nav.vue'
export default {
    components:{ ListaTareas,Nav},
    data() {
        return {}
    },
    
}
</script>