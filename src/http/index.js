import axios from 'axios'
import config from '../config'
axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('access_token');
axios.defaults.headers.common['Content-Type'] = 'application/json';


const query = {};


// NEED CORS server proxy
query.refresh = () =>{
    return new Promise((resolve, reject) => {

        let client_id = config.client_id; // Your client id
        let client_secret = config.client_secret; // Your secret
        var encodedData = window.btoa(`${client_id}:${client_secret}`); // encode a string
        axios.post(config.ipProxyCors, {
            grant_type: 'authorization_code',
            code: sessionStorage.getItem("access_token"),
            redirect_uri:config.redirect_uri
        }, {headers: {'Authorization': encodedData}}
            )
            .then(function (response) {
                //console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                //console.log(error);
                reject(error);
            });
    });
}

query.auth = () => {
    return new Promise((resolve, reject) => {
        axios.get(`
        https://accounts.spotify.com/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&scope=user-read-private%20user-read-email&response_type=token
         `
        )
            .then(function (response) {
                //console.log(response);
                query.me().then((res) => resolve(res))
            })
            .catch(function (error) {
                //console.log(error);
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
                    //console.log(error.response);
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
                //console.log(error.response);
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
                //console.log(error.response);
                reject(error)
            });
    })
}

export default query