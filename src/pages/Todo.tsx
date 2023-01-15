import Form from "components/Todo/Form";
import Tasks from "components/Todo/Tasks";
import TopSection from "components/TopSection/TopSection";
import { SyntheticEvent } from "react";

export default function Todo() {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
  }
  return (
    <section className="h-[100%] flex flex-col">
      <TopSection title="To do" />
      <div className="text-[24px] flex h-[100%]">
        <Form handleSubmit={handleSubmit} />
        <Tasks />
      </div>
    </section>
  );
}
