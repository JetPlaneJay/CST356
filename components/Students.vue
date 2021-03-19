<template>
    <div>
        <h2 class='section-heading'>Students</h2>
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" v-bind:key="student">
                    <td>{{ student.student_id }}</td>
                    <td>{{ student.email_address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Vue from 'vue';

    export default {
        name: 'Students',


        data () {
            return {
                students: [],
                apiServer: process.env.VUE_APP_API_SERVER
            }
        },
    methods:{
     getStudents: function() {
        let url = `http://${this.apiServer}/api/student`;
                Vue.axios.get(url).then(
                    (response) => {
                        this.students = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
    }
    },
    
                mounted() {
                    this.getStudents();
                    this.operation = 'list';
                }
    }
   
</script>

<style scoped>
    table, th, td {
        padding: 50px;
        border: 25px solid purple; 
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
    }
</style>
