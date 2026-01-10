function AlgorithmInputBox() {
  return (
    <div className="absolute right-0 top-0 transform -translate-x-1/8 -translate-y-full p-2 t flex flex-col gap-2 ">
      <h3>Input:</h3>
      <textarea
        className="resize-none outline-none border border-gray-400"
        rows={6}
        cols={30}
      />
    </div>
  );
}

export default AlgorithmInputBox;
