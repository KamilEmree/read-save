<template>
    <div class="Container">
        <h2 id="List-Head">Book Lists</h2>
        <div id="Card-List">
            <ul id="Card-Content">
                <div v-if="this.ResData && this.ResData.length > 0">
                    <li v-for="book in this.ResData" :key="book" id="Card-İtem">
                        <div @mouseleave="book.completed = false" @mouseover="book.completed = true" id="Card-Left">
                            <div v-show="!book.completed" id="Card-Type">
                                {{ book.BookType }}
                            </div>
                            <div v-show="book.completed" id="`Card-Description`">
                                {{ book.Description }}
                            </div>
                        </div>
                        <div id="Card-Right">
                            <div id="Card-Headers">
                                <h2 id="Card-Title">
                                    {{ book.BookName}}
                                </h2>
                                <h3 id="Card-Writer">
                                    {{ book.WriterName }}
                                </h3>
                            </div>
                            <p id="Card-Mention">
                                {{ book.MentionBook }}
                            </p>
                            <div id="Card-Footer">
                                <p id="Card-Date">
                                    Save in {{ book.DataDate }}
                                </p>
                                <font-awesome-icon @click="DeleteToBook(book.id)" id="Card-İcon" :icon="['fas','trash']" />
                            </div>
                        </div>
                    </li>
                </div>
                <h3 v-else id="List-Empty">İt looks empty</h3>
            </ul>
        </div>

        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            ResData : null,
        }
    },
    methods : {
        DeleteToBook : async function(bookId) {
           if(confirm('Are You Sure You Want To Delete') === true) {
                const deleteReplay = await axios({
                    method: 'DELETE',
                    url: 'http://localhost:3000/BookData/' + bookId
                });
                if (deleteReplay.status === 200) {
                    this.refresh();
                    alert('SuccessFully Deleted')
                }
           } else {
               return false;
           }
        },
        refresh: async function () {
            var BookData = await axios.get('http://localhost:3000/BookData');
            this.ResData = BookData.data;
        },
    },
    created () {
        this.refresh();
    },
}
</script>