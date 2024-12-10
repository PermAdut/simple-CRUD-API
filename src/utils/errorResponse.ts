interface ErrorResponse {
  status: number;
  message: string;
}

export function throwErrorResponse(
  status: number,
  message: string,
): ErrorResponse {
  return { status: status, message: message };
}
