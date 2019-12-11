export class ApolloError extends Error {
  public name: string
  public message: string
  private configData: any
  private data: any
  private time: string

  public constructor(name, initialConfig, extendedConfig) {
    super((initialConfig && initialConfig.message) || (extendedConfig && extendedConfig.message))

    this.name = name
    this.message = extendedConfig.message || initialConfig.message
    this.configData = { ...(initialConfig.data || {}), ...(extendedConfig.data || {}) }
    this.data = this.configData
    this.time = new Date().toISOString()
  }

  public serialize() {
    const error = {
      message: this.message,
      data: this.data,
      time: this.time,
      name: this.name,
    }

    return error
  }
}

export const isInstance = e => e instanceof ApolloError

export const createError = (name: string, config: any) => {
  return ApolloError.bind(null, name, config)
}

export const formatError = (err, returnNull = false) => {
  const { originalError } = err

  if (!originalError) return returnNull ? null : err
  const { name } = originalError
  if (!name || !(originalError instanceof ApolloError)) return returnNull ? null : err

  return originalError.serialize()
}
