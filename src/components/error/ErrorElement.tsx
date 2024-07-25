import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorPageNotFound from "./ErrorPageNotFound";

const ErrorElement = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <ErrorPageNotFound />;
    }
  }
  return (
    <div>
      <h1>Oops, something went wrong!</h1>
    </div>
  );
};
export default ErrorElement;
