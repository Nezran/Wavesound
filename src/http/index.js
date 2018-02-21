import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('access_token');
axios.defaults.headers.common['Content-Type'] = 'application/json';


/*
request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
            url: 'https://api.spotify.com/v1/users/jmperezperez',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        };
        request.get(options, function(error, response, body) {
            console.log(body);
        });
    }
});
*/
const query = {};


// NEED CORS server proxy
query.refresh = () =>{
    return new Promise((resolve, reject) => {

        let client_id = 'e9cf784964ce4b1985972061a744d5bc'; // Your client id
        let client_secret = '3858dfb83e194bc48086873d346edc9e'; // Your secret
        var encodedData = window.btoa(`${client_id}:${client_secret}`); // encode a string
        console.log('refresh')
        axios.post('http://localhost:2000/api', {
            grant_type: 'authorization_code',
            code: sessionStorage.getItem("access_token"),
            redirect_uri:'http://localhost:3000/auth/callback'
        }, {headers: {'Authorization': encodedData}}
            )
            .then(function (response) {
                console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
}

query.auth = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://accounts.spotify.com/authorize?client_id=e9cf784964ce4b1985972061a744d5bc&redirect_uri=http://localhost:3000/auth/callback&scope=user-read-private%20user-read-email&response_type=token&state=123')
            .then(function (response) {
                console.log(response);
                query.me().then((res) => resolve(res))
            })
            .catch(function (error) {
                console.log(error);
                reject()
            });

    })

};


query.searchArtists = (q,t = 'artist') => {
    console.log(q,t)
    return new Promise((resolve, reject) => {
        if(q.length > 2){
            axios.get(`https://api.spotify.com/v1/search?q=${q}&type=${t}`)
                .then(function (response) {
                    //console.log(response);
                    resolve(response);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error)
                });
        }else{
            //res.data.artists.items
            resolve({data:{artists:{items:[]}}})
        }


    })
}

query.searchArtist = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.spotify.com/v1/artists/${id}`)
            .then(function (response) {
                //console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                console.log(error.response);
                reject(error)
            });
    })
}

query.searchArtistAlbum = (id, album_type='album') => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=50&album_type=${album_type}`)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error.response);
                reject(error)
            });
    })
}

export default query