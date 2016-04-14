export default {
    email: function (email) {
        if (email && email !== '') {
            return /(\w+)\@(\w+)\.[a-zA-Z]/g.test(email);
        } else {
            return 'empty';
        }
    },
    passwordsMatch: function (password, match) {
        if (password && match && password !== '' && match !== '') {
            return password === match;
        } else {
            return 'empty';
        }
    }
};
