<template>
    <div>
        <div slot="">
            <form>
                <v-layout>
                <v-flex xs6>
                    <panel>
                        <v-text-field
                        label="name"
                        v-model="item.name"/>
                        <br>

                        <v-text-field
                        label="sku"
                        v-model="item.sku"/>
                        <br>

                        <v-text-field
                        label="Image Url"
                        v-model="item.productImageUrl"/>
                    </panel>
                </v-flex>
                
                <v-flex xs6 pl-3>
                    <panel>
                        <v-text-field
                        label="descrption"
                        multi-line
                        v-model="item.description"/>
                        <br>

                        <v-text-field
                        label="tab"
                        v-model="item.tab"/>
                        <br>

                        <div class="error1" v-html="error"/>
                        <br>
                        <v-btn class="cyan"
                        @click="addProduct">
                        Add Product
                        </v-btn>
                    </panel>
                </v-flex>
                </v-layout>
            </form>
        </div>   
    </div>
</template>

<script>
import Panel from './Panel.vue'
import itemsServive from '../services/ItemsService'
export default {
    components: {
        Panel
    },
    data() { 
        return { 
            item: {
                name: null,
                description: null,
                sku: null,
                productImageUrl: null,
                tab: null
            },
            error: null
        }
    },
    methods: {
        async addProduct() {
            try {
                console.log('Hello')
                await itemsServive.post(this.item)
                this.$router.push({
                name: 'root'
                })
            } catch(err) {
                this.error = err.response.data.error
            }
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error1 {
    color: red;
}
</style>
