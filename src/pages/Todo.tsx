import Form from "components/Todo/Form";
import Tasks from "components/Todo/Tasks";
import TopSection from "components/TopSection/TopSection";

export default function Todo() {
  return (
    <section className="h-[100%] flex flex-col">
      <TopSection title="To do" />
      <div className="text-[24px] flex h-[100%]">
        <Form />
        <Tasks />
      </div>
    </section>
  );
}
