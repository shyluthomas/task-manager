import CommonModal from "../Modal/CommonModal";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import NewTaskModal from "../Modal/newTaskModal";
import {
  setConfirmationSate,
  setEditTask,
  setNewTaskTrigger,
} from "@/store/reducers/taskReducer";
import EditTaskModal from "../Modal/editTaskModal ";
import ConfirmationModal from "../Modal/confirmationModal";

export default function ModalHOC() {
  const modalMessage = useAppSelector((state) => state.taskReducer.dialog);
  const newTask = useAppSelector((state) => state.taskReducer.newTask);
  const editTaskFetch = useAppSelector(
    (state) => state.taskReducer.editTaskFetch
  );
  const editTaskData = useAppSelector((state) => state.taskReducer.editTakData);
  const confirmationSate = useAppSelector(
    (state) => state.taskReducer.confirmationSate
  );
  const dispatch = useAppDispatch();
  const toggleNewTask = () => {
    dispatch(setNewTaskTrigger(!newTask));
  };
  const toggleEditTask = () => {
    dispatch(setEditTask({ status: false, id: undefined }));
  };
  const toggleDelete = () => {
    dispatch(setConfirmationSate({ status: false, action: undefined }));
  };
  console.log("first", confirmationSate);
  return (
    <div>
      {modalMessage.status && <CommonModal message={modalMessage} />}
      {newTask && <NewTaskModal status={newTask} toggle={toggleNewTask} />}
      {editTaskFetch.status == true && editTaskData.status == 200 && (
        <EditTaskModal
          data={editTaskFetch}
          editTaskData={editTaskData}
          toggle={toggleEditTask}
        />
      )}
      {confirmationSate.status === true && (
        <ConfirmationModal action={confirmationSate} toggle={toggleDelete} />
      )}
    </div>
  );
}
