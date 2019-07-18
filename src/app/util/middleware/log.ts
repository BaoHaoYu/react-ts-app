const log = (p: { dispatch: any; getState: any }) => (next: any) => (
  action: any
) => {
  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    console.log('action:', action)
  }
  return next(action)
}

export default log
