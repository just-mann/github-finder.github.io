console.log('Script works!!!');


$(() => {
    
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        fetch(`https://api.github.com/users`+username)
            .then()
    })
});