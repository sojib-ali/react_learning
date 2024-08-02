import { useRouteError } from "react-router-dom";
import N_header from "./N_header";

export function N_error() {
  const error = useRouteError();
  return (
    <>
      <N_header />
      <div className="text-center p-5 text-xl">
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isError(error) && (
          <p className="text-base text-slate-700">{error.statusText}</p>
        )}
      </div>
    </>
  );
}
function isError(error: any): error is { statusText: string } {
  return "statusText" in error;
}
