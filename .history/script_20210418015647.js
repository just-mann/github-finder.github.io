console.log('Script works!!!');


$(() => {
    
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            url: `https://api.github.com/users/`+username,
            // data: {
            //     client_id: 'a84e4d99766578be9ef4',
            //     client_secret: 'f323a21713901a26904f182192b86faa581a3b43'
            // }
        }).done((user) => {
            $('#profile').html(`
                <div className="panel-panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                            <h3>${user.name}</h3>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <img src=${user.avatar_url} alt="userImg" className="thumbnail"/>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});