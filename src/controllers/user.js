import axios from 'axios'

// Here we send a GET request to spotify, requesting a users profile details.
// If the request is successful, we return the users details to the client.

export const getUserProfile = (req, res) => {
  const access_token = req.body.access_token
  if(!access_token) {
    res.status(400).send({ error: 'Missing fields in request body.'})
  }

  axios.get('https://api.spotify.com/v1/me', {
    'headers': {
      'Authorization': 'Bearer' + access_token
    }
  })
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    res.status(error.status).send({ error })
  })
}
 