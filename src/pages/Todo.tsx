import Form from "components/Todo/Form";
import Tasks from "components/Todo/Tasks";
import TopSection from "components/TopSection/TopSection";

export default function Todo() {
  return (
    <section>
      <TopSection title="To do" />
      <div className="p-[20px] text-[24px] flex">
        <Form />
        <Tasks />
      </div>
    </section>
  );
}
