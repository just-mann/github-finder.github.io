console.log('Script works!!!');

var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
 
console.log(dogs.Fido);


var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

console.log(testObj);



$(() => {
    
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            // url: `https://api.github.com/users/`+username,
            // data: {
            //     client_id: 'a84e4d99766578be9ef4',
            //     client_secret: '0b7122e1b593e3d5c8035fcdacc4c0b85d75b1f4'
            // }
        }).done((user) => {
            $.ajax({
                url: `https://api.github.com/users/`+username+'/repos',
                // data: {
                //     client_id: 'a84e4d99766578be9ef4',
                //     client_secret: '0b7122e1b593e3d5c8035fcdacc4c0b85d75b1f4'
                // }
            }).done((repos) => {
                $.each(repos, (index, repo) => {
                    $('#repo').append(`
                        <div className="well">
                            <div className="row">
                                <div className="col-md-7">
                                    <s
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    `)
                })
            })
            $('#profile').html(`
                <div className="panel-panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                            <h3>Name: ${user.name}</h3>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <img src=${user.avatar_url} alt="userImg" className="thumbnail"/>
                            <a target='_blank' className="btn btn-primary btn-block">View Profile</a>
                        </div>
                        <div className="col-md-9">
                            <span className="label label-default">Public Repos: ${user.public_repos}</span>
                            <span className="label label-primary">Public Gists: ${user.public_gists}</span>
                            <span className="label label-success">Followers: ${user.followers}</span>
                            <span className="label label-info">Following: ${user.following}</span>
                            <br/><br/>
                            <ul className="list-group">
                                <li className="list-group-item">${user.company}</li>
                                <li className="list-group-item">${user.blog}</li>
                                <li className="list-group-item">${user.location}</li>
                                <li className="list-group-item">${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});