const defaultPort = 5005

export interface Environment {
  apollo: {
    introspection: boolean
    playground: boolean
    debug: boolean
  }
  api: {
    github: string | undefined
  }
  port: number | string
}

export const env: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
    debug: process.env.NODE_ENV === 'development',
  },
  api: {
    github: process.env.API_URL,
  },
  port: process.env.PORT || defaultPort,
}
