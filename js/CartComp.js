Vue.component('bak', {
    props: ['bakItems', 'img', 'visibility'],
    template: `<div class="bak-block" v-show="visibility">
                <p v-if="!bakItems.length">Корзина пуста</p>
                <bak-item class="bak-item" v-for="item of bakItems"
                    :key="item.id_product"
                    :bak-item="item"
                    :img="img">
                </bak-item>
            </div>`
});

Vue.component('bak-item', {
    props: ['bakItem', 'img'],
    template: `
                <div class="bak-item">
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{bakItem.product_name}}</p>
                            <p class="product-quantity">Количество: {{bakItem.quantity}}</p>
                            <p class="product-single-price">{{bakItem.price}}₽ за единицу</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{bakItem.quantity*bakItem.price}}₽</p>
                        <button class="del-btn" @click="$parent.$emit('remove', bakItem)">&times;</button>
                    </div>
                </div>
    `
});
