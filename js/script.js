"use strict";

// VUEJS APP
const {createApp} = Vue;                                             

createApp({
        data(){
            return{
                new_task: '',
                title: 'Vue Toboolis',
                items: [
                    {
                        text: 'Aggiungi un task',
                        done: false,
                        edit_disabled: false
                    },
                    {
                        text: 'Pulire la camera',
                        done: true,
                        edit_disabled: false
                    },
                    {
                        text: 'Fare la spesa',
                        done: false,
                        edit_disabled: false
                    },
                ]
            }     
        },

        methods:{

            changeStatus(index){
                //this.items[index].done = !this.items[index].done;
                if ( this.items[index].done ) {
                    this.items[index].done = false;
                }
                else {
                    this.items[index].done = true;
                }
            },

            deleteTask(index){
                this.items.splice(index,1);
            },

            addTask(){
                let obj = {
                    text: this.new_task,
                    done: false
                }
                this.items.push(obj);
                this.new_task = '';
            },

            editTask(index){     
                if ( this.items[index].edit_disabled ) {
                    this.items[index].edit_disabled = false;
                }
                else {
                    this.items[index].edit_disabled = true;
                }
                console.log(this.items[index].edit_disabled)
            }
        }

}).mount('#app');