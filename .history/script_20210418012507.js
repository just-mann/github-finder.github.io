console.log('Script works!!!');


$(() => {
    console.log('jquery works');
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            url: `https://api.github.com/users/`+username,
            data: {
                client_id: 'a84e4d99766578be9ef4',
                client_secret: 'feb5558f74d27517ae4b4611495e86cc8f9309b5'
            }
        }).done((user) => {
            $('#profile').html(`
                <div className="panel-panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                            <h3>${user.name}</h3>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img src=${user.avatar_url} alt="u" className="thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});