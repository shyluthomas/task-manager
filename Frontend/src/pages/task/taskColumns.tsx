import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { task } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useAppDispatch } from "@/hooks/hooks";
import {
  setConfirmationSate,
  setDeleteTask,
  setEditTask,
} from "@/store/reducers/taskReducer";

const ActionButton = ({ id }: any): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          dispatch(setEditTask({ status: true, id }));
        }}
        className="p-2"
      >
        edit
      </Button>
      <Button
        onClick={() => {
          const payload = {
            status: true,
            messgae: "Are you sure able to delete the item?",
            okAction: { deleteAction: () => dispatch(setDeleteTask(id)) },
          };
          dispatch(setConfirmationSate(payload));
        }}
        className="p-2"
      >
        delete
      </Button>
    </div>
  );
};

export const Taskcolumns: ColumnDef<task>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Task
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Description
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "published",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          published
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionButton id={id}></ActionButton>;
    },
  },
];
