import http from "node:http";
import { AsyncLocalStorage, AsyncResource } from "node:async_hooks";

const asynclocalstorage = new AsyncLocalStorage();

const loginWithId = (msg) => {
  const id = asynclocalstorage.getStore();
  console.log(`${id !== undefined ? id : "-"}`, msg);
};

let idSeq = 0;
http
  .createServer((req, res) => {
    asynclocalstorage.run(idSeq++, () => {
      loginWithId("start");

      setImmediate(() => {
        loginWithId("finish");
        res.end();
      });
    });
  })
  .listen(8080);

http.get("http://localhost:8080");
http.get("http://localhost:8080");
http.get("http://localhost:8080");
http.get("http://localhost:8080");
