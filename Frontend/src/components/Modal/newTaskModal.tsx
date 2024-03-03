import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/hooks/hooks";
import { setNewTask } from "@/store/reducers/taskReducer";

type modalProps = {
  status: boolean;
  toggle: () => void;
};
export default function NewTaskModal({ status, toggle }: modalProps) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    description: Yup.string().required("description is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);
  const dispatch = useAppDispatch();

  const submit = (data: any) => {
    dispatch(setNewTask(data));
    reset();
  };

  return (
    <div>
      <Dialog open={status} onOpenChange={toggle}>
        <DialogContent className="max-w-lg sm:max-w-[625px]">
          <form onSubmit={handleSubmit(submit)}>
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>Create your task here</DialogDescription>
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
              <Button type="submit">+ Add</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
