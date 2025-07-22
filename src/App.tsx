import { useRef, useState } from "react";


export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [output, setOutput] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputRef.current?.value }),
    });

    const data = await response.json();
    setOutput(data.output);
  }

  console.log('App component rendered');
  return (
    <section>
      <h1>OpenAI en el Front End</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input type="text" id="input" name="input" ref={inputRef} />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <p>Output: {output}</p>

      </div>


    </section>
  )
}