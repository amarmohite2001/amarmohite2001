export const asset = (path: string) =>
  path.startsWith('http') ? path : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
