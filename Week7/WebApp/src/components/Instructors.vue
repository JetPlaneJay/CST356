<template>
    <div>
        <h2 class='section-heading'>Instructors</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Initial</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="instructor in instructors" v-bind:key="instructor">
                    <td>{{ instructor.firstName }}</td>
                    <td>{{instructor.middleInitial}}
                    <td>{{ instructor.lastName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>


<script>
    export default {
        name: 'Instructors',
        mounted() {
            this.instructors = getInstructors();
        },
        data () {
            return {
                instructors: []
            }
        }
    }
    function getInstructors() {
        return JSON.parse(instructors);
    }
    var instructors = '[{"firstName": "Gerald", "middleInitial": "H", "lastName": "Adler"}, {"firstName": "Michael", "middleInitial": "M", "lastName": "Margarito"}, {"firstName": "Xi", "middleInitial": "V", "lastName": "Chu"}]';
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