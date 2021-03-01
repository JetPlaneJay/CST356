<template>
    <div>
        <h1>Student Registration</h1>
        <form>

            <div class="form-entry">
                Name: <input id='login-name' type="text" v-model="loginName"/>
                <span id='login-name-error' v-bind:style="{visibility: loginNameErrorVisibility}">Please enter your name.</span>
            </div>

            <div class="form-entry">
                Login ID: <input id='login-ID' type="password" v-model="loginID"/>
                <span id='login-ID-error' style='visibility:hidden' v-bind:style="{visibility: loginIDErrorVisibility}">Please enter your ID.</span>
            </div>

            <div class="form-entry">
                <input type="button" value="Register" v-on:click="submitRegistration()"/>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        methods: {
            submitRegistration: function() {
                this.loginNameErrorVisibility = 'hidden';
                this.loginIDErrorVisibility = 'hidden';
                if (this.loginName.length == 0) {
                    this.loginNameErrorVisibility = 'visible';
                    return;
                }
                if (this.loginID.length == 0) {
                    this.loginIDErrorVisibility = 'visible';
                    return;
                }

            }
        },
        data () {
            return {
                loginName: '',
                loginID: '',
                loginNameErrorVisibility: 'hidden',
                loginIDErrorVisibility: 'hidden'
            }
        }
    }
</script>

<style scoped>
    form {
        background-color: white;
        padding: 10px;
    }
    .form-entry {
        padding: 10px;
        background-color: lightgray;
    }
</style>