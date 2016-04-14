<style>
</style>

<template>
    <div class="well col-md-4 offset-md-4">
        <alert :classes="'alert error'" :data-list="formErrors" :trigger-alert.sync="hasErrors"></alert>
        <alert :classes="'alert success'" :data-list="successMessage" :trigger-alert.sync="didSucceed"></alert>

        <form>
            <input :class="{error: formErrors.email}" type="email" placeholder="email" v-model="email">
            <input :class="{error: formErrors.password}" type="password" placeholder="password" v-model="password">
            <input :class="{error: formErrors.password}" type="password" placeholder="password" v-model="passwordVerify">
            <div class="col-md-4">
                <div class="accent2-button" @click="register">Submit</div>
            </div>
        </form>
    </div>
</template>

<script>
    import validation from '../js/libs/inputValidation';
    import Alert from '../components/alert';

    function validateForm (email, password, passwordVerify) {
        let errors = {};

        var validEmail = validation.email(email);
        if (validEmail === 'empty') {
            errors.email = {
                message: 'Email is required'
            };
        } else if (validEmail === false) {
            errors.email = {
                message: 'Your email is in the wrong format'
            };
        } else {
            delete errors.email;
        }

        var validPassword = validation.passwordsMatch(password, passwordVerify);
        if (validPassword === 'empty') {
            errors.password = {
                message: 'Password is required'
            };
        } else if (validPassword === false) {
            errors.password = {
                message: 'Passwords don\'t match'
            };
        } else {
            delete errors.password;
        }
        return errors;
    }

    export default {
        components: {
            Alert
        },
        data: function () {
            return {
                email: '',
                password: '',
                passwordVerify: '',
                formErrors: {},
                hasErrors: false,
                didSucceed: false,
                successMessage: {
                    created: {
                        message: 'You account was successfully created! An email has been sent to your inbox. Please use the provided link to verify your email.'
                    }
                }
            };
        },
        methods: {
            register: function() {
                this.formErrors = validateForm(this.email, this.password, this.passwordVerify);
                if (Object.keys(this.formErrors).length === 0) {
                    this.hasErrors = false;
                } else {
                    this.hasErrors = true;
                }

                if (!this.hasErrors) {
                    this.$http.post('http://development.local:4000/App/User/', {
                            'Action': 'Create',
                            'Email': this.email,
                            'Password': this.password
                        },
                        {
                            emulateJSON: true
                        })
                        .then((response) => {
                            console.log(response);
                            // get UserToken
                            // set to window.localStorage.userToken
                            if (response.data.Message === 'Created User') {
                                this.didSucceed = true;
                            } else {
                                this.formErrors = {
                                    message: 'Something went wrong. Please try again later.'
                                }
                                this.hasErrors = true;
                            }
                        },
                        (err) => {
                            console.log(err);
                        });
                }
            }
        }
    }
</script>
