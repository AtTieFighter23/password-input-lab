function SubmitButton() {
  const handleEnter = () => {
    console.log('Mouse Entering');
  };

  const handleLeave = () => {
    console.log('Mouse Exiting');
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;