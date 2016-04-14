<style>
</style>

<template>
    <div class="well col-md-4 offset-md-4">
        <alert :classes="'alert error'" :data-list="formErrors" :trigger-alert.sync="hasErrors"></alert>

        <form>
            <div class="field">
                <input :class="{error: formErrors.email}" type="email" placeholder="email" v-model="email">
            </div>
            <div class="field">
                <input :class="{error: formErrors.password}" type="password" placeholder="password" v-model="password">
            </div>
            <div class="col-md-4">
                <div class="accent2-button" @click="login">Submit</div>
            </div>
        </form>
    </div>
</template>

<script>
    import router from '../main';
    import validation from '../js/libs/inputValidation';
    import Alert from '../components/alert';

    function validateForm (email, password) {
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

        if (password === '' || !password) {
            errors.password = {
                message: 'Password is required'
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
                formErrors: {},
                hasErrors: false
            };
        },
        methods: {
            login: function() {
                this.formErrors = validateForm(this.email, this.password);
                if (Object.keys(this.formErrors).length === 0) {
                    this.hasErrors = false;
                } else {
                    this.hasErrors = true;
                }

                if (!this.hasErrors) {
                    this.$http.post('http://development.local:4000/App/User/', {
                            'Action': 'LogIn',
                            'Email': this.email,
                            'Password': this.password
                        },
                        {
                            emulateJSON: true
                        })
                        .then((response) => {
                            // get UserToken
                            // set to window.localStorage.userToken
                            if (response.data.UserID === '-1' || response.data.UserToken === '') {
                                this.formErrors = {
                                    login: {
                                        message: 'Invalid email and password combination'
                                    }
                                };
                                this.hasErrors = true;
                            } else {
                                delete this.formErrors.login;
                                this.hasErrors = false;
                                // set token
                                window.localStorage.userToken = response.data.UserToken;
                                // go to user's dashboard
                                router.go({name: 'dash'});
                            }

                            // handle 401
                        },
                        (err) => {
                            console.log(err);
                        });
                }
            }
        }
    };
</script>
