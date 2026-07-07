function PasswordInput() {
  const handleChange = (e) => {
    console.log('Entering password...');
  };

  return (
    <input
      type="password"
      onChange={handleChange}
      placeholder="Enter your password"
    />
  );
}

export default PasswordInput;