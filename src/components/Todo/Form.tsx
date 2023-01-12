export default function Form() {
  return (
    <section className="border-r-[1px] flex-1">
      <form className="flex flex-col">
        <label htmlFor="new-task-input">Enter a new task:</label>
        <input
          id="new-task-input"
          className=""
          type="text"
          placeholder="e.g Walk a dog"
          name="content"
        />
        <input className="" type="submit" value="Add Task" />
      </form>
    </section>
  );
}
