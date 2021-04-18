console.log('Script works!!!');


$(() => {
    console.log('jquery works');
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            url: `,
            data: {
                client_id: 'a84e4d99766578be9ef4',
                client_secret: '0b7122e1b593e3d5c8035fcdacc4c0b85d75b1f4'
            }
        }).done((user) => {
            $('#profile').html(`
                <div className="panel-panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                            <h3>Name: ${user.name}</h3>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});