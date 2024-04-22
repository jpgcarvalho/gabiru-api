import { App } from "./app";

new App().server.listen(process.env.PORT, () =>
  console.log(`Server iniciado na porta: ${process.env.PORT}`),
);
