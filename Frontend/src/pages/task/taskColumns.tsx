import { Button } from "@/components/ui/button"
import {
    CaretSortIcon,
  } from "@radix-ui/react-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { task } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const Taskcolumns: ColumnDef<task>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
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
            )
        }
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
            )
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
            )
        },
    },
    {
        accessorKey: "id",
        header: "Action",
        cell:  ({ row }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => console.log('first', row.id)}
                    className="p-0"
                >
                    Edit 
                </Button>
            )
    },
  }
]
