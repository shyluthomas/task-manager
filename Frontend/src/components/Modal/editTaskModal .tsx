import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { updateTask } from "@/store/reducers/taskReducer";
import { editTask, editTaskData } from "@/types";

type modalProps = {
  data?: editTask;
  editTaskData: editTaskData;
  toggle: () => void;
};
export default function EditTaskModal({
  data,
  editTaskData,
  toggle,
}: modalProps) {
  const formOptions = {
    defaultValues: {
      title: editTaskData.task?.title,
      description: editTaskData.task?.description,
    },
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);
  const dispatch = useAppDispatch();

  const submit = (data: any) => {
    const payload = { id: editTaskData?.task?.id, task: data };
    dispatch(updateTask(payload));
    reset();
  };

  return (
    <div>
      <Dialog open={data?.status} onOpenChange={toggle}>
        <DialogContent className="max-w-lg sm:max-w-[625px]">
          <form onSubmit={handleSubmit(submit)}>
            <DialogHeader>
              <DialogTitle>Update Task</DialogTitle>
              <DialogDescription>Edit your task here</DialogDescription>
            </DialogHeader>
            <div className="w-9/8 grid gap-4 py-4">
              <div className="flex items-center gap-4 py-0">
                <Label htmlFor="title" className="text-right sm:w-[125px]">
                  Title
                </Label>
                <Input id="title" placeholder="title" {...register("title")} />
              </div>
              {errors.title && (
                <div className="flex flex-column justify-end">
                  <p className="text-xs text-rose-500 text-left">
                    title is required
                  </p>
                </div>
              )}
              <div className="flex items-center gap-4">
                <Label htmlFor="username" className="text-right sm:w-[125px]">
                  Description
                </Label>
                <Input
                  id="description"
                  placeholder="description"
                  {...register("description")}
                />
              </div>
              {errors.description && (
                <div className="flex flex-column justify-end p-0">
                  <p className="text-xs text-rose-500 text-left p-0">
                    Description is required
                  </p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button onClick={() => toggle()}>close</Button>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
