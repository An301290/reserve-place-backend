import { v4 } from "uuid";

async function handler(event: any, context: any) {
  return {
    statusCode: 200,
    body: "Hello from Lambda ! ts" + v4,
  };
}

export { handler };
