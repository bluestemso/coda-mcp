type Config = {
  apiKey: string;
};

export const config: Config = {
  apiKey: process.env.CODA_API_KEY!,
};
