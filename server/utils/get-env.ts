interface TEnv {
  PORT: number;
}

const envVariables: TEnv = {
  PORT: Number(process.env.PORT) || 3000,
};

const envHandler: ProxyHandler<TEnv> = {
  get(target: TEnv, property: keyof TEnv) {
    return target[property];
  },
  set(target: TEnv, property: keyof TEnv, value: any): boolean {
    const expectedType = typeof target[property];

    if (typeof value !== expectedType) {
      throw new TypeError(
        `Cannot set ${String(
          property
        )}: expected ${expectedType}, got ${typeof value}`
      );
    }

    target[property] = value as TEnv[keyof TEnv];
    return true;
  },
};

const env = new Proxy(envVariables, envHandler);

export default env;
