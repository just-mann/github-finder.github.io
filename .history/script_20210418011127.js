console.log('Script works!!!');


$(() => {
    console.log('jquery works');
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            url: `https://api.github.com/users`+username,
            data: {
                client_id: 'a84e4d99766578be9ef4',
                client_secret: 'feb5558f74d27517ae4b4611495e86cc8f9309b5'
            }
        }).done((user) => {
            $('#profile').html(`
                <div className="panel-panel-default">
                    .panel-headi
                </div>
            `)
        })
    })
});