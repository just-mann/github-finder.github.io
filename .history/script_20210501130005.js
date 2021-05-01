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
                        <div class="well">
                            <div class="row">
                                <div class="col-md-7">
                                    <strong>${repo.name}</strong>: ${repo.description}
                                </div>
                                <div class="col-md-3">
                                    <span class="badge badge-primary">Forks: ${repo.fork_count}</span>
                                    <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                                    <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                                </div>
                                <div class="col-md-2">
                                    <a href=${repo.html_url} target='_blank' class="btn btn-secondary">Repo Page</a>
                                </div>
                            </div>
                        </div>
                    `)
                })
            })
            $('#profile').html(`
                <div class="panel-panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h3>${user.name}</h3>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                                <div class="col-md-3">
                                    <img src=${user.avatar_url} alt="userImg" class="thumbnail avatar"/>
                                    <a href=${user.html_url} target='_blank' class="btn btn-success btn-block my-2">View Profile</a>
                                </div>
                                <div class="col-md-9">
                                    <span class="label label-default bg-dark text-light p-1 px-2 my-2">Public Repos: ${user.public_repos}</span>
                                    <span class="label label-default bg-danger text-light p-1 px-2 my-2">Public Gists: ${user.public_gists}</span>
                                    <span class="label label-success bg-success text-light p-1 px-2 my-2">Followers: ${user.followers}</span>
                                    <span class="label label-info bg-info text-light p-1 px-2 my-2">Following: ${user.following}</span>
                                    <br/><br/>
                                    <ul class="list-group">
                                        <li class="list-group-item">${user.company}</li>
                                        <li class="list-group-item">${user.blog}</li>
                                        <li class="list-group-item">${user.location}</li>
                                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            `)
        })
    })
});