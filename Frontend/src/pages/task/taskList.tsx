import { DataTable } from "@/components/dataTable/dataTable";
import { Taskcolumns } from "..";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { fetchTaskList } from "@/store/reducers/taskReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useToast } from "@/components/ui/use-toast";

const TaskList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tasklist = useAppSelector((state) => state.taskReducer.taskList);
  const message = useAppSelector((state) => state.taskReducer.message);
  const { toast } = useToast();
  useEffect(() => {
    dispatch(fetchTaskList());
  }, []);
  useEffect(() => {
    if (message.status == true) {
      toast({
        title: "Success",
        description: message.body,
      });
    }
  }, [message]);

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Task List</CardTitle>
        </CardHeader>
        <CardContent>
          {tasklist.status && tasklist.status === "loading" ? (
            "loading.."
          ) : (
            <DataTable columns={Taskcolumns} data={tasklist.task}></DataTable>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskList;
