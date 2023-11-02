"use strict";

// VUEJS APP
const {createApp} = Vue;                                             

createApp({
        data(){
            return{
                new_task: '',
                error_message: '',
                title: 'Vue Todolist',
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
            //funzione di cambiamento stato del task
            changeStatus(index){
                if ( this.items[index].done ) {
                    this.items[index].done = false;
                }
                else {
                    this.items[index].done = true;
                }
            },
            //funzione cancellazione task
            deleteTask(index){
                this.items.splice(index,1);
            },
            //funzione di aggiunta nuovo task
            addTask(){
                if (this.new_task.trim() === '') {
                    this.error_message = 'Il campo non può essere vuoto';
                    return;
                }
                if (this.new_task.length > 22) {
                    this.error_message = 'Il task non può superare i 22 caratteri';
                    return;
                }
                let obj = {
                    text: this.new_task,
                    done: false
                }
                this.items.push(obj);
                this.new_task = '';
                this.error_message = '';
            },
            //funzione di modifica del task
            editTask(index){     
                if (this.items[index].text.trim() === '') {
                    this.error_message = 'Il campo modificato non può essere vuoto';
                    return;
                }
                if (this.items[index].text.length > 22) {
                    this.error_message = 'Il task modificato non può superare i 22 caratteri';
                    return;
                }
                if ( this.items[index].edit_disabled ) {
                    this.items[index].edit_disabled = false;
                }
                else {
                    this.items[index].edit_disabled = true;
                }
            }
        }

}).mount('#app');