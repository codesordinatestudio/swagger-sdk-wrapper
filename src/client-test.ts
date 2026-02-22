import { SdkClient } from "./index";
import { Api } from "./sample_schema";

const client = new SdkClient(Api, {
  baseUrl: "http://localhost:5900",
});

(async () => {
  const { data, error } = await client.todos.todosList();
  console.log("Todos List:", { data, error });
})();
