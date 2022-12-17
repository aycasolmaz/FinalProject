<template>
    <main>
        <div id="meals">
            <input type="text" v-model="search" class="search">
            <button @click="fetchData()" class="mealButton">Search</button>
            <div v-if="loading">
                <p class="loading">
                <h1>loading</h1>
                </p>
            </div>
            <MealCard v-else :meals="meals"></MealCard>
        </div>
    </main>

</template>
    
<script>
import axios from "axios"
import MealCard from "../components/MealCard.vue"
export default {
    mounted() {
        setTimeout(this.checkBox, 2000);
    },
    data() {
        return {
            search: "",
            loading: false,
            meals: []
        };
    },
    methods: {
        fetchData() {
            this.loading = true
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.search}`)
                .then(res => {
                    this.loading = false
                    this.meals = res.data.meals;
                    console.log(res.data);
                    if (this.meals == null) {

                    }
                }).catch(err => console.log(err));

        }
    },
    created() {
        let items = [
            "chicken", "cake", "b", "fry",
            "c", "d", "e", "f", "g", "h", "fish", "pie"
        ]
        var item = items[Math.floor(Math.random() * items.length)];
        console.log(item);
        this.loading = true
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
            .then(res => {
                this.loading = false
                this.meals = res.data.meals;

            })
            .catch(err => console.log(err));
    },
    components: { MealCard }
}
</script>

<style scoped>
.search {
    width: 20rem;
    height: 2rem;
    margin: 30px 10px;
    appearance: none;
    background-color: transparent;
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 75%;
    will-change: transform;
}

.mealButton {
    height: 2rem;
    font-weight: 600;
}
.loading {
    display: grid;
    place-content: center;
}

input:focus {
    outline: 1px solid #669;
}
</style>