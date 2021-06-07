import { useMqttState } from "mqtt-react-hooks";
import React from "react";

export default function ConnectionStatus() {
  /*
   * Status list
   * - Offline
   * - Connected
   * - Reconnecting
   * - Closed
   * - Error: printed in console too
   */
  const { connectionStatus } = useMqttState();

  return <h1>{`Status: ${connectionStatus}`}</h1>;
}
