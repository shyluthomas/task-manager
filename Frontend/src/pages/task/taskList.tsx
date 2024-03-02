import { DataTable } from "@/components/dataTable/dataTable";
import { Taskcolumns } from "..";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { fetchTaskList } from "@/store/reducers/taskReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";


const TaskList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tasklist = useAppSelector((state) => state.taskReducer.taskList);
  useEffect(() => {
    dispatch(fetchTaskList())
  },[])

  return (
    <div className="container mx-auto py-10">
       <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              <div className="flex flex-column justify-between">
              <div>Here is the List..</div>
              <Button>+ Task</Button>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {tasklist.status && tasklist.status === 'loading' ? 'loading..' : 
               <DataTable columns={Taskcolumns} data={tasklist.task}></DataTable>
            }
          </CardContent>
      </Card>
      </div>
  )
};

export default TaskList;
