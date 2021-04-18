// console.log('Script works!!!');

// var dogs = {
//     Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
// };
 
// console.log(dogs.Fido);


// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// console.log(testObj);


$(() => {
    
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;
        $.ajax({
            url: `https://api.github.com/users/`+username,
            data: {
                client_id: 'a84e4d99766578be9ef4',
                client_secret: '0b7122e1b593e3d5c8035fcdacc4c0b85d75b1f4'
            }
        }).done((user) => {
            $.ajax({
                url: `https://api.github.com/users/`+username+'/repos',
                data: {
                     client_id: 'a84e4d99766578be9ef4',
                     client_secret: '0b7122e1b593e3d5c8035fcdacc4c0b85d75b1f4',
                     sort: 'created: asc',
                     per_page: 5
                }
            }).done((repos) => {
                $.each(repos, (index, repo) => {
                    $('#repo').append(`
                        <div c="well">
                            <div c="row">
                                <div c="col-md-7">
                                    <strong>${repo.name}</strong>: ${repo.description}
                                </div>
                                <div c="col-md-3">
                                    <span c="label label-default">Forks: ${repo.fork_count}</span>
                                    <span c="label label-primary">Watchers: ${repo.watchers_count}</span>
                                    <span c="label label-success">Stars: ${repo.stargazers_count}</span>
                                </div>
                                <div c="col-md-2">
                                    <a href=${repo.html_url} target='_blank' c="btn btn-default">Repo Page</a>
                                </div>
                            </div>
                        </div>
                    `)
                })
            })
            $('#profile').html(`
                <div c="panel-panel-default">
                    <div c="panel-heading">
                        <div c="panel-title">
                            <h3>Name: ${user.name}</h3>
                        </div>
                    </div>
                    <div c="panel-body">
                        <div c="col-md-3">
                            <img src=${user.avatar_url} alt="userImg" c="thumbnail avatar"/>
                            <a target='_blank' c="btn btn-primary btn-block">View Profile</a>
                        </div>
                        <div c="col-md-9">
                            <span c="label label-default">Public Repos: ${user.public_repos}</span>
                            <span c="label label-primary">Public Gists: ${user.public_gists}</span>
                            <span c="label label-success">Followers: ${user.followers}</span>
                            <span c="label label-info">Following: ${user.following}</span>
                            <br/><br/>
                            <ul c="list-group">
                                <li c="list-group-item">${user.company}</li>
                                <li c="list-group-item">${user.blog}</li>
                                <li c="list-group-item">${user.location}</li>
                                <li c="list-group-item">${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});