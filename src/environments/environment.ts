export const environment = {
  production: false,
  authorize_uri: 'http://localhost:8100/oauth2/authorize?',
  client_id: 'client',
  redirect_uri: 'http://localhost:4200/authorized',
  scope: 'openid',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  //code_challenge: 'HoHpE-5ooPGF-FMtKjra9QYc1Ar-0SqKcBFfx6-xsqM',
  //code_verifier: 'vgrpHZBHIIxabLFsNarHqHbqWRk2yT10jbQ9kRJFI5x',
  token_url: 'http://localhost:8100/oauth2/token',
  grant_type: 'authorization_code',
  resource_url: 'http://localhost:8080/resource/',
  logout_url: 'http://localhost:8100/logout',
  secret_pkce: 'secret'
};
