/// <reference types="node"/>
declare module 'gulp-nunjucks' {
  function compile (p?: object): NodeJS.ReadWriteStream

  const nunjucks: { compile: typeof compile }

  export default nunjucks
}
