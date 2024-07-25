import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorPageNotFound from "./ErrorPageNotFound";
type RouteError = {
  message?: string;
};
const ErrorElement = () => {
  const error: RouteError | unknown = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <ErrorPageNotFound />;
    }
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
};
export default ErrorElement;
