import {WebSocketTransport} from "./websocket";

export const transports: Map<string, Object> = new Map(); {
    ['websocket', WebSocketTransport]
}