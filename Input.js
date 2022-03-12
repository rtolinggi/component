import React, { useState } from "react";

const animation = {
  focus:
    "transition duration-200 text-indigo-400 peer-focus:-translate-y-5 peer-focus:bg-white peer-focus:-translate-x-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-focus:font-medium",
  blur: "absolute left-0 top-0 mx-4 px-1 cursor-text -tracking-tighter font-medium text-gray-400/50 antialiased transition duration-200 ",
  stay: "-translate-y-5 bg-white -translate-x-2 text-xs font-medium",
};

let _animation;
const Input = (props) => {
  const { label } = props;
  const [inputValue, setInputValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleBlur = () => {
    setBlur(true);
    setFocus(false);
    _animation =
      inputValue.length === 0 || !focus
        ? animation.blur + " text-gray-400/50"
        : animation.stay + " text-gray-400/50";
  };

  const handleFocus = () => {
    setFocus(true);
    setBlur(false);
    _animation =
      inputValue.length === 0 || !blur
        ? animation.focus + " text-indigo-400/50"
        : animation.stay + " text-indigo-400/50";
  };

  const handleClick = () => {
    _animation =
      inputValue.length === 0
        ? animation.stay + " text-indigo-400"
        : animation.stay + " text-indigo-400";
  };

  return (
    <div>
      <label className='relative'>
        <input
          type='text'
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => handleBlur()}
          onFocus={() => handleFocus()}
          onClick={() => handleClick()}
          className='border-2 border-inherit rounded-md py-2 px-4 text-gray-600 -tracking-tighter antialiased outline-none focus:border-indigo-400
           transition duration-200 peer'
        />
        <span
          className={`absolute left-0 top-0 mx-4 px-1 cursor-text -tracking-tighter text-gray-400/50 antialiased transition duration-200 ${_animation}`}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default Input;
