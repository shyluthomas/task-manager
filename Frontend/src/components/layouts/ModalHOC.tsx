import CommonModal from "../Modal/CommonModal";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import NewTaskModal from "../Modal/newTaskModal";
import { setNewTaskTrigger } from "@/store/reducers/taskReducer";

export default function ModalHOC() {
  const modalMessage = useAppSelector((state) => state.taskReducer.dialog);
  const newTask = useAppSelector((state) => state.taskReducer.newTask);
  const dispatch = useAppDispatch();
  console.log("newTask", newTask);
  const toggleNewTask = () => {
    dispatch(setNewTaskTrigger(!newTask));
  };
  return (
    <div>
      {modalMessage.status && <CommonModal message={modalMessage} />}
      {newTask && <NewTaskModal status={newTask} toggle={toggleNewTask} />}
    </div>
  );
}
