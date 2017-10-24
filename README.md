# elite2-proxy-util
Proxy that adds the gateway token for easier dev use.

Add the following environment variables, optionally in .env:

* NOMIS_GW_TOKEN - your gateway token
* NOMIS_GW_KEY - your private key, base64 encoded

* yarn start
* Use a REST client

Calls to

`http://localhost:3002/elite/some/real/path`

will have the gateway token header added and be proxied to

`https://realserver/some/real/path`

Target host can be set in config.js.

Port can be set via environment variables.

Path re-write rules can be sett in the proxy options in app.js.

eg

POST http://localhost:3002/elite/elite2api/users/login
with header Content-type=application/json
wih body {"username":"use yours","password":"use yours"}

then for subsequent requests use

header {"elite-authorization":"Bearer token.from.login"}
