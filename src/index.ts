import * as grpc from "@grpc/grpc-js";
import { EchoRequest, EchoResponse } from "./generated/echo";
import { echoDefinition, IEcho } from "./generated/echo.grpc-server";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV || "development"}`,
  path: ".env",
});

const echoService: IEcho = {
  unaryEcho(call: grpc.ServerUnaryCall<EchoRequest, EchoResponse>, callback: grpc.sendUnaryData<EchoResponse>): void {
    console.log(`unary echoing message ${call.request.message}`);
    callback(null, {
      message: call.request.message,
    });
  },

  serverStreamingEcho(call: grpc.ServerWritableStream<EchoRequest, EchoResponse>): void {},

  clientStreamingEcho(
    call: grpc.ServerReadableStream<EchoRequest, EchoResponse>,
    callback: grpc.sendUnaryData<EchoResponse>,
  ): void {},

  bidirectionalStreamingEcho(call: grpc.ServerDuplexStream<EchoRequest, EchoResponse>): void {
    call.on("error", args => {
      console.log("node-grpc-server bidi() got error:", args);
    });

    call.on("data", args => {
      console.log(`bidi echoing message ${args.message}`);
      call.write(
        EchoResponse.create({
          message: args.message,
        }),
      );
    });
  },
};

const port = process.env.PORT!;
const server = new grpc.Server();
server.addService(echoDefinition, echoService);
server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`Listening on ${port}`);
  server.start();
});
