<template>
    <div>
        <div slot="">
            <form>
                <v-layout>
                <v-flex xs6>
                    <panel>
                        <v-text-field
                        label="name"
                        required
                        :rules="[rules.required]"
                        v-model="item.name"/>
                        <br>

                        <v-text-field
                        label="sku"
                        required
                        :rules="[rules.required]"
                        v-model="item.sku"/>
                        <br>

                        <v-text-field
                        label="Image Url"
                        required
                        :rules="[rules.required]"
                        v-model="item.productImageUrl"/>
                    </panel>
                </v-flex>
                
                <v-flex xs6 pl-3>
                    <panel>
                        <v-text-field
                        label="descrption"
                        required
                        :rules="[rules.required]"
                        multi-line
                        v-model="item.description"/>
                        <br>

                        <v-text-field
                        label="tab"
                        required
                        :rules="[rules.required]"
                        v-model="item.tab"/>
                        <br>

                        <div class="error1" v-html="error"/>
                        <br>
                        <v-btn class="cyan"
                        @click="editProduct">
                        Update Product
                        </v-btn>
                    </panel>
                </v-flex>
                </v-layout>
            </form>
        </div>   
    </div>
</template>

<script>
import itemsServive from '../services/ItemsService'
export default {
    components: {
    },
    data() { 
        return { 
            item: {
                name: this.name,
                description: this.description,
                sku: this.sku,
                productImageUrl: this.productImageUrl,
                tab: this.tab
            },
            error: null,
            rules: {
              required: (value) => !!value || 'Required.'
            }
        }
    },
    methods: {
        async editProduct() {
            this.error = null
            const areAllFieldsFilledIn = Object
               .keys(this.item)
               .every(key => !!this.item[key])

            if(!areAllFieldsFilledIn) {
                this.error = "Please fill in all the required fields."
                return
            }
            try {
                const itemId = this.$store.state.route.params.itemId
                await itemsServive.put(this.item, itemId)
                this.$router.push({
                name: 'item',
                params: {
                    itemId: itemId
                }
                })
            } catch(err) {
                this.error = err.response.data.error
            }  
        }
    },
    async mounted() {
        this.error = null
        try {
            const itemId = this.$store.state.route.params.itemId
            this.item = (await itemsServive.show(itemId)).data
        } catch(err) {
             console.log('err', err.response.data.error)
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error1 {
    color: red;
}
</style>
