<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 offset-md3>
        <h1 class="text--secondary">Orders</h1>
         <v-list ubheader two-line flat >
          <v-list-item-group >
            <v-list-item v-for="order in orders" :key="order.id">
                <v-list-item-action>
                  <v-checkbox @click="markDone(order)" :input-value="order.done"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
                </v-list-item-action>
              <!-- </template> -->
            </v-list-item>
      
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      orders: [
        {
          id: 'fghgh',
          name: 'Vlad',
          phone: '8978454534',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone(order) {
      order.done = true
    }
  },
};
</script>
