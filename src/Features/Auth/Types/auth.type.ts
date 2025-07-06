export type formComponentType = {
  title: string;
  buttonLabel: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLogin: boolean;
  authDetails: {
    email: string;
    password: string;
  };
};

export type loginPageType = {};

export type signupPageType = {};

export type authSliceActionType = {
  email: string;
  password: string;
};
