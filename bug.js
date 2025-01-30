```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for useEffect dependency
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); //This is wrong, it should not include count

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```