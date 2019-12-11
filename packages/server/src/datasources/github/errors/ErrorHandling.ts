import { createError } from './../../../Error/ErrorHandler'

const RestError = createError('GitHubError', {
  message: 'A REST error has occurred',
})

export default class GitHubError {
  private error: any
  private message: string
  private status: number | null
  private type: string

  public constructor(error) {
    this.error = error
    this.type = ''
    this.status = null
  }

  public handleError(message = null, code = null): any {
    const error = this.extractError()

    return new RestError({
      message: message || error.message,
      data: {
        statusCode: this.status || error.status,
        code: code || error.code,
      },
    })
  }

  public get(type: string): this {
    const typeUpper = type.charAt(0).toUpperCase() + type.slice(1)

    if ('extensions' in this.error) {
      this.message = this.error.extensions.response.body[typeUpper] || this.error.extensions.response.body[type]
      console.log(this.message)
      return this
    }

    this.message = this.error.message

    return this
  }

  public getStatus(): this {
    this.status = this.error.extensions.response.status
    return this
  }

  private extractError() {
    // custom error messages
    switch (true) {
      case this.message.includes('User exist'):
        return {
          message: 'Username already exists',
          code: 'auth/user-already-exists',
          status: 409,
        }
      case this.message.includes('unauthorized'):
        return {
          message: 'Unauthorized',
          code: 'auth/unauthorized',
          status: 403,
        }
      default:
        return {
          message: this.message,
          code: null,
        }
    }
  }
}
