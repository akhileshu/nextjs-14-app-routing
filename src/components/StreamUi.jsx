"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import ErrorBoundaryAndSuspenseWrapper from "./ErrorBoundaryAndSuspenseWrapper";
function StreamUi() {
  const toStream = ["country", "state", "city"];
  const router = useRouter();
  return (
    <>
      <h2>this component will load in streaming manner</h2>
      <button onClick={() => router.push("/")}>go to home</button>
      {toStream.map((item, id) => {
        return (
          <>
            <FetchComponent key={id} item={item} waitInMs={id * 1000} />
            <br />
          </>
        );
      })}
    </>
  );
}

const FetchComponent = ({ item, waitInMs }) => {
  return (
    <ErrorBoundaryAndSuspenseWrapper loadingMsg={"loading... " + item}>
      <StreamItem item={item} waitInMs={waitInMs} />
    </ErrorBoundaryAndSuspenseWrapper>
  );
};

export const StreamItem = ({ item, waitInMs }) => {
  // const launchError = true
  const data = use(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("you live in " + item);
        } else {
          reject(new Error("error while fetching " + item));
        }
      }, waitInMs);
    })
  );
  return <div>{data}</div>;
};

export default StreamUi;
