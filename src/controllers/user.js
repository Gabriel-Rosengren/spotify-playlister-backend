import axios from 'axios'

// Here we send a GET request to spotify, requesting a users profile details.
// If the request is successful, we return the users details to the client.

export const getUserProfile = (req, res) => {
  console.log('cookies', req.cookies)
  const access_token = req.cookies.access_token
  if(!access_token) {
    return res.status(400).send({ error: 'Missing fields in request body.'})
  }

  axios.get('https://api.spotify.com/v1/me', {
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
 