import { SyntheticEvent } from "react";

type FormTypes = {
  handleSubmit: (e: SyntheticEvent) => void;
};

export default function Form({ handleSubmit }: FormTypes) {
  return (
    <section className="border-r-[1px] flex-1 p-[20px]">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-[10px]" htmlFor="new-task-input">
          Enter a new task:
        </label>
        <input
          id="new-task-input"
          className="mb-[20px] border-[1px] border-black rounded-[4px] p-[5px] outline-none focus:border-blueLink"
          type="text"
          placeholder="e.g Walk a dog"
          name="content"
        />
        <button className="bg-blueLink text-white rounded-[4px] p-[5px] cursor-pointer hover:shadow-lightHover transition-effect">
          Add Task
        </button>
      </form>
    </section>
  );
}
