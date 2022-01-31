import { FunctionComponent, useRef } from 'react';
import { useHttpRequest } from './use-http-request';
import { ComponentMeta } from '@storybook/react';

const Block: React.VoidFunctionComponent = () => {
  const {
    isLoading,
    error,
    sendRequest: sendUserAuthRequest,
  } = useHttpRequest();

  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (usernameInputRef.current?.value && passwordInputRef.current?.value) {
      const enteredUsername = usernameInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      // add validation here

      // function to log returned json object
      const transformReturnObject = (returnedObject: any) => {
        console.log(returnedObject);
      };

      sendUserAuthRequest(
        {
          url: 'http://api.rancup.com/RancUpUser/api/User/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: { userNameOrEmail: enteredUsername, password: enteredPassword },
        },
        transformReturnObject
      );
    }
  };

  return (
    <section className="mt-12 mx-auto mb-4">
      <h1 className="text-center text-white">Login</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label className="block font-bold text-white mb-2" htmlFor="username">
            Your Username
          </label>
          <input
            className="bg-gray-50 border-solid border-white rounded-t-sm p-1 w-full text-left"
            type="text"
            id="username"
            required
            ref={usernameInputRef}
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-gray-50 border-solid border-white rounded-t-sm p-1 w-full text-left"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="cursor-pointer text-white bg-blue-300 border-blue-300 border-solid rounded-t-sm py-2 px-10">
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default {
  title: `Components/Hooks/UseHttpRequest`,
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};
