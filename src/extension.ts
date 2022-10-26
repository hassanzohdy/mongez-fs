/**
 * Get file extension
 */
export function extension(path: string): string {
  return String(path).split(".").pop() || "";
}
