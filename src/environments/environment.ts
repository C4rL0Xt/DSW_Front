export const environment = {
  production: false,
  authorize_uri: 'http://localhost:8100/oauth2/authorize?',
  client_id: 'client',
  redirect_uri: 'http://localhost:4200/authorized',
  scope: 'openid',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  code_challenge: 'MzyGln8VXNYrQHKO4YRTqIk8hfREl1j8-Rkh1mJX0TQ',
  code_verifier: 'DAFMdMMeGHt3UPsL31eaZ1vsbwbvc5rfc9Mvz3iYMQM',
  token_url: 'http://localhost:8100/oauth2/token',
  grant_type: 'authorization_code',
  resource_url: 'http://localhost:8080/resource/;'
};
