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
                        text: 'Fare la spesa',
                        done: false
                    },

                    {
                        text: 'Pulire la camera',
                        done: true
                    },

                    {
                        text: 'Fare la spesa',
                        done: false
                    },

                    {
                        text: 'Pulire la camera',
                        done: true
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
            }
        }

}).mount('#app');