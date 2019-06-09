LM-SJC-11001988:nodejs mayangupta$ node --version
v8.9.4
LM-SJC-11001988:nodejs mayangupta$ npm --version
5.6.0
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ pwd
/Users/mayangupta/Desktop/1.Project/nodejs
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ ls
SampleApp	expressApp	expressJadeApp	renderHtml	renderJade	routing		tdqalert	tdqaudit
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ 
LM-SJC-11001988:nodejs mayangupta$ cd SampleAPp
LM-SJC-11001988:SampleAPp mayangupta$ ls
helloWorld.js
LM-SJC-11001988:SampleAPp mayangupta$ 
LM-SJC-11001988:SampleAPp mayangupta$ 
LM-SJC-11001988:SampleAPp mayangupta$ cd ../SampleApp
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 8
-rw-r--r--@ 1 mayangupta  110263682  26 Apr  9 13:37 helloWorld.js
LM-SJC-11001988:SampleApp mayangupta$ touch index.js
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 8
-rw-r--r--@ 1 mayangupta  110263682  26 Apr  9 13:37 helloWorld.js
-rw-r--r--  1 mayangupta  110263682   0 Apr  9 13:38 index.js
LM-SJC-11001988:SampleApp mayangupta$ pwd
/Users/mayangupta/Desktop/1.Project/nodejs/SampleApp
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 8
-rw-r--r--@ 1 mayangupta  110263682  26 Apr  9 13:37 helloWorld.js
-rw-r--r--  1 mayangupta  110263682   0 Apr  9 13:38 index.js
LM-SJC-11001988:SampleApp mayangupta$ cp helloWorld.js index.js
LM-SJC-11001988:SampleApp mayangupta$ node index.js
Hello World
LM-SJC-11001988:SampleApp mayangupta$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (sampleapp) My Express Web Sample App
Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
package name: (sampleapp) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/mayangupta/Desktop/1.Project/nodejs/SampleApp/package.json:

{
  "name": "sampleapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 24
-rw-r--r--@ 1 mayangupta  110263682   26 Apr  9 13:37 helloWorld.js
-rw-r--r--@ 1 mayangupta  110263682   26 Apr  9 21:56 index.js
-rw-r--r--  1 mayangupta  110263682  205 Apr  9 21:58 package.json
LM-SJC-11001988:SampleApp mayangupta$ cat index.js
console.log("Hello World")LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ cat package.json
{
  "name": "sampleapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
LM-SJC-11001988:SampleApp mayangupta$ npm install express --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN sampleapp@1.0.0 No description
npm WARN sampleapp@1.0.0 No repository field.

+ express@4.16.4
added 48 packages in 3.756s
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 56
-rw-r--r--@  1 mayangupta  110263682     26 Apr  9 13:37 helloWorld.js
-rw-r--r--@  1 mayangupta  110263682     26 Apr  9 21:56 index.js
drwxr-xr-x  51 mayangupta  110263682   1632 Apr  9 22:05 node_modules
-rw-r--r--   1 mayangupta  110263682    255 Apr  9 22:05 package.json
-rw-r--r--   1 mayangupta  110263682  13041 Apr  9 22:05 package-lock.json
LM-SJC-11001988:SampleApp mayangupta$ cat package.json
{
  "name": "sampleapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4"
  }
}
LM-SJC-11001988:SampleApp mayangupta$ node index.js
Hello World
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ node index.js
App Started
^C
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ yarn --version
-sh: yarn: command not found
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ curl -o- -L https://yarnpkg.com/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  7041    0  7041    0     0  63526      0 --:--:-- --:--:-- --:--:-- 64009
Installing Yarn!
> Downloading tarball...

[1/2]: https://yarnpkg.com/latest.tar.gz --> /var/folders/q2/b5s7h1y90kg5cjkdm8xrnnkr394zc2/T/yarn.tar.gz.XXXXXXXXXX.IoB7Gw4j
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    93  100    93    0     0    867      0 --:--:-- --:--:-- --:--:--   869
100   609    0   609    0     0   1500      0 --:--:-- --:--:-- --:--:--  1500
  1 1142k    1 16360    0     0  16798      0  0:01:09 --:--:--  0:01:09 16798
100 1142k  100 1142k    0     0   314k      0  0:00:03  0:00:03 --:--:--  423k

[2/2]: https://yarnpkg.com/latest.tar.gz.asc --> /var/folders/q2/b5s7h1y90kg5cjkdm8xrnnkr394zc2/T/yarn.tar.gz.XXXXXXXXXX.IoB7Gw4j.asc
100    97  100    97    0     0   1418      0 --:--:-- --:--:-- --:--:--  1418
100   613    0   613    0     0   2341      0 --:--:-- --:--:-- --:--:--  2341
100   832  100   832    0     0   2256      0 --:--:-- --:--:-- --:--:--  135k
> WARNING: GPG is not installed, integrity can not be verified!
> Extracting to ~/.yarn...
> Adding to $PATH...
> We've added the following to your /Users/mayangupta/.profile
> If this isn't the profile of your current shell then please add the following to your correct profile:
   
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

> Successfully installed Yarn 1.15.2! Please open another terminal where the `yarn` command will now be available.
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ 
LM-SJC-11001988:SampleApp mayangupta$ yarn --version
-sh: yarn: command not found
LM-SJC-11001988:SampleApp mayangupta$ echo $PATH
/Library/Application Support/teradata/client/15.10/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/maven_3.5/bin:/Library/scala-2.11.5/bin:/Library/sbt/bin:/Library/spark-2.3.1-bin-hadoop2.7/bin:/Library/Frameworks/Python.framework/Versions/3.6/bin:/Library/elastic/kibana-5.6.2-darwin-x86_64/bin:/Library/elastic/elasticsearch-5.6.2/bin:/Library/elastic/logstash-5.6.2/bin
LM-SJC-11001988:SampleApp mayangupta$ export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
LM-SJC-11001988:SampleApp mayangupta$ yarn --version
1.15.2
LM-SJC-11001988:SampleApp mayangupta$ 


LM-SJC-11001988:SampleApp mayangupta$ rm -rf node_modules/ package-lock.json
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 40
-rw-r--r--  1 mayangupta  110263682   255 Apr  9 22:05 package.json
-rw-r--r--@ 1 mayangupta  110263682   189 Apr  9 22:15 index.js
-rw-r--r--@ 1 mayangupta  110263682    29 Apr  9 22:15 helloWorld.js
-rw-r--r--@ 1 mayangupta  110263682  7661 Apr  9 22:26 readme.txt

LM-SJC-11001988:SampleApp mayangupta$ yarn
yarn install v1.15.2
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 1.77s.
LM-SJC-11001988:SampleApp mayangupta$ ls -lrt
total 72
-rw-r--r--   1 mayangupta  110263682    255 Apr  9 22:05 package.json
-rw-r--r--@  1 mayangupta  110263682    189 Apr  9 22:15 index.js
-rw-r--r--@  1 mayangupta  110263682     29 Apr  9 22:15 helloWorld.js
-rw-r--r--@  1 mayangupta  110263682   8064 Apr 11 09:38 readme.txt
drwxr-xr-x  52 mayangupta  110263682   1664 Apr 11 09:38 node_modules
-rw-r--r--   1 mayangupta  110263682  13016 Apr 11 09:38 yarn.lock

LM-SJC-11001988:SampleApp mayangupta$ node index.js
App Started


