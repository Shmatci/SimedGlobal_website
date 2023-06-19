import { useRef } from 'react'

const NewsLetter = () => {
  const inputRef = useRef(null)

  const subscribeUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    }); 
  };

  return (
    <form onClick={subscribeUser} className="position-relative">
      <input type="email" ref={inputRef} placeholder="Enter your email" required />
      <button className="tran3s fw-500 position-absolute" type='submit'>Subscribe</button>
    </form>
  );
};

export default NewsLetter;
