export default function Form() {
  return (
    <section className="border-r-[1px] w-[30vw] h-[90vh]">
      <h1 className="">To Do List</h1>
      <form className="flex flex-col">
        <input
          className=""
          type="text"
          placeholder="Enter a new task..."
          name="content"
          id="content"
        />
        <input className="" type="submit" value="Add Task" />
      </form>
    </section>
  );
}
