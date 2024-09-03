export const GET_TOKEN = 'get_token';
export const DESTROY_TOKEN = 'destroy_token';

export interface GetTokenAction {
  type: typeof GET_TOKEN;
  payload: {
    token: string;
  };
}

export interface DestroyTokenAction {
  type: typeof DESTROY_TOKEN;
}

export type ActionTypes = GetTokenAction | DestroyTokenAction;

export const getToken = (token: string): GetTokenAction => ({
  type: GET_TOKEN,
  payload: { token },
});

export const destroyToken = (): DestroyTokenAction => ({
  type: DESTROY_TOKEN,
});
