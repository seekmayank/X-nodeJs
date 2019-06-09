LM-SJC-11001988:expressDemo mayangupta$ npm init --yes
Wrote to /Users/mayangupta/Desktop/1.Project/nodejs/expressDemo/package.json:

{
  "name": "expressDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}




   ╭───────────────────────────────────────────────────────────────╮
   │                                                               │
   │       New minor version of npm available! 6.4.1 → 6.9.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.9.0   │
   │               Run npm install -g npm to update!               │
   │                                                               │
   ╰───────────────────────────────────────────────────────────────╯

LM-SJC-11001988:expressDemo mayangupta$ npm i express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN expressDemo@1.0.0 No repository field.

+ express@4.16.4
added 48 packages from 36 contributors and audited 121 packages in 4.887s
found 0 vulnerabilities



   ╭───────────────────────────────────────────────────────────────╮
   │                                                               │
   │       New minor version of npm available! 6.4.1 → 6.9.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.9.0   │
   │               Run npm install -g npm to update!               │
   │                                                               │
   ╰───────────────────────────────────────────────────────────────╯

LM-SJC-11001988:expressDemo mayangupta$ sudo npm i -g nodemon
Password:
/usr/local/bin/nodemon -> /usr/local/lib/node_modules/nodemon/bin/nodemon.js

> fsevents@1.2.8 install /usr/local/lib/node_modules/nodemon/node_modules/fsevents
> node install

node-pre-gyp WARN Using needle for node-pre-gyp https download 
node-pre-gyp WARN Pre-built binaries not installable for fsevents@1.2.8 and node@10.15.3 (node-v64 ABI, unknown) (falling back to source compile with node-gyp) 
node-pre-gyp WARN Hit error EACCES: permission denied, mkdir '/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib' 
gyp ERR! configure error 
gyp ERR! stack Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/nodemon/node_modules/fsevents/build'
gyp ERR! System Darwin 18.5.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--module=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" "--module_name=fse" "--module_path=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64" "--napi_version=3" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v64"
gyp ERR! cwd /usr/local/lib/node_modules/nodemon/node_modules/fsevents
gyp ERR! node -v v10.15.3
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok 
node-pre-gyp ERR! build error 
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node --module_name=fse --module_path=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64 --napi_version=3 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v64' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/nodemon/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:189:13)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:970:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)
node-pre-gyp ERR! System Darwin 18.5.0
node-pre-gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/nodemon/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /usr/local/lib/node_modules/nodemon/node_modules/fsevents
node-pre-gyp ERR! node -v v10.15.3
node-pre-gyp ERR! node-pre-gyp -v v0.12.0
node-pre-gyp ERR! not ok 
Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node --module_name=fse --module_path=/usr/local/lib/node_modules/nodemon/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64 --napi_version=3 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v64' (1)

> nodemon@1.18.11 postinstall /usr/local/lib/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.8 (node_modules/nodemon/node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.8 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ nodemon@1.18.11
added 223 packages from 129 contributors in 7.482s
