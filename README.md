# Node v8.9.4 Heapdump SIGILL in Debug

An odd bug in Node or V8 causes heapdumping to fail in Debug builds. In Release, this appears to cause a spurious
segfault that anecdotally manifests more often with a larger heap.

Tracking in https://github.com/nodejs/node/issues/18223.

To reproduce:

```bash
# Compile Node v8.9.4 in Debug mode
git clone git@github.com:nodejs/node.git
cd node
git checkout v8.9.4
./configure --debug; make -j8

# Clone & run this project with that build
cd ..
git clone git@github.com:STRML/lodash-heapdump-sigill.git
cd lodash-heapdump-sigill
../node/out/Debug/node index.js
```
