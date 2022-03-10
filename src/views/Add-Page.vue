<template>
    <div class="Container">
        <h2 id="Add-Head">Add The New Book</h2>
        <div id="Form-Section">
            <input v-model="BookAddList.BookName" class="Add-İnputs" placeholder="Book Name" type="text" name="Book-N">
            <input v-model="BookAddList.WriterName" class="Add-İnputs" placeholder="Writer Name" type="text" name="Write-N">
            <input v-model="BookAddList.Description" class="Add-İnputs" placeholder="Description" type="text" name="Description">
            <select v-model="BookAddList.BookType" class="Add-İnputs Book-Opt" id="Add-Select" name="Book-T">
                <option :disabled="index === 0" v-for="(book,index) in BookTypes" :key="index" class="Book-Opt" :value="book.label" >{{ book.label }}</option>
            </select>
            <input v-model="BookAddList.MentionBook" class="Add-İnputs" placeholder="Mention The Book" name="Mention-B"/>  
        </div>
        <div id="Button-Section">
            <button @click="SaveTheBook" id="Submit-Book" type="submit">Save the Book</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            BookTypes : [
                { value: 0, label: 'Select' },
                { value: 1, label: 'Fantasy' },
                { value: 2, label: 'Sci-Fi' },
                { value: 3, label: 'Mystery' },
                { value: 4, label: 'Thriller' },
                { value: 5, label: 'Romance' },
                { value: 6, label: 'Westerns' },
            ],
            BookAddList : {
                BookName : "",
                WriterName : "" , 
                Description : "" , 
                BookType : "Select",
                MentionBook : "" ,
                DataDate : "",
                Completed : true,
            }
            
        }
    },
    methods : {
        SaveTheBook : async function() {
            if(this.BookAddList.BookName === ""/*this.BookAddList.BookName.length > 19*/) {
                alert('Please Fill İn The BookName');
            } else if(this.BookAddList.WriterName === "") {
                alert('Please Fill İn The WriterName');
            } else if(this.BookAddList.Description === "") {
                alert('Please Fill İn The Description');
            } else if(this.BookAddList.BookType === "Select") {
                alert('Please Enter The Book Type');
            } else if(this.BookAddList.MentionBook === "") {
                alert('Please Fill İn The MentionBook');
            } else {
                this.BookAddList.DataDate = new Date();
                const PostData = await axios.post('http://localhost:3000/BookData', this.BookAddList, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                 if (PostData.status === 201) {
                    this.$router.push({ name : 'Book-Page'});
                } else {
                    this.BookAddList.BookName = "";
                    this.BookAddList.WriterName = "";
                    this.BookAddList.Description = "";
                    this.BookAddList.BookType = "Select";
                    this.BookAddList.MentionBook = "";
                    this.BookAddList.DataDate = "";
                }
            }
            
        }
    },
}
</script>