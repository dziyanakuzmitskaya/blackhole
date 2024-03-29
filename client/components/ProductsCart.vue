<template>
  <section v-if="products" class="cart-section">
    <component
      :is="modalComponent"
      v-if="isOpen"
      :products="products"
      :total-cost="totalCost"
      @close="closeModal"
      @change-modal="openModal(modalName.THANKS)" />

    <h1 class="title">Shopping Cart</h1>

    <p class="hint">Review your order below and click checkout to continue!</p>

    <BhCartButtons
      :isDisplayedCheckOutButton="!!products.length"
      @check-out="openModal(modalName.PAY)" />

    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <div class="product-image">image</div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-count">
          <BhCountControl
            :count="product.quantity"
            @remove-product="removeProduct(product.id)"
            @update-count="(value) => updateQuantity(value, product)" />
        </div>
        <div class="product-cost">{{ getCost(product) }}</div>
      </div>
    </div>

    <div class="total">${{ totalCost }}</div>

    <BhCartButtons
      v-if="products.length"
      class="cart-buttons"
      @check-out="openModal(modalName.PAY)" />
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'
  import BhCartButtons from '@/components/buttons/BhCartButtons'
  import BhCountControl from '@/components/buttons/BhCountControl'
  import PayModal from '@/components/modals/PayModal'
  import ThanksForBuyModal from '@/components/modals/ThanksForBuyModal'

  export default {
    name: 'ProductCart',
    components: {
      BhCartButtons,
      BhCountControl,
      PayModal,
      ThanksForBuyModal
    },
    data: () => ({
      isOpen: ''
    }),
    computed: {
      ...mapGetters({ products: get.CART, user: get.CURRENT_USER }),
      modalName() {
        return {
          PAY: 'Pay',
          THANKS: 'ThanksForBuy'
        }
      },
      modalComponent() {
        return this.isOpen + 'Modal'
      },
      totalCost() {
        return (
          this.products.reduce(
            (prev, curr) => prev + +curr.cost * curr.quantity,
            0
          ) || 0
        )
      }
    },
    async created() {
      if (!this.products) {
        await this[action.GET_PRODUCTS]()
      }
    },
    methods: {
      ...mapActions([
        action.ADD_PRODUCT_TO_CART,
        action.DELETE_PRODUCT_FROM_CART,
        action.GET_PRODUCTS
      ]),
      getCost(product) {
        return product.cost === 'free'
          ? product.cost
          : '$' + +product.cost * product.quantity
      },
      updateQuantity(value, product) {
        product.quantity = value
        this[action.ADD_PRODUCT_TO_CART](product)
      },
      removeProduct(productId) {
        this[action.DELETE_PRODUCT_FROM_CART](productId)
      },
      openModal(name) {
        if (!this.products.length) return
        this.isOpen = name
      },
      closeModal() {
        this.isOpen = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1200px;
    width: 100%;
    padding: 30px 20px 50px;
    margin: 0 auto;
  }

  .title {
    font-size: 38px;
    font-weight: 500;
  }

  .hint {
    margin: 10px 0 25px;

    opacity: 0.7;

    font-size: 22px;
    font-weight: 300;
  }

  .products {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 20px 0 40px;
  }

  .product {
    display: flex;

    padding: 20px;

    font-weight: 300;

    & > :not(:last-child) {
      margin-right: 40px;
    }

    &-image {
      width: 100px;
    }
    &-name {
      flex-grow: 1;
    }
    &-count {
      width: 90px;
    }
    &-cost {
      width: 160px;

      font-size: 20px;
      text-align: right;
    }
  }

  .total {
    width: 100%;
    margin-bottom: 40px;

    text-align: right;
    font-size: 28px;
    font-weight: 500;
  }

  .cart-buttons {
    width: 100%;
    justify-content: flex-end;
  }

  .stripe-wrapper {
    background-color: azure;
    width: 100%;
  }
</style>
