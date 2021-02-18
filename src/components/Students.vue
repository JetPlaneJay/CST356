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
                    <td>{{ student.studentName }}</td>
                    <td>{{ student.studentID }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Students',
        mounted() {
            this.students = getStudents();
        },
        data () {
            return {
                students: []
            }
        }
    }
    function getStudents() {
        return JSON.parse(students);
    }
    var students = '[{"studentID": "Rachel Mendez", "studentName": "11111"}, {"studentID": "Brian Rose", "studentName": "111111"}]';
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