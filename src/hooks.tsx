import React, { FC, useRef, useEffect } from 'react';

const Demo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default Demo;
