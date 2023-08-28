import axios from 'axios'

// Here we send a GET request to spotify, requesting a number of the users playlists.
// If the request is successful, we return the playlists to the client.

export const getAllPlaylists = (req, res) => {
  const access_token = req.cookies.access_token
  const { user_id, limit, offset } = req.body

  if(access_token === undefined || user_id === undefined || limit === undefined || offset === undefined) {
    return res.status(400).send({ error: 'Missing fields in request body.'})
  }

  const queryParams = new URLSearchParams({
    limit,
    offset
  }).toString()

  axios.get('https://api.spotify.com/v1/users/' + user_id + '/playlists?' + queryParams, {
    'headers': {
      'Authorization': 'Bearer ' + access_token
    }
  })
  .then(response => {
    return res.send(response.data)
  })
  .catch(error => {
    return res.status(500).send({ error: error.response.data.error })
  })
}
 