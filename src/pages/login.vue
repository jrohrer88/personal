<style>
</style>

<template>
    <div class="message" v-show="hasErrors">
        <p v-for="error in formErrors">{{error.message}}</p>
    </div>
    <form @submit.prevent>
        <input :class="{error: formErrors.email}" type="text" placeholder="email" v-model="email">
        <input :class="{error: formErrors.password}" type="password" placeholder="password" v-model="password">
        <input type="submit" value="Submit" @click="login">
    </form>
</template>

<script>
    function validateForm (email, password) {
        let errors = {
        };

        if (!email) {
            errors.email = {
                message: 'Email is required'
            };
        } else {
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
                errors.email = {
                    message: 'Your email is in the wrong format'
                };
            } else {
                delete errors.email;
            }
        }

        if (password === '' || !password) {
            errors.password = {
                message: 'Password is require'
            };
        } else {
            delete errors.password;
        }
        return errors;
    }

    export default {
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
                    this.$http.post('/api/test', {
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
