import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const Auth = (props) => {
  console.log(props);
  // const [isLogin, setIsLogin] = useState(false)
  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   props.history.push('/')
  // }

  return (
    <div className='auth flex justify-center pt-6'>
      <form className="w-1/3 flex flex-col gap-4">
        <h1>Авторизация</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit"
        gradientDuoTone="greenToBlue">Войти</Button>
      </form>
    </div>
  );
};

export default Auth;
